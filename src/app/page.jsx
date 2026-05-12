"use client";
import { useState, useEffect, useMemo } from "react";
import { Badge, Button, Card, SectionHeader, Icon } from "@/components/ui";
import { PRODI, BERITA, TESTIMONI, GALERI_ITEMS, STATS } from "@/lib/data";

// ── Reusable sub‑components ──
const HeroStats = ({ stats }) => (
  <div className="hero-stats">
    {stats.map((s, i) => (
      <div key={i} className="hero-stat-item">
        <div className="hero-stat-value">{s.value}</div>
        <div className="hero-stat-label">{s.label}</div>
      </div>
    ))}
  </div>
);

const StatsBar = ({ stats }) => (
  <section className="stats-bar">
    <div className="stats-grid-full">
      {stats.map((s, i) => (
        <div key={i} className="stats-card">
          <div className="stats-icon">{s.icon}</div>
          <div className="stats-value">{s.value}</div>
          <div className="stats-label">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const AboutCards = ({ items }) => (
  <div className="about-cards-grid">
    {items.map((item, i) => (
      <Card key={i} className="about-card-item">
        <div className="about-card-icon">{item.icon}</div>
        <h4 className="about-card-title">{item.title}</h4>
        <p className="about-card-desc">{item.desc}</p>
      </Card>
    ))}
  </div>
);

const ProgramCard = ({ prodi, href }) => (
  <Card className="prodi-card" href={href}>
    <div className="prodi-card-header">
      <div
        className="prodi-card-icon"
        style={{ backgroundColor: prodi.color + "15", color: prodi.color }}
      >
        {prodi.icon}
      </div>
      <div>
        <Badge color={prodi.color}>{prodi.jenjang}</Badge>
        <h3 className="prodi-card-title">{prodi.nama}</h3>
      </div>
    </div>
    <p className="prodi-card-desc">{prodi.deskripsi}</p>
    <div className="prodi-card-footer">
      <span className="prodi-card-stats">👨‍🎓 {prodi.students} mahasiswa</span>
      <span className="prodi-card-link">
        Detail <Icon name="chevronRight" size={14} />
      </span>
    </div>
  </Card>
);

const NewsCard = ({ berita, href }) => (
  <Card className="news-card" href={href} hover>
    <div className="news-card-image">{berita.gambar}</div>
    <div className="news-card-body">
      <Badge color="#0891b2">{berita.kategori}</Badge>
      <h3 className="news-card-title">{berita.judul}</h3>
      <p className="news-card-excerpt">{berita.excerpt}</p>
      <div className="news-card-footer">
        <span className="news-card-date">📅 {berita.tanggal}</span>
        <span className="news-card-link">Baca →</span>
      </div>
    </div>
  </Card>
);

const GalleryItem = ({ item }) => (
  <div className="gallery-item" style={{ backgroundColor: item.color }}>
    <span className="gallery-item-icon">{item.icon}</span>
    <div className="gallery-item-overlay">
      <div className="gallery-overlay-content">
        <span>🔍</span>
        <span>{item.judul}</span>
      </div>
    </div>
  </div>
);

const TestimonialSection = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];
  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <Badge>Testimoni</Badge>
        <h2 className="testimonial-title">Kata Alumni Kami</h2>
        <div className="testimonial-card">
          <div className="testimonial-photo">{current.foto}</div>
          <p className="testimonial-text">“{current.teks}”</p>
          <div className="testimonial-stars">
            {"⭐".repeat(current.rating)}
          </div>
          <div className="testimonial-name">{current.nama}</div>
          <div className="testimonial-prodi">{current.prodi}</div>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`testimonial-dot ${i === active ? "active" : ""}`}
              aria-label={`Testimoni ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Main Page Component ──
export default function HomePage() {
  // Memoized bubbles positions – same across renders
  const bubbles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        left: `${(i * 11) % 100}%`,
        top: `${(i * 7) % 100}%`,
      })),
    []
  );

  const [galeriFilter, setGaleriFilter] = useState("Semua");
  const filterButtons = ["Semua", "Kampus", "Fasilitas", "Kegiatan"];

  const aboutItems = [
    { icon: "🏛️", title: "Kampus Modern", desc: "Fasilitas gedung dan ruang belajar berstandar nasional" },
    { icon: "🔬", title: "Lab Lengkap", desc: "Laboratorium dengan peralatan terkini sesuai industri" },
    { icon: "👨‍🏫", title: "Dosen Ahli", desc: "Pengajar berpengalaman dari akademisi dan praktisi" },
    { icon: "🤝", title: "Mitra Industri", desc: "Jaringan luas dengan perusahaan nasional & multinasional" },
  ];

  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
          {bubbles.map((pos, i) => (
            <div key={i} className="hero-bubble" style={pos} />
          ))}
        </div>

        <div className="hero-grid container">
          <div className="hero-text">
            <div className="hero-badge">
              <span>🏛️</span>
              <span>Perguruan Tinggi Vokasi Negeri</span>
            </div>
            <h1 className="hero-heading">
              Wujudkan Impianmu
              <br />
              <span className="hero-heading-highlight">Bersama Politala</span>
            </h1>
            <p className="hero-description">
              Politeknik Negeri Tanah Laut hadir untuk mencetak tenaga ahli
              terampil, inovatif, dan siap kerja di bidang teknologi, industri,
              dan kelautan.
            </p>
            <div className="hero-actions">
              <Button href="/daftar" icon="arrowRight">
                🎓 Daftar Sekarang
              </Button>
              <Button variant="white" href="/prodi">
                Lihat Program Studi →
              </Button>
            </div>
            <HeroStats stats={STATS} />
          </div>
          <div className="hero-image">
            <div className="hero-circle">
              🎓
              <div className="hero-circle-star">⭐</div>
              <div className="hero-circle-check">✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <StatsBar stats={STATS} />

      {/* ── About Snippet ── */}
      <section className="section about-section">
        <div className="about-grid container">
          <div>
            <Badge>Tentang Kami</Badge>
            <h2 className="section-heading">
              Membangun Generasi Vokasi yang Unggul dan Berdaya Saing
            </h2>
            <p className="text-muted">
              Politeknik Negeri Tanah Laut (Politala) berdiri sebagai perguruan
              tinggi vokasi negeri yang berkomitmen menghasilkan lulusan
              profesional yang siap menghadapi tantangan industri modern.
            </p>
            <p className="text-muted">
              Dengan kurikulum berbasis industri, fasilitas laboratorium modern,
              dan pengajar berpengalaman, Politala menjadi pilihan terbaik untuk
              masa depan pendidikan vokasi di Kalimantan Selatan.
            </p>
            <div className="feature-list">
              {[
                "Akreditasi BAN-PT",
                "Kurikulum Berbasis Industri",
                "Magang di Perusahaan Terkemuka",
                "Beasiswa Unggulan Tersedia",
              ].map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon">
                    <Icon name="check" size={14} />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Button href="/about" icon="arrowRight">
              Selengkapnya
            </Button>
          </div>
          <AboutCards items={aboutItems} />
        </div>
      </section>

      {/* ── Program Studi ── */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            badge="Program Studi"
            title="Pilih Jurusan yang Tepat Untukmu"
            subtitle="Kami menyediakan 6 program studi unggulan yang dirancang sesuai kebutuhan industri masa kini."
          />
          <div className="prodi-grid">
            {PRODI.map((p) => (
              <ProgramCard
                key={p.id}
                prodi={p}
                href="/prodi"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/prodi" variant="secondary">
              Lihat Semua Program Studi
            </Button>
          </div>
        </div>
      </section>

      {/* ── Berita ── */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <Badge>Berita Terbaru</Badge>
              <h2 className="section-heading">Kabar Terbaru dari Politala</h2>
            </div>
            <Button href="/berita" variant="ghost" small>
              Lihat Semua →
            </Button>
          </div>
          <div className="news-grid">
            {BERITA.slice(0, 3).map((b) => (
              <NewsCard
                key={b.id}
                berita={b}
                href="/berita"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Galeri ── */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            badge="Galeri"
            title="Kehidupan Kampus Politala"
            subtitle="Sekilas momen berharga dari kegiatan akademik dan non-akademik di lingkungan kampus kami."
          />
          <div className="gallery-filters">
            {filterButtons.map((f) => (
              <button
                key={f}
                onClick={() => setGaleriFilter(f)}
                className={`filter-button ${galeriFilter === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {GALERI_ITEMS.filter(
              (g) => galeriFilter === "Semua" || g.kategori === galeriFilter
            )
              .slice(0, 6)
              .map((g) => (
                <GalleryItem key={g.id} item={g} />
              ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/galeri" variant="secondary">
              Lihat Galeri Lengkap
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimoni ── */}
      <TestimonialSection testimonials={TESTIMONI} />

      {/* ── CTA ── */}
      <section className="section bg-white text-center">
        <div className="cta-container container">
          <div className="cta-rocket">🚀</div>
          <h2 className="section-heading">Siap Memulai Perjalananmu?</h2>
          <p className="text-muted">
            Bergabunglah bersama ribuan mahasiswa yang telah membuktikan
            kualitas pendidikan vokasi terbaik di Kalimantan Selatan.
          </p>
          <div className="hero-actions justify-center">
            <Button href="/daftar">
              Daftar Sekarang 🎓
            </Button>
            <Button href="/kontak" variant="secondary">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}