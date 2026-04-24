import { Card, SectionHeader } from "@/components/ui";

const highlights = [
  {
    icon: "🔬",
    title: "Laboratorium Modern",
    description: "Fasilitas laboratorium lengkap dan siap pakai untuk praktik mahasiswa di bidang teknologi dan kelautan.",
  },
  {
    icon: "👨‍🏫",
    title: "Dosen Berpengalaman",
    description: "Pengajar terdiri dari akademisi dan praktisi industri yang mendampingi mahasiswa secara intensif.",
  },
  {
    icon: "🤝",
    title: "Mitra Industri",
    description: "Kerja sama magang dan rekrutmen dengan perusahaan nasional untuk memperkuat kesiapan kerja.",
  },
  {
    icon: "📚",
    title: "Kurikulum Terapan",
    description: "Program studi dirancang berbasis kebutuhan industri dan perkembangan teknologi terkini.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ padding: "96px 24px", maxWidth: 1160, margin: "0 auto" }}>
      <SectionHeader
        badge="Tentang Kami"
        title="Profil Politala"
        subtitle="Politeknik Negeri Tanah Laut berdiri untuk mencetak lulusan vokasi yang siap bekerja, berwirausaha, dan berkontribusi bagi pembangunan daerah dan nasional."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 40 }}>
        <div>
          <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
            Politala adalah perguruan tinggi vokasi negeri yang fokus pada pendidikan terapan, penelitian terapan, serta kemitraan dengan industri lokal dan nasional.
          </p>
          <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>
            Dengan program studi unggulan di bidang informatika, teknik, dan agribisnis perikanan, Politala mempersiapkan mahasiswa menghadapi tantangan global sekaligus berakar pada kebutuhan pembangunan daerah.
          </p>
          <div style={{ display: "grid", gap: 16 }}>
            {highlights.map((item) => (
              <Card key={item.title} style={{ padding: 24 }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ color: "#0f172a", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8 }}>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card style={{ padding: 32, background: "#eff6ff", border: "1px solid #dbeafe" }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1e3a8a", marginBottom: 16 }}>Visi & Misi</h2>
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>Visi</h3>
              <p style={{ color: "#475569", lineHeight: 1.8 }}>
                Menjadi politeknik unggul bertaraf nasional pada tahun 2030 dengan lulusan yang berkompeten dan berdaya saing.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>Misi</h3>
              <ul style={{ color: "#475569", lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Pendidikan vokasi berkualitas dan relevan dengan kebutuhan industri.</li>
                <li>Penelitian terapan yang memberi solusi bagi masyarakat.</li>
                <li>Pembangunan kemitraan strategis dengan industri dan pemerintah.</li>
                <li>Pemberdayaan kewirausahaan untuk masa depan berkelanjutan.</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
