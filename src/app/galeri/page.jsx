"use client";

import { useState } from "react";
import { SectionHeader, Card } from "@/components/ui";
import { GALERI_ITEMS } from "@/lib/data";

const filters = ["Semua", "Kampus", "Fasilitas", "Kegiatan"];

export default function GaleriPage() {
  const [filter, setFilter] = useState("Semua");
  const items = GALERI_ITEMS.filter(
    (item) => filter === "Semua" || item.kategori === filter
  );

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge="Galeri"
          title="Momen Kampus Politala"
          subtitle="Lihat potret kegiatan akademik dan lingkungan kampus yang mendukung suasana belajar dan berprestasi."
        />

        <div className="gallery-filters">
          {filters.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`filter-button ${filter === option ? "active" : ""}`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="gallery-page-grid">
          {items.map((item) => (
            <Card key={item.id} className="gallery-card">
              <div
                className="gallery-card-image"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <div className="gallery-card-body">
                <h3 className="gallery-card-title">{item.judul}</h3>
                <p className="gallery-card-category">{item.kategori}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}