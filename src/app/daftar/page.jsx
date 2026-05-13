"use client";

import { useState } from "react";
import { Input, Button, SectionHeader } from "@/components/ui";
import { PRODI } from "@/lib/data";

export default function DaftarPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    prodi: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ nama: "", email: "", telepon: "", prodi: "", pesan: "" });
  };

  // Map PRODI data to options expected by Input
  const prodiOptions = PRODI.map((p) => ({
    value: p.id,
    label: `${p.nama} (${p.jenjang})`,
  }));

  return (
    <section className="section page-form">
      <div className="container form-container">
        <SectionHeader
          badge="Pendaftaran"
          title="Daftar Mahasiswa Baru Politala"
          subtitle="Isi formulir berikut untuk memulai proses pendaftaran dan kami akan menghubungi Anda segera."
        />

        <form onSubmit={handleSubmit} className="form-grid">
          <Input
            label="Nama Lengkap"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Nomor Telepon"
            type="tel"
            name="telepon"
            value={form.telepon}
            onChange={handleChange}
            required
          />
          <Input
            label="Program Studi"
            type="select"
            name="prodi"
            value={form.prodi}
            onChange={handleChange}
            required
            options={prodiOptions}
            selectPlaceholder="-- Pilih Program Studi --"
          />
          <Input
            label="Catatan"
            type="textarea"
            name="pesan"
            value={form.pesan}
            onChange={handleChange}
            placeholder="Tuliskan pertanyaan atau kebutuhan khusus"
          />
          <Button type="submit" fullWidth>
            Kirim Pendaftaran
          </Button>
        </form>

        {submitted && (
          <div className="success-message">
            <h3 className="success-title">Terima kasih!</h3>
            <p className="success-text">
              Form pendaftaran Anda berhasil dikirim. Tim Politala akan
              menghubungi Anda melalui email atau nomor telepon yang
              ditinggalkan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}