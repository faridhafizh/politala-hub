"use client";
import { useRouter } from "next/navigation";
import { PRODI } from "@/lib/data";

export default function Footer() {
  const router = useRouter();
  const nav = (path) => router.push(path);

  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "64px 24px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #1e40af, #2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🎓</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#f1f5f9" }}>Politeknik Negeri</div>
                <div style={{ fontSize: 11, color: "#3b82f6", fontWeight: 700 }}>TANAH LAUT</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#64748b" }}>Mencetak tenaga ahli terampil dan berkarakter untuk kemajuan bangsa dan daerah Kalimantan Selatan.</p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["📘", "📸", "▶️", "🐦"].map((s, i) => (
                <div key={i} style={{ width: 36, height: 36, borderRadius: 8, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16 }}>{s}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Navigasi</h4>
            {[["/","Beranda"],["/about","Tentang"],["/prodi","Program Studi"],["/berita","Berita"],["/galeri","Galeri"],["/daftar","Pendaftaran"]].map(([path,label]) => (
              <button key={path} onClick={() => nav(path)} style={{ display: "block", background: "none", border: "none", color: "#64748b", fontSize: 14, cursor: "pointer", padding: "4px 0", fontFamily: "inherit", textAlign: "left" }}
                onMouseEnter={e => e.target.style.color = "#3b82f6"}
                onMouseLeave={e => e.target.style.color = "#64748b"}>{label}</button>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Program Studi</h4>
            {PRODI.map(p => (
              <button key={p.id} onClick={() => nav("/prodi")} style={{ display: "block", background: "none", border: "none", color: "#64748b", fontSize: 14, cursor: "pointer", padding: "4px 0", fontFamily: "inherit", textAlign: "left" }}
                onMouseEnter={e => e.target.style.color = "#3b82f6"}
                onMouseLeave={e => e.target.style.color = "#64748b"}>{p.nama}</button>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Kontak</h4>
            {[
              { icon: "📍", text: "Jl. A. Yani Km. 6, Pelaihari, Tanah Laut, Kalimantan Selatan 70815" },
              { icon: "📞", text: "(0512) 21537" },
              { icon: "✉️", text: "info@politala.ac.id" },
              { icon: "🌐", text: "www.politala.ac.id" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, fontSize: 14, color: "#64748b", alignItems: "flex-start" }}>
                <span>{c.icon}</span><span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#475569" }}>© 2025 Politeknik Negeri Tanah Laut. Hak cipta dilindungi.</p>
          <p style={{ fontSize: 13, color: "#475569" }}>Dibuat dengan ❤️ untuk kemajuan pendidikan vokasi Indonesia</p>
        </div>
      </div>
    </footer>
  );
}