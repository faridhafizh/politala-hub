"use client";
import { SectionHeader, Card, Badge } from "@/components/ui";
import { PRODI } from "@/lib/data";

export default function ProdiPage() {
  return (
    <section className="section page-prodi">
      <div className="container">
        <SectionHeader
          badge="Program Studi"
          title="Pilih Program Studi yang Sesuai"
          subtitle="Kami menawarkan enam program studi vokasi unggulan yang dirancang untuk menjawab kebutuhan industri dan masyarakat."
        />

        <div className="prodi-grid">
          {PRODI.map((prodi) => (
            <Card key={prodi.id} className="prodi-card" href={`/prodi/${prodi.id}`}>
              <div className="prodi-card-header">
                <div
                  className="prodi-card-icon"
                  style={{
                    backgroundColor: prodi.color + "22",
                    color: prodi.color,
                  }}
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
                <span className="prodi-card-stats">
                  👨‍🎓 {prodi.students} Mahasiswa aktif
                </span>
                <span className="prodi-card-link">
                  Pelajari lebih lanjut →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}