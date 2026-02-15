import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="text-center mt-24 mb-12 fade-in-up">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[rgba(255,255,255,0.12)] rounded-full bg-[rgba(14,22,39,0.62)] mb-6">
        <span className="text-xs font-semibold text-[#bae6fd] tracking-wider uppercase">
          CS Student | Builder
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
        Fathima Basheer MTP
      </h1>

      <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-8">
        Passionate about products, entrepreneurship, and creating real impact through technology and strong communities.
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://github.com/fathimabasheermtp27"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.12)] rounded-full text-[#22d3ee] hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.12)] rounded-full text-[#22d3ee] hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:fathima@example.com"
          className="w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.12)] rounded-full text-[#22d3ee] hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </header>
  );
};
