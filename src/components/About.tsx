'use client';

import SpotlightCard from './animations/SpotlightCard';
import BlurText from './animations/BlurText';
import CountUp from './animations/CountUp';
import Timeline from './animations/Timeline';

// SVG Icons for skills
const DesignIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const StyleIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function About() {
  const skills = [
    { category: 'Design', icon: <DesignIcon />, items: ['Figma', 'UI Design', 'UX Research', 'Prototyping'] },
    { category: 'Frontend', icon: <CodeIcon />, items: ['React', 'Next.js'] },
    { category: 'Styling', icon: <StyleIcon />, items: ['Tailwind CSS', 'Responsive Design'] },
    { category: 'Tools', icon: <ToolsIcon />, items: ['Git', 'GitHub', 'VS Code'] },
  ];

  const stats = [
    { value: 6, label: 'Project Completed', suffix: '+' },
    { value: 1, label: 'Years Experience', suffix: '+' },
    { value: 100, label: 'Client Satisfaction', suffix: '%' },
  ];

  const educationTimeline = [
    {
      year: '2026',
      title: 'Internship - Ashari Tech',
      subtitle: 'Bandung, Indonesia',
      description: 'Magang sebagai AI Developer & UI/UX Designer, mengerjakan proyek enterprise dan mengembangkan solusi AI custom.',
    },
    {
      year: '2023-2026',
      title: 'SMK Telkom Makassar',
      subtitle: 'Rekayasa Perangkat Lunak',
      description: 'Belajar pemrograman dasar, web development, dan software engineering fundamentals.',
    },
    {
      year: '2020-2023',
      title: 'Mtsn 02 Makassar',
      subtitle: 'Makassar',
      description: 'Awal mula tertarik dengan teknologi dan mulai belajar dasar-dasar komputer.',
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-neutral-200/40 to-transparent dark:from-neutral-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-tl from-neutral-200/40 to-transparent dark:from-neutral-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-neutral-100/30 to-transparent dark:from-neutral-900/20 rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            <BlurText text="About Me" delay={100} />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            UI/UX Designer yang memiliki pemahaman tentang web development.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <p className="text-neutral-600 dark:text-neutral-400 leading-7 sm:leading-8 text-base sm:text-lg animate-slide-left animation-delay-200">
              Saya adalah siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) yang saat ini sedang menjalani{' '}
              <span className="text-black dark:text-white font-semibold">internship di PT Ashari Tech, Bandung</span>.
              Passion saya terletak pada UI/UX Design dan Frontend Development.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-7 sm:leading-8 text-base sm:text-lg animate-slide-left animation-delay-300">
              Sebagai UI/UX Designer, saya percaya bahwa desain yang efektif tidak hanya menarik secara visual,
              tetapi juga mampu memberikan pengalaman pengguna yang nyaman dan intuitif.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-7 sm:leading-8 text-base sm:text-lg animate-slide-left animation-delay-400">
              Tujuan saya adalah berkembang menjadi profesional yang mampu menciptakan solusi digital inovatif dan
              memberikan dampak positif bagi pengguna dan bisnis.
            </p>
          </div>

          {/* Quick Stats with CountUp Animation */}
          <div className="space-y-3 sm:space-y-4">
            {stats.map((stat, index) => (
              <SpotlightCard
                key={stat.label}
                className="bg-white dark:bg-black rounded-xl p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all animate-slide-right"
              >
                <p className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-1 animate-gradient-text">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2000} />
                </p>
                <p className="text-neutral-500 text-sm sm:text-base">{stat.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-12 sm:mb-16">
          <Timeline items={educationTimeline} title="Education & Experience" />
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6 sm:mb-8 text-center animate-blur-reveal">
            Skills & Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skillGroup, index) => (
              <SpotlightCard
                key={skillGroup.category}
                className="bg-white dark:bg-black rounded-xl p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              >
                <div className="text-neutral-600 dark:text-neutral-400 mb-4 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {skillGroup.icon}
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                      <span className="text-neutral-500 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
