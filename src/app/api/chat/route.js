import { NextResponse } from "next/server";
import { PRODI, BERITA, TESTIMONI, GALERI_ITEMS, STATS } from "@/lib/data";

const MODEL_NAME = process.env.MODEL_NAME;
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;
const NVIDIA_BASE_URL = process.env.NVIDIA_BASE_URL;

function extractTextFromHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildInternalKnowledge() {
  const prodiSummary = PRODI.map((p) => `- ${p.nama} (${p.jenjang}): ${p.deskripsi}`).join("\n");
  const beritaSummary = BERITA.map((b) => `- ${b.judul} (${b.tanggal}): ${b.excerpt}`).join("\n");
  const galeriSummary = GALERI_ITEMS.map((g) => `- ${g.judul} (${g.kategori})`).join("\n");
  const testiSummary = TESTIMONI.map((t) => `- ${t.nama}, ${t.prodi}: ${t.teks}`).join("\n");
  const statsSummary = STATS.map((s) => `- ${s.label}: ${s.value}`).join("\n");

  return [
    "Informasi internal situs Politala:",
    "Program studi:",
    prodiSummary,
    "Berita terbaru:",
    beritaSummary,
    "Galeri dan kegiatan:",
    galeriSummary,
    "Testimoni alumni:",
    testiSummary,
    "Statistik utama:",
    statsSummary,
  ].join("\n");
}

function parseAssistantAnswer(data) {
  if (data?.choices?.[0]?.message?.content) {
    return data.choices[0].message.content;
  }
  if (typeof data?.response === "string") {
    return data.response;
  }
  if (data?.outputs?.[0]?.content?.[0]?.text) {
    return data.outputs[0].content[0].text;
  }
  if (data?.choices?.[0]?.text) {
    return data.choices[0].text;
  }
  return JSON.stringify(data);
}

export async function POST(request) {
  if (!MODEL_NAME || !NVIDIA_API_KEY || !NVIDIA_BASE_URL) {
    return NextResponse.json(
      { error: "Server belum dikonfigurasi dengan benar. Pastikan env MODEL_NAME, NVIDIA_API_KEY, dan NVIDIA_BASE_URL tersedia." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question) {
    return NextResponse.json({ error: "Pertanyaan tidak boleh kosong." }, { status: 400 });
  }

  let officialText = "Tidak dapat mengambil konten situs resmi saat ini.";
  try {
    const officialResponse = await fetch("https://www.politala.ac.id", {
      method: "GET",
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PolitalaChatbot/1.0)" },
      next: { revalidate: 3600 }, // ⚡ Bolt: Cache external fetch to prevent redundant requests on every chatbot query
    });
    if (officialResponse.ok) {
      const html = await officialResponse.text();
      officialText = extractTextFromHtml(html).slice(0, 2500);
    }
  } catch {
    officialText = "Gagal mengambil konten resmi. Gunakan informasi internal dan jawaban yang paling handal.";
  }

  const systemPrompt = `Kamu adalah asisten AI yang membantu pengunjung Politeknik Negeri Tanah Laut (Politala). Jawab dengan Bahasa Indonesia yang sopan dan jelas. Gunakan terlebih dahulu data internal situs ini dan situs resmi https://www.politala.ac.id sebagai referensi. Jika informasi tidak jelas, jawab bahwa kamu tidak memiliki cukup informasi.

${buildInternalKnowledge()}

Sumber resmi halaman utama Politala:
${officialText}

Jika pertanyaan menyangkut pendaftaran, jurusan, fasilitas, atau kontak, jawab dengan ringkas dan tepat berdasarkan sumber di atas.`;

  const payload = {
    model: MODEL_NAME,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ],
    temperature: 0.2,
    max_output_tokens: 900,
  };

  const response = await fetch(NVIDIA_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${NVIDIA_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    return NextResponse.json({ error: "Respons server AI tidak valid." }, { status: 502 });
  }

  if (!response.ok) {
    return NextResponse.json({ error: data.error?.message || "Gagal memproses permintaan AI." }, { status: response.status });
  }

  const answer = parseAssistantAnswer(data);
  return NextResponse.json({ answer });
}
