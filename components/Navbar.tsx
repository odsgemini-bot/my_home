
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '홈', href: '#hero', id: 'hero' },
    { label: '소개', href: '#about', id: 'about' },
    { label: '기술', href: '#skills', id: 'skills' },
    { label: '경력', href: '#experience', id: 'experience' },
    { label: '연락처', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-black text-emerald-600 tracking-tighter">
          ODS.DEV
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${activeSection === item.id ? 'text-emerald-600' : 'text-neutral-600'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-emerald-200"
        >
          협업 제안
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
