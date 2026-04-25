"use client";
import { useRouter } from "next/navigation";
import { SectionHeader, Card, Badge } from "@/components/ui";
import { PRODI } from "@/lib/data";

export default function ProdiPage() {
  const router = useRouter();

  const handleDetail = (id) => {
    // TODO: implementasi detail program studi, misalnya /prodi/[id]
    router.push(`/prodi/${id}`);
  };

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
            <Card key={prodi.id} className="prodi-card">
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
                <button
                  onClick={() => handleDetail(prodi.id)}
                  className="prodi-card-link"
                >
                  Pelajari lebih lanjut →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}