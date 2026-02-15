import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Tiker AI Community Platform',
      description: 'Community growth manager for Tiker AI – a platform helping learners discover skills through practical projects.',
      tags: ['Community', 'Growth', 'Engagement'],
      link: 'https://tiker.ai',
    },
    {
      title: 'React Portfolio',
      description: 'Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS showcasing projects and skills.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
    },
    {
      title: 'Product Prototyping',
      description: 'Rapid prototyping and design thinking projects exploring problem discovery and user-centric solutions.',
      tags: ['Product', 'Ideation', 'Prototyping'],
    },
  ];

  return (
    <section id="projects" className="section-glass p-7 md:p-8 my-5 fade-in-up">
      <h2 className="text-3xl font-bold mb-6 text-[#e2e8f0]">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[rgba(15,23,42,0.65)] border border-[rgba(148,163,184,0.25)] rounded-xl p-5 hover:-translate-y-1 hover:border-[#22d3ee] transition-all"
          >
            <h3 className="text-lg font-bold text-[#e2e8f0] mb-2">{project.title}</h3>
            <p className="text-[#cbd5e1] text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[rgba(34,211,238,0.1)] text-[#22d3ee] border border-[rgba(34,211,238,0.3)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#22d3ee] hover:underline"
                >
                  View →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#22d3ee] hover:underline"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
