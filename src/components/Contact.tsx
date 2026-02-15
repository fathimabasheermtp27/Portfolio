import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-glass p-7 md:p-8 my-5 fade-in-up text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#e2e8f0]">Let's Connect</h2>
      <p className="text-[#cbd5e1] mb-8 max-w-xl mx-auto">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://github.com/fathimabasheermtp27"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <i className="fab fa-github"></i> View My GitHub
        </a>
        <a
          href="mailto:fathima@example.com"
          className="btn-outline-accent px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          <i className="fas fa-envelope"></i> Send Email
        </a>
      </div>
    </section>
  );
};
