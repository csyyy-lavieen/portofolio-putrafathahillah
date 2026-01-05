export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran terintegrasi.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      status: 'Coming Soon',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur drag-and-drop, prioritas task, dan reminder notifikasi real-time.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Firebase'],
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Dashboard analytics untuk menganalisis performa konten di berbagai platform media sosial dengan visualisasi data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Chart.js', 'API'],
      status: 'Coming Soon',
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'Aplikasi chatbot bertenaga AI untuk customer service dan support otomatis dengan response time cepat.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8e5ae2b0b36b5f1a8e?w=600&h=400&fit=crop',
      tags: ['Python', 'React', 'Machine Learning'],
      status: 'Coming Soon',
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Aplikasi cuaca real-time dengan notifikasi alerts dan prediksi jangka panjang yang akurat.',
      image: 'https://images.unsplash.com/photo-1560439514-f0cffcbf4d4d?w=600&h=400&fit=crop',
      tags: ['React', 'Weather API', 'Tailwind'],
      status: 'In Progress',
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Component library dan design system lengkap dengan dokumentasi untuk konsistensi design di berbagai project.',
      image: 'https://images.unsplash.com/photo-1467232557255-d282b0be54df?w=600&h=400&fit=crop',
      tags: ['Figma', 'Storybook', 'React'],
      status: 'Coming Soon',
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-slate-950 light:bg-white border-t border-slate-800 light:border-slate-200 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white light:text-slate-900 mb-4 animate-fade-up animation-delay-100">Upcoming Projects</h2>
          <p className="text-xl text-slate-400 light:text-slate-600 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Proyek-proyek menarik yang sedang saya kerjakan dan akan segera diluncurkan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animation-delay-300">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900 light:bg-white rounded-lg overflow-hidden border border-slate-800 light:border-slate-200 hover:border-blue-500/60 light:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 light:hover:shadow-blue-500/10 hover:-translate-y-1 light:shadow-sm"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-800 light:bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 light:from-white via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${project.status === 'Coming Soon'
                      ? 'bg-blue-500/80 text-white'
                      : 'bg-cyan-500/80 text-white'
                    }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2 group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 light:text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-800 light:bg-slate-100 border border-slate-700 light:border-slate-200 text-blue-400 light:text-blue-600 text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-16 text-center animate-fade-up animation-delay-400">
          <p className="text-slate-400 light:text-slate-600 text-lg">
            ✨ Lebih banyak project akan datang! Nantikan update terbaru.
          </p>
        </div>
      </div>
    </section>
  );
}
