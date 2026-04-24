"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang" },
    { path: "/prodi", label: "Program Studi" },
    { path: "/berita", label: "Berita" },
    { path: "/galeri", label: "Galeri" },
    { path: "/kontak", label: "Kontak" },
  ];

  const navigate = (path) => {
    router.push(path);
    setOpen(false);
  };

  const isActive = (path) => pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent", transition: "all 0.3s", boxShadow: scrolled ? "0 2px 20px #00000010" : "none" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 68, gap: 32 }}>
          <div onClick={() => navigate("/")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
            <Image src="/logo.webp" alt="Logo" width={44} height={44} style={{ borderRadius: 12 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>Politeknik Negeri</div>
              <div style={{ fontSize: 11, color: "#2563eb", fontWeight: 700, letterSpacing: "0.05em" }}>TANAH LAUT</div>
            </div>
          </div>

          <div className="desktop-links" style={{ display: "flex", gap: 2, flex: 1, justifyContent: "center" }}>
            {navLinks.map(l => (
              <button key={l.path} onClick={() => navigate(l.path)} style={{ background: isActive(l.path) ? "#eff6ff" : "transparent", color: isActive(l.path) ? "#1e40af" : "#374151", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 14, fontWeight: isActive(l.path) ? 700 : 500, cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}>
                {l.label}
              </button>
            ))}
          </div>

          <button onClick={() => navigate("/daftar")} style={{ background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit", boxShadow: "0 4px 12px #2563eb40" }}>
            Daftar Sekarang
          </button>

          <button onClick={() => setOpen(!open)} className="mobile-menu-btn" style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#374151", padding: 4 }}>
            <Icon name={open ? "x" : "menu"} size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, zIndex: 999, background: "#fff", padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
          {navLinks.map(l => (
            <button key={l.path} onClick={() => navigate(l.path)} style={{ background: isActive(l.path) ? "#eff6ff" : "transparent", color: isActive(l.path) ? "#1e40af" : "#374151", border: "none", borderRadius: 12, padding: "14px 20px", fontSize: 16, fontWeight: 600, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: 16 }}>
            <button onClick={() => navigate("/daftar")} style={{ background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "#fff", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%", fontFamily: "inherit" }}>Daftar Sekarang</button>
          </div>
        </div>
      )}
    </>
  );
}