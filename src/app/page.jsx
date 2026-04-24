"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge, Button, Card, SectionHeader, Icon } from "@/components/ui";
import { PRODI, BERITA, TESTIMONI, GALERI_ITEMS, STATS } from "@/lib/data";

export default function HomePage() {
  const router = useRouter();
  const nav = (path) => router.push(path === "home" ? "/" : `/${path}`);
  const [activeTestimoni, setActiveTestimoni] = useState(0);
  const [galeriFilter, setGaleriFilter] = useState("Semua");
  const bubblePositions = Array.from({ length: 20 }, (_, i) => ({
    left: `${(i * 11) % 100}%`,
    top: `${(i * 7) % 100}%`,
  }));

  useEffect(() => {
    const t = setInterval(() => setActiveTestimoni(p => (p + 1) % TESTIMONI.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 68 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, #3b82f620, transparent)", top: -200, right: -100 }} />
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #60a5fa15, transparent)", bottom: -100, left: -100 }} />
          {bubblePositions.map((pos, i) => (
            <div key={i} style={{ position: "absolute", width: 2, height: 2, borderRadius: "50%", background: "#ffffff40", left: pos.left, top: pos.top }} />
          ))}
        </div>

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ffffff15", border: "1px solid #ffffff25", borderRadius: 30, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 12 }}>🏛️</span>
              <span style={{ color: "#93c5fd", fontSize: 13, fontWeight: 600 }}>Perguruan Tinggi Vokasi Negeri</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
              Wujudkan Impianmu<br />
              <span style={{ background: "linear-gradient(90deg, #60a5fa, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bersama Politala</span>
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: 18, lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
              Politeknik Negeri Tanah Laut hadir untuk mencetak tenaga ahli terampil, inovatif, dan siap kerja di bidang teknologi, industri, dan kelautan.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => nav("daftar")} style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", border: "none", borderRadius: 12, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 8px 24px #2563eb60" }}>
                🎓 Daftar Sekarang
              </button>
              <button onClick={() => nav("prodi")} style={{ background: "transparent", color: "#fff", border: "2px solid #ffffff40", borderRadius: 12, padding: "15px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                Lihat Program Studi →
              </button>
            </div>

            <div className="stats-grid" style={{ display: "flex", gap: 32, marginTop: 48 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 900, color: "#60a5fa" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "clamp(280px, 40vw, 400px)", height: "clamp(280px, 40vw, 400px)", borderRadius: "50%", background: "linear-gradient(135deg, #1e40af40, #3b82f620)", border: "2px solid #3b82f630", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(100px, 15vw, 160px)", position: "relative" }}>
              🎓
              <div style={{ position: "absolute", top: -10, right: -10, width: 60, height: 60, borderRadius: "50%", background: "#f59e0b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: "0 8px 20px #f59e0b60" }}>⭐</div>
              <div style={{ position: "absolute", bottom: 20, left: -20, width: 50, height: 50, borderRadius: "50%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, boxShadow: "0 8px 20px #10b98160" }}>✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#fff", padding: "0 24px", boxShadow: "0 4px 20px #00000010" }}>
        <div className="stats-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}>
              <div style={{ fontSize: 28, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#1e40af" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section style={{ padding: "96px 24px", background: "#f8fafc" }}>
        <div className="about-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Badge>Tentang Kami</Badge>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, margin: "16px 0 24px" }}>
              Membangun Generasi Vokasi yang Unggul dan Berdaya Saing
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Politeknik Negeri Tanah Laut (Politala) berdiri sebagai perguruan tinggi vokasi negeri yang berkomitmen menghasilkan lulusan profesional yang siap menghadapi tantangan industri modern.
            </p>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              Dengan kurikulum berbasis industri, fasilitas laboratorium modern, dan pengajar berpengalaman, Politala menjadi pilihan terbaik untuk masa depan pendidikan vokasi di Kalimantan Selatan.
            </p>
            {["Akreditasi BAN-PT", "Kurikulum Berbasis Industri", "Magang di Perusahaan Terkemuka", "Beasiswa Unggulan Tersedia"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="check" size={14} />
                </div>
                <span style={{ fontSize: 15, color: "#374151", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
            <div style={{ marginTop: 32 }}>
              <Button onClick={() => nav("about")} icon="arrowRight">Selengkapnya</Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "🏛️", title: "Kampus Modern", desc: "Fasilitas gedung dan ruang belajar berstandar nasional" },
              { icon: "🔬", title: "Lab Lengkap", desc: "Laboratorium dengan peralatan terkini sesuai industri" },
              { icon: "👨‍🏫", title: "Dosen Ahli", desc: "Pengajar berpengalaman dari akademisi dan praktisi" },
              { icon: "🤝", title: "Mitra Industri", desc: "Jaringan luas dengan perusahaan nasional & multinasional" },
            ].map((item, i) => (
              <Card key={i} style={{ padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM STUDI */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader badge="Program Studi" title="Pilih Jurusan yang Tepat Untukmu" subtitle="Kami menyediakan 6 program studi unggulan yang dirancang sesuai kebutuhan industri masa kini." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24, marginBottom: 40 }}>
            {PRODI.map(p => (
              <Card key={p.id} style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <Badge color={p.color}>{p.jenjang}</Badge>
                    <h3 style={{ fontWeight: 700, color: "#0f172a", marginTop: 6, fontSize: 16 }}>{p.nama}</h3>
                  </div>
                </div>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.deskripsi}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>👨‍🎓 {p.students} mahasiswa</span>
                  <button onClick={() => nav("prodi")} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontFamily: "inherit" }}>
                    Detail <Icon name="chevronRight" size={14} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={() => nav("prodi")} variant="secondary">Lihat Semua Program Studi</Button>
          </div>
        </div>
      </section>

      {/* BERITA */}
      <section style={{ padding: "96px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <Badge>Berita Terbaru</Badge>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, color: "#0f172a", marginTop: 12 }}>Kabar Terbaru dari Politala</h2>
            </div>
            <Button onClick={() => nav("berita")} variant="ghost" small>Lihat Semua →</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {BERITA.slice(0, 3).map(b => (
              <Card key={b.id} style={{ cursor: "pointer" }} onClick={() => nav("berita")}>
                <div style={{ height: 160, background: "linear-gradient(135deg, #eff6ff, #dbeafe)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>{b.gambar}</div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    <Badge color="#0891b2">{b.kategori}</Badge>
                  </div>
                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: 16, lineHeight: 1.4, marginBottom: 12 }}>{b.judul}</h3>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{b.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>📅 {b.tanggal}</span>
                    <span style={{ fontSize: 13, color: "#2563eb", fontWeight: 600 }}>Baca →</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader badge="Galeri" title="Kehidupan Kampus Politala" subtitle="Sekilas momen berharga dari kegiatan akademik dan non-akademik di lingkungan kampus kami." />
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
            {["Semua", "Kampus", "Fasilitas", "Kegiatan"].map(f => (
              <button key={f} onClick={() => setGaleriFilter(f)} style={{ background: galeriFilter === f ? "#1e40af" : "#f1f5f9", color: galeriFilter === f ? "#fff" : "#64748b", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {GALERI_ITEMS.filter(g => galeriFilter === "Semua" || g.kategori === galeriFilter).slice(0, 6).map(g => (
              <div key={g.id} style={{ borderRadius: 14, background: g.color, height: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s", overflow: "hidden", position: "relative" }}
                onMouseEnter={e => { e.currentTarget.querySelector(".overlay").style.opacity = "1"; }}
                onMouseLeave={e => { e.currentTarget.querySelector(".overlay").style.opacity = "0"; }}>
                <div style={{ fontSize: 48 }}>{g.icon}</div>
                <div className="overlay" style={{ position: "absolute", inset: 0, background: "#1e40afcc", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "all 0.3s" }}>
                  <div style={{ textAlign: "center", color: "#fff" }}>
                    <div style={{ fontSize: 24 }}>🔍</div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>{g.judul}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Button onClick={() => nav("galeri")} variant="secondary">Lihat Galeri Lengkap</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section style={{ padding: "96px 24px", background: "linear-gradient(135deg, #0f172a, #1e3a8a)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Badge>Testimoni</Badge>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#fff", margin: "16px 0 48px" }}>Kata Alumni Kami</h2>
          <div style={{ background: "#ffffff08", border: "1px solid #ffffff15", borderRadius: 24, padding: "48px 40px", position: "relative" }}>
            <div style={{ fontSize: 64, marginBottom: 24 }}>{TESTIMONI[activeTestimoni].foto}</div>
            <p style={{ color: "#cbd5e1", fontSize: 17, lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>
              “{TESTIMONI[activeTestimoni].teks}”
            </p>
            <div style={{ color: "#f59e0b", fontSize: 18, marginBottom: 16 }}>{"⭐".repeat(TESTIMONI[activeTestimoni].rating)}</div>
            <div style={{ fontWeight: 700, color: "#fff" }}>{TESTIMONI[activeTestimoni].nama}</div>
            <div style={{ color: "#60a5fa", fontSize: 13, marginTop: 4 }}>{TESTIMONI[activeTestimoni].prodi}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {TESTIMONI.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimoni(i)} style={{ width: i === activeTestimoni ? 24 : 8, height: 8, borderRadius: 4, background: i === activeTestimoni ? "#3b82f6" : "#334155", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 24px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 56, marginBottom: 24 }}>🚀</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", marginBottom: 16 }}>Siap Memulai Perjalananmu?</h2>
          <p style={{ color: "#64748b", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            Bergabunglah bersama ribuan mahasiswa yang telah membuktikan kualitas pendidikan vokasi terbaik di Kalimantan Selatan.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Button onClick={() => nav("daftar")}>Daftar Sekarang 🎓</Button>
            <Button onClick={() => nav("kontak")} variant="secondary">Hubungi Kami</Button>
          </div>
        </div>
      </section>
    </div>
  );
}