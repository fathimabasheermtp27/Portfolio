import React from 'react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}

export const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: 'Building Communities in Tech',
      date: 'Feb 2026',
      excerpt: 'Insights on fostering engaged tech communities and driving meaningful conversations.',
    },
    {
      title: 'Product Ideation for Student Founders',
      date: 'Jan 2026',
      excerpt: 'A guide to discovering problems, validating ideas, and shipping your first product.',
    },
    {
      title: 'From Startup Idea to MVP',
      date: 'Dec 2025',
      excerpt: 'My journey applying design thinking and lean methodologies to build products fast.',
    },
  ];

  return (
    <section id="blog" className="section-glass p-7 md:p-8 my-5 fade-in-up">
      <h2 className="text-3xl font-bold mb-6 text-[#e2e8f0]">Blog</h2>
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-[rgba(15,23,42,0.65)] border border-[rgba(148,163,184,0.25)] rounded-lg p-4 hover:-translate-y-0.5 hover:border-[#22d3ee] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-[#e2e8f0]">{post.title}</h3>
              <span className="text-xs text-[#9ca3af]">{post.date}</span>
            </div>
            <p className="text-[#cbd5e1] text-sm">{post.excerpt}</p>
            {post.link && (
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] text-sm mt-2 inline-block hover:underline">
                Read →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
