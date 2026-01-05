import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 light:bg-white overflow-hidden transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 light:bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/20 light:bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start animate-fade-up animation-delay-200">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/50 light:shadow-blue-400/30 border-2 border-blue-500/50 light:border-blue-400/50 hover:border-blue-400 transition-all group">
              <Image
                src="/30a3dea9-5a37-4eca-892d-edf0cc822353.jpg"
                alt="Andi Putra Fathahillah"
                width={256}
                height={256}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up animation-delay-400">
            <p className="text-blue-400 light:text-blue-600 font-semibold text-lg mb-4">👋 Halo, saya</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white light:text-slate-900">
              Andi Putra
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 light:from-blue-600 light:to-cyan-600 bg-clip-text text-transparent">Fathahillah</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-blue-300 light:text-blue-600 mb-6">
              UI/UX Designer & Frontend Developer
            </p>

            <p className="text-slate-400 light:text-slate-600 leading-relaxed mb-8 text-lg max-w-2xl">
              Saya adalah siswa kelas 12 RPL yang passionate tentang menciptakan pengalaman digital yang memukau. Menggabungkan kreativitas desain dengan technical expertise untuk membangun produk yang benar-benar user-centric dan impactful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 text-center"
              >
                Lihat Proyek
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-blue-500 light:border-blue-600 text-blue-400 light:text-blue-600 font-bold rounded-lg hover:bg-blue-500/10 transition-all hover:scale-105 text-center"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-blue-400 light:text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
