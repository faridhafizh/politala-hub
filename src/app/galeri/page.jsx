"use client";

import { useState } from "react";
import { SectionHeader, Card } from "@/components/ui";
import { GALERI_ITEMS } from "@/lib/data";

const filters = ["Semua", "Kampus", "Fasilitas", "Kegiatan"];

export default function GaleriPage() {
  const [filter, setFilter] = useState("Semua");
  const items = GALERI_ITEMS.filter((item) => filter === "Semua" || item.kategori === filter);

  return (
    <div style={{ padding: "96px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        badge="Galeri"
        title="Momen Kampus Politala"
        subtitle="Lihat potret kegiatan akademik dan lingkungan kampus yang mendukung suasana belajar dan berprestasi."
      />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
        {filters.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            style={{
              border: "none",
              borderRadius: 999,
              padding: "10px 20px",
              background: filter === option ? "#1e40af" : "#f1f5f9",
              color: filter === option ? "#fff" : "#475569",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
        {items.map((item) => (
          <Card key={item.id} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ background: item.color, minHeight: 180, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>{item.icon}</div>
            <div style={{ padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{item.judul}</h3>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>{item.kategori}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
