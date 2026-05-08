export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white font-sans overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <section className="relative py-24 px-6 text-center z-10">
        <h1 className="text-5xl font-bold mb-4">Dede Agung Gunawan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Fresh Graduate SMA dengan pengalaman bekerja di toko printing Daizzy
          yang berlokasi di Sarengseng, Jawa Barat.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          <p className="text-lg leading-relaxed">
            Saya adalah pribadi yang disiplin, cepat belajar, dan mampu bekerja
            sama dalam tim. Berpengalaman bekerja di toko printing Daizzy di
            Sarengseng, Jawa Barat selama kurang lebih 2 tahun.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Pengalaman Kerja</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                Staff Printing - Daizzy Printing
              </h3>
              <p className="mb-3 text-gray-300">
                Sarengseng, Jawa Barat • 2023 - 2025
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Mengoperasikan alat printing dan sablon.</li>
                <li>Menjaga kualitas hasil cetakan.</li>
                <li>Bekerja sesuai target produksi harian.</li>
                <li>Membantu proses finishing dan packing.</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                Skill
              </h3>

              <ul className="list-disc list-inside space-y-2">
                <li>Komunikasi yang baik</li>
                <li>Kerja sama tim</li>
                <li>Disiplin dan tanggung jawab</li>
                <li>Digital marketing dasar</li>
                <li>Editing dan desain sederhana</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6">Kontak</h2>

        <div className="bg-white/10 backdrop-blur-md text-white rounded-3xl p-8 shadow-2xl border border-white/20">
          <p className="mb-3">📍 Subang, Jawa Barat</p>
          <p className="mb-3">📞 083171756533</p>
          <p className="mb-3">✉️ dede557263@gmail.com</p>
        </div>
      </section>

      <footer className="bg-black/40 backdrop-blur-md text-white text-center py-6 mt-10 relative z-10">
        <p>© 2026 Dede Agung Gunawan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
