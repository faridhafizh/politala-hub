"use client";
import { SectionHeader, Card, Badge } from "@/components/ui";
import { BERITA } from "@/lib/data";

export default function BeritaPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge="Berita"
          title="Kabar Terbaru dari Politala"
          subtitle="Ikuti perkembangan kegiatan akademik, prestasi mahasiswa, dan informasi penerimaan mahasiswa baru."
        />

        <div className="news-grid">
          {BERITA.map((item) => (
            <Card
              key={item.id}
              className="news-card"
              href={`/berita/${item.id}`}
              hover
            >
              <div className="news-card-image">{item.gambar}</div>
              <div className="news-card-body">
                <Badge color="#0ea5e9">{item.kategori}</Badge>
                <h3 className="news-card-title">{item.judul}</h3>
                <p className="news-card-excerpt">{item.excerpt}</p>
                <div className="news-card-footer">
                  <span className="news-card-date">📅 {item.tanggal}</span>
                  <span className="news-card-link">Baca selengkapnya →</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}