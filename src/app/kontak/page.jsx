import { SectionHeader, Card } from "@/components/ui";

const contacts = [
  { icon: "📍", title: "Alamat", description: "Jl. A. Yani Km. 6, Pelaihari, Tanah Laut, Kalimantan Selatan 70815" },
  { icon: "📞", title: "Telepon", description: "(0512) 21537" },
  { icon: "✉️", title: "Email", description: "info@politala.ac.id" },
  { icon: "🌐", title: "Website", description: "www.politala.ac.id" },
];

export default function KontakPage() {
  return (
    <div style={{ padding: "96px 24px", maxWidth: 1080, margin: "0 auto" }}>
      <SectionHeader
        badge="Kontak"
        title="Hubungi Kami"
        subtitle="Tim Politala siap membantu Anda dengan informasi penerimaan, jalur masuk, dan kegiatan kampus." 
      />

      <div style={{ display: "grid", gap: 24, marginTop: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", marginBottom: 18 }}>Tetap Terhubung</h2>
            <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.8 }}>
              Silakan hubungi kami untuk pertanyaan tentang program studi, pendaftaran, atau fasilitas kampus. Kami siap melayani calon mahasiswa, orang tua, dan mitra industri.
            </p>
          </div>
          <div>
            <iframe
              title="Lokasi Politala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0237739445226!2d114.8310103954083!3d-3.530386197574194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3202f5b77d4359d1%3A0xd40f26d4e95091bd!2sPoliteknik%20Negeri%20Tanah%20Laut!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: 20 }}
              loading="lazy"
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {contacts.map((item) => (
            <Card key={item.title} style={{ padding: 24, minHeight: 170 }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.8 }}>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
