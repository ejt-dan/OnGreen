import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Globe, Shield } from 'lucide-react';
import { CONFIG } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-brand-black relative">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center">
              <MapPin size={20} className="text-white" />
            </div>
            <span>ON<span className="text-brand-green">GREEN</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-brand-green transition-colors ${
                  location.pathname === link.path ? 'text-brand-green' : 'text-gray-300'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-black border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-fade-in-down">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-lg font-medium text-gray-300 hover:text-brand-green"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/5 py-12 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-brand-green rounded flex items-center justify-center">
                  <Globe size={14} className="text-white" />
               </div>
               <span>ON<span className="text-brand-green">GREEN</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              위치 기반 기술의 새로운 지평을 엽니다. 온그린은 정확하고 신뢰할 수 있는 데이터 솔루션을 통해 더 스마트한 세상을 연결합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-green">회사 소개</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-green">솔루션</Link></li>
              <li><Link to="/news" className="hover:text-brand-green">보도자료</Link></li>
              <li><Link to="/admin" className="hover:text-brand-green">Admin (Demo)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{CONFIG.address}</li>
              <li>{CONFIG.phone}</li>
              <li>{CONFIG.email}</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {CONFIG.companyName}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-white cursor-pointer">이용약관</span>
          </div>
        </div>
      </footer>
    </div>
  );
};