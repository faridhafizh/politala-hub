"use client";
import { Card, SectionHeader } from "@/components/ui";

const highlights = [
  {
    icon: "🔬",
    title: "Laboratorium Modern",
    description:
      "Fasilitas laboratorium lengkap dan siap pakai untuk praktik mahasiswa di bidang teknologi dan kelautan.",
  },
  {
    icon: "👨‍🏫",
    title: "Dosen Berpengalaman",
    description:
      "Pengajar terdiri dari akademisi dan praktisi industri yang mendampingi mahasiswa secara intensif.",
  },
  {
    icon: "🤝",
    title: "Mitra Industri",
    description:
      "Kerja sama magang dan rekrutmen dengan perusahaan nasional untuk memperkuat kesiapan kerja.",
  },
  {
    icon: "📚",
    title: "Kurikulum Terapan",
    description:
      "Program studi dirancang berbasis kebutuhan industri dan perkembangan teknologi terkini.",
  },
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container about-container">
        <SectionHeader
          badge="Tentang Kami"
          title="Profil Politala"
          subtitle="Politeknik Negeri Tanah Laut berdiri untuk mencetak lulusan vokasi yang siap bekerja, berwirausaha, dan berkontribusi bagi pembangunan daerah dan nasional."
        />

        <div className="about-page-grid">
          {/* Left column: description + highlights */}
          <div>
            <p className="about-description">
              Politala adalah perguruan tinggi vokasi negeri yang fokus pada
              pendidikan terapan, penelitian terapan, serta kemitraan dengan
              industri lokal dan nasional.
            </p>
            <p className="about-description">
              Dengan program studi unggulan di bidang informatika, teknik, dan
              agribisnis perikanan, Politala mempersiapkan mahasiswa menghadapi
              tantangan global sekaligus berakar pada kebutuhan pembangunan
              daerah.
            </p>

            <div className="highlights-grid">
              {highlights.map((item) => (
                <Card key={item.title} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right column: Visi & Misi card */}
          <div>
            <Card className="vision-card">
              <h2 className="vision-heading">Visi & Misi</h2>

              <div className="vision-block">
                <h3 className="vision-subheading">Visi</h3>
                <p className="vision-text">
                  Menjadi politeknik unggul bertaraf nasional pada tahun 2030
                  dengan lulusan yang berkompeten dan berdaya saing.
                </p>
              </div>

              <div className="vision-block">
                <h3 className="vision-subheading">Misi</h3>
                <ul className="vision-list">
                  <li>
                    Pendidikan vokasi berkualitas dan relevan dengan kebutuhan
                    industri.
                  </li>
                  <li>
                    Penelitian terapan yang memberi solusi bagi masyarakat.
                  </li>
                  <li>
                    Pembangunan kemitraan strategis dengan industri dan
                    pemerintah.
                  </li>
                  <li>
                    Pemberdayaan kewirausahaan untuk masa depan berkelanjutan.
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}