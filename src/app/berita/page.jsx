import { SectionHeader, Card, Badge } from "@/components/ui";
import { BERITA } from "@/lib/data";

export default function BeritaPage() {
  return (
    <div style={{ padding: "96px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        badge="Berita"
        title="Kabar Terbaru dari Politala"
        subtitle="Ikuti perkembangan kegiatan akademik, prestasi mahasiswa, dan informasi penerimaan mahasiswa baru."
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
        {BERITA.map((item) => (
          <Card key={item.id} style={{ cursor: "default" }}>
            <div style={{ height: 180, background: "linear-gradient(135deg, #eff6ff, #dbeafe)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>{item.gambar}</div>
            <div style={{ padding: 24 }}>
              <Badge color="#0ea5e9">{item.kategori}</Badge>
              <h3 style={{ color: "#0f172a", fontSize: 18, fontWeight: 700, margin: "16px 0" }}>{item.judul}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: 18 }}>{item.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#64748b", fontSize: 13 }}>
                <span>📅 {item.tanggal}</span>
                <span style={{ color: "#2563eb", fontWeight: 700 }}>Baca selengkapnya →</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
