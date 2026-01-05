export default function About() {
  const skills = [
    { category: 'Design', icon: '🎨', items: ['Figma', 'UI Design', 'UX Research', 'Prototyping'] },
    { category: 'Frontend', icon: '⚛️', items: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
    { category: 'Styling', icon: '🎭', items: ['Tailwind CSS', 'CSS3', 'Responsive Design'] },
    { category: 'Tools', icon: '🛠️', items: ['Git', 'GitHub', 'VS Code'] },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 light:bg-slate-50 border-t border-slate-800 light:border-slate-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white light:text-slate-900 mb-4 animate-fade-up animation-delay-100">Tentang Saya</h2>
          <p className="text-xl text-slate-400 light:text-slate-600 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Seorang developer muda yang passionate tentang menciptakan solusi digital
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6 animate-fade-up animation-delay-300">
            <p className="text-slate-400 light:text-slate-700 leading-8 text-lg">
              Saya adalah seorang siswa kelas 12 jurusan Rekayasa Perangkat Lunak (RPL) dengan passion mendalam terhadap UI/UX Design dan Web Development. Perjalanan saya dimulai dengan keinginan untuk menciptakan pengalaman digital yang tidak hanya cantik, tetapi juga intuitif dan user-centric.
            </p>
            <p className="text-slate-400 light:text-slate-700 leading-8 text-lg">
              Saya percaya bahwa desain yang efektif adalah perpaduan sempurna antara estetika dan fungsionalitas. Setiap keputusan desain dan setiap baris kode ditulis dengan tujuan yang jelas: memberikan nilai maksimal kepada pengguna.
            </p>
            <p className="text-slate-400 light:text-slate-700 leading-8 text-lg">
              Tujuan saya adalah berkembang menjadi profesional di bidang UI/UX Design dan Frontend Development yang mampu menciptakan solusi digital inovatif dan memberikan dampak positif bagi pengguna dan bisnis.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4 animate-fade-up animation-delay-400">
            <div className="bg-slate-900 light:bg-white rounded-lg p-6 border border-slate-800 light:border-slate-200 hover:border-blue-500/60 light:hover:border-blue-500 transition-all light:shadow-sm">
              <p className="text-3xl font-bold text-blue-400 light:text-blue-600 mb-1">6+</p>
              <p className="text-slate-400 light:text-slate-600">Project Completed</p>
            </div>
            <div className="bg-slate-900 light:bg-white rounded-lg p-6 border border-slate-800 light:border-slate-200 hover:border-cyan-500/60 light:hover:border-cyan-500 transition-all light:shadow-sm">
              <p className="text-3xl font-bold text-cyan-400 light:text-cyan-600 mb-1">2+</p>
              <p className="text-slate-400 light:text-slate-600">Years Experience</p>
            </div>
            <div className="bg-slate-900 light:bg-white rounded-lg p-6 border border-slate-800 light:border-slate-200 hover:border-blue-500/60 light:hover:border-blue-500 transition-all light:shadow-sm">
              <p className="text-3xl font-bold text-blue-400 light:text-blue-600 mb-1">100%</p>
              <p className="text-slate-400 light:text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-up animation-delay-500">
          <h3 className="text-3xl font-bold text-white light:text-slate-900 mb-8 text-center">Skills & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-slate-900 light:bg-white rounded-lg p-6 border border-slate-800 light:border-slate-200 hover:border-blue-500/60 light:hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 light:hover:shadow-blue-500/10 hover:-translate-y-2 duration-300 light:shadow-sm"
              >
                <p className="text-4xl mb-3">{skillGroup.icon}</p>
                <h4 className="text-lg font-bold text-blue-400 light:text-blue-600 mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                      <span className="text-slate-400 light:text-slate-600 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
