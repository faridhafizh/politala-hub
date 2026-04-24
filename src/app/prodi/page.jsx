import { SectionHeader, Card, Badge } from "@/components/ui";
import { PRODI } from "@/lib/data";

export default function ProdiPage() {
  return (
    <div style={{ padding: "96px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        badge="Program Studi"
        title="Pilih Program Studi yang Sesuai"
        subtitle="Kami menawarkan enam program studi vokasi unggulan yang dirancang untuk menjawab kebutuhan industri dan masyarakat." 
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
        {PRODI.map((prodi) => (
          <Card key={prodi.id} style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
              <div style={{ width: 56, height: 56, borderRadius: 18, background: prodi.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{prodi.icon}</div>
              <div>
                <Badge color={prodi.color}>{prodi.jenjang}</Badge>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginTop: 10 }}>{prodi.nama}</h3>
              </div>
            </div>
            <p style={{ color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>{prodi.deskripsi}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#64748b", fontSize: 14 }}>👨‍🎓 {prodi.students} Mahasiswa aktif</span>
              <button style={{ background: "transparent", border: "none", color: "#2563eb", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                Pelajari lebih lanjut →
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
