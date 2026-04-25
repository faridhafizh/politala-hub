"use client";
import { SectionHeader, Card } from "@/components/ui";

const contacts = [
  { icon: "📍", title: "Alamat", description: "Jl. A. Yani Km. 6, Pelaihari, Tanah Laut, Kalimantan Selatan 70815" },
  { icon: "📞", title: "Telepon", description: "(0512) 21537" },
  { icon: "✉️", title: "Email", description: "info@politala.ac.id" },
  { icon: "🌐", title: "Website", description: "www.politala.ac.id" },
];

export default function KontakPage() {
  return (
    <section className="section page-kontak">
      <div className="container">
        <SectionHeader
          badge="Kontak"
          title="Hubungi Kami"
          subtitle="Tim Politala siap membantu Anda dengan informasi penerimaan, jalur masuk, dan kegiatan kampus."
        />

        <div className="contact-top-grid">
          <div className="contact-text">
            <h2 className="contact-heading">Tetap Terhubung</h2>
            <p className="contact-description">
              Silakan hubungi kami untuk pertanyaan tentang program studi,
              pendaftaran, atau fasilitas kampus. Kami siap melayani calon
              mahasiswa, orang tua, dan mitra industri.
            </p>
          </div>
          <div>
            <iframe
              title="Lokasi Politala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0237739445226!2d114.8310103954083!3d-3.530386197574194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3202f5b77d4359d1%3A0xd40f26d4e95091bd!2sPoliteknik%20Negeri%20Tanah%20Laut!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="contact-iframe"
              loading="lazy"
            />
          </div>
        </div>

        <div className="contact-grid">
          {contacts.map((item) => (
            <Card key={item.title} className="contact-card">
              <div className="contact-card-icon">{item.icon}</div>
              <h3 className="contact-card-title">{item.title}</h3>
              <p className="contact-card-desc">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}