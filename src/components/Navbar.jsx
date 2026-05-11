"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Icon } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener – add/remove "scrolled" class
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Flag to avoid hydration mismatch with theme icon
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang" },
    { path: "/prodi", label: "Program Studi" },
    { path: "/berita", label: "Berita" },
    { path: "/galeri", label: "Galeri" },
    { path: "/kontak", label: "Kontak" },
  ];

  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={44}
              height={44}
              className="logo-image"
            />
            <div className="logo-text">
              <div className="logo-name">Politeknik Negeri</div>
              <div className="logo-campus">TANAH LAUT</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="navbar-links">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                href={l.path}
                className={`nav-link${isActive(l.path) ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="navbar-actions">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="theme-toggle"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? (
                  <Icon name="sun" size={20} />
                ) : (
                  <Icon name="moon" size={20} />
                )}
              </button>
            )}

            {/* CTA button – reuse the generic .btn .btn-primary if you have it, or use a dedicated class */}
            <Link
              href="/daftar"
              className="navbar-cta"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            <Icon name={open ? "x" : "menu"} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="mobile-menu">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              href={l.path}
              onClick={() => setOpen(false)}
              className={`mobile-nav-link${isActive(l.path) ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4">
            <Link
              href="/daftar"
              onClick={() => setOpen(false)}
              className="navbar-cta w-full"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </>
  );
}