'use client';

import TiltCard from './animations/TiltCard';
import BlurText from './animations/BlurText';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Intern in Ashari.tech',
      description: 'Perusahaan teknologi AI Indonesia yang menyediakan solusi AI custom, technology consulting, dan digital transformation untuk UKM dan enterprise di seluruh Indonesia.',
      image: '/intern.jpg',
      tags: ['AI Developer', 'Next.js'],
      status: 'Ongoing',
    },
    {
      id: 2,
      title: 'Grab and Ship',
      description: 'Grab and Ship adalah platform e-commerce yang menghadirkan pengalaman belanja lintas negara secara mudah, aman, dan terpercaya.',
      image: '/grabandship.png',
      tags: ['Figma', 'Next.js'],
      status: 'Completed',
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Strimfil adalah web menonton film gratis. Di web ini kita bisa menonton film dari berbagai negara, dengan genre yang beragam. .',
      image: '/Strimfilm.png',
      tags: ['Next.js', 'Figma'],
      status: 'Completed',
    },
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 overflow-hidden transition-colors duration-300">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-80 h-80 bg-gradient-to-bl from-neutral-100/60 to-transparent dark:from-neutral-900/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-neutral-100/60 to-transparent dark:from-neutral-900/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-l from-neutral-200/30 to-transparent dark:from-neutral-800/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black dark:text-white mb-4">
            <BlurText text="Upcoming Projects" delay={100} />
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            A collection of projects I’ve built during my learning journey and internship, focusing on real-world problem solving, clean code, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={project.id}>
              <div
                className="group relative bg-neutral-50 dark:bg-neutral-950 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-white border border-white/20">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-500" />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Info */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 text-lg animate-fade-up">
            More projects are currently in progress. Stay tuned for upcoming updates.
          </p>
        </div>
      </div>
    </section>
  );
}
