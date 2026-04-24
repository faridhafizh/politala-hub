"use client";

import { useState } from "react";
import { Input, Button, SectionHeader } from "@/components/ui";

export default function DaftarPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    prodi: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ nama: "", email: "", telepon: "", prodi: "", pesan: "" });
  };

  return (
    <div style={{ padding: "96px 24px", maxWidth: 860, margin: "0 auto" }}>
      <SectionHeader
        badge="Pendaftaran"
        title="Daftar Mahasiswa Baru Politala"
        subtitle="Isi formulir berikut untuk memulai proses pendaftaran dan kami akan menghubungi Anda segera."
      />

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 24, marginTop: 40 }}>
        <Input label="Nama Lengkap" name="nama" value={form.nama} onChange={handleChange} required />
        <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <Input label="Nomor Telepon" type="tel" name="telepon" value={form.telepon} onChange={handleChange} required />
        <Input label="Program Studi" type="select" name="prodi" value={form.prodi} onChange={handleChange} required />
        <Input label="Catatan" type="textarea" name="pesan" value={form.pesan} onChange={handleChange} placeholder="Tuliskan pertanyaan atau kebutuhan khusus" />
        <Button type="submit">Kirim Pendaftaran</Button>
      </form>

      {submitted && (
        <div style={{ marginTop: 28, background: "#ecfdf5", border: "1px solid #86efac", borderRadius: 16, padding: 24 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#166534", marginBottom: 10 }}>Terima kasih!</h3>
          <p style={{ color: "#166534", lineHeight: 1.7 }}>
            Form pendaftaran Anda berhasil dikirim. Tim Politala akan menghubungi Anda melalui email atau nomor telepon yang ditinggalkan.
          </p>
        </div>
      )}
    </div>
  );
}
