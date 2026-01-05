export default function Contact() {
  const socialLinks = [
    { name: 'Email', href: 'mailto:andiputrafathahillah24@gmail.com', icon: '✉️' },
    { name: 'GitHub', href: 'https://github.com/csyyy-lavieen', icon: '🐙' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andi-putra-fatahillah-6a31bb330/', icon: '💼' },
    { name: 'Instagram', href: 'https://www.instagram.com/ptra.ftahllh/', icon: '📸' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-950 light:bg-slate-50 border-t border-slate-800 light:border-slate-200 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white light:text-slate-900 mb-4 animate-fade-up animation-delay-100">Mari Terhubung</h2>
          <p className="text-xl text-slate-400 light:text-slate-600 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar berbincang tentang design dan technology
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-950/30 light:bg-white rounded-2xl p-8 md:p-12 border border-blue-500/20 light:border-slate-200 mb-12 animate-fade-up animation-delay-300 light:shadow-lg transition-colors duration-300">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6">Hubungi Saya</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-white light:text-slate-900">Lokasi</p>
                    <p className="text-slate-400 light:text-slate-600">Bandung, Jawa Barat, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-white light:text-slate-900">Respon</p>
                    <p className="text-slate-400 light:text-slate-600">Biasanya reply dalam 24 jam</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-white light:text-slate-900">Email</p>
                    <a href="mailto:andiputrafathahillah24@gmail.com" className="text-blue-400 light:text-blue-600 hover:text-blue-300 light:hover:text-blue-700">
                      andiputrafathahillah24@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6">Temukan Saya</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-blue-950/50 light:bg-slate-100 hover:bg-blue-500/20 light:hover:bg-blue-100 border border-blue-500/30 light:border-slate-200 hover:border-blue-400/60 light:hover:border-blue-400 rounded-lg transition-all group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <p className="text-white light:text-slate-900 font-semibold text-sm text-center group-hover:text-blue-300 light:group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-blue-500/20 light:border-slate-200 pt-8 animate-fade-up animation-delay-400">
          <p className="text-slate-400 light:text-slate-600 mb-2">
            © 2026 Andi Putra Fathahillah. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}