"use client";
import { PRODI } from "@/lib/data";

export const Icon = ({ name, size = 20 }) => {
  const icons = {
    menu: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    x: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    chevronRight: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    mapPin: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    arrowRight: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>,
    sun: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
    moon: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
    home: "🏠", about: "ℹ️", prodi: "📚", news: "📰", gallery: "🖼️", register: "📝", contact: "📞",
  };
  return icons[name] || null;
};

export const Badge = ({ children, color = "#1e40af" }) => (
  <span style={{ background: color + "15", color, border: `1px solid ${color}30`, borderRadius: 20, padding: "2px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
    {children}
  </span>
);

export const Button = ({ children, variant = "primary", onClick, type = "button", fullWidth, small, icon }) => {
  const styles = {
    primary: { background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "#fff", border: "none", boxShadow: "0 4px 14px #2563eb40" },
    secondary: { background: "transparent", color: "#1e40af", border: "2px solid #1e40af" },
    white: { background: "#fff", color: "#1e40af", border: "none", boxShadow: "0 4px 14px #00000020" },
    ghost: { background: "transparent", color: "#64748b", border: "1px solid #e2e8f0" },
  };
  return (
    <button type={type} onClick={onClick} style={{ ...styles[variant], borderRadius: 10, padding: small ? "8px 16px" : "13px 28px", fontSize: small ? 13 : 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, width: fullWidth ? "100%" : "auto", justifyContent: "center", transition: "all 0.2s", fontFamily: "inherit" }}>
      {children} {icon && <Icon name={icon} size={16} />}
    </button>
  );
};

export const Card = ({ children, style = {}, hover = true, onClick }) => (
  <div className="card" onClick={onClick} style={{ background: "var(--card-bg)", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.04)", border: "1px solid var(--card-border)", overflow: "hidden", transition: hover ? "all 0.3s" : "none", cursor: onClick ? "pointer" : "default", color: "var(--foreground)", ...style }}
    onMouseEnter={e => hover && (e.currentTarget.style.transform = "translateY(-4px)", e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)")}
    onMouseLeave={e => hover && (e.currentTarget.style.transform = "none", e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)")}>
    {children}
  </div>
);

export const Input = ({ label, type = "text", placeholder, value, onChange, required, name }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-dark)" }}>{label} {required && <span style={{ color: "#ef4444" }}>*</span>}</label>
    {type === "textarea" ? (
      <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} rows={4}
        style={{ border: "1.5px solid var(--input-border)", borderRadius: 10, padding: "11px 14px", fontSize: 14, fontFamily: "inherit", outline: "none", resize: "vertical", transition: "border 0.2s", background: "var(--background)", color: "var(--foreground)" }}
        onFocus={e => e.target.style.borderColor = "#2563eb"}
        onBlur={e => e.target.style.borderColor = "var(--input-border)"} />
    ) : type === "select" ? (
      <select name={name} value={value} onChange={onChange} required={required}
        style={{ border: "1.5px solid var(--input-border)", borderRadius: 10, padding: "11px 14px", fontSize: 14, fontFamily: "inherit", outline: "none", background: "var(--background)", color: "var(--foreground)", cursor: "pointer" }}
        onFocus={e => e.target.style.borderColor = "#2563eb"}
        onBlur={e => e.target.style.borderColor = "var(--input-border)"}>
        <option value="">-- Pilih Program Studi --</option>
        {PRODI.map(p => <option key={p.id} value={p.id}>{p.nama} ({p.jenjang})</option>)}
      </select>
    ) : (
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}
        style={{ border: "1.5px solid var(--input-border)", borderRadius: 10, padding: "11px 14px", fontSize: 14, fontFamily: "inherit", outline: "none", transition: "border 0.2s", background: "var(--background)", color: "var(--foreground)" }}
        onFocus={e => e.target.style.borderColor = "#2563eb"}
        onBlur={e => e.target.style.borderColor = "var(--input-border)"} />
    )}
  </div>
);

export const SectionHeader = ({ badge, title, subtitle, center = true }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
    {badge && <div style={{ marginBottom: 12 }}><Badge>{badge}</Badge></div>}
    <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "var(--foreground)", lineHeight: 1.2, marginBottom: 16 }}>{title}</h2>
    {subtitle && <p style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 580, margin: center ? "0 auto" : "0", lineHeight: 1.7 }}>{subtitle}</p>}
  </div>
);