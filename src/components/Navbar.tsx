import React from 'react';

interface NavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['about', 'projects', 'blog', 'skills', 'contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(7,11,20,0.9)] backdrop-blur-[10px] shadow-lg'
          : 'bg-[rgba(7,11,20,0.8)] backdrop-blur-[10px]'
      } border-b border-[rgba(255,255,255,0.12)]`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-[#22d3ee] to-[#fb7185] bg-clip-text text-transparent">
          FB
        </div>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => onNavigate(link)}
                className={`text-sm transition-colors duration-300 relative group ${
                  activeSection === link ? 'text-[#22d3ee]' : 'text-[#9ca3af] hover:text-[#22d3ee]'
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
                    activeSection === link ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
