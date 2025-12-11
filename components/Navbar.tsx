import React, { useState } from 'react';
import { Menu, Globe, ShieldAlert, X } from 'lucide-react';
import { Language, SiteData } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  data: SiteData['header'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const navLinks = [
    { label: data.nav.causes, href: '#causes' },
    { label: data.nav.accountability, href: '#accountability' },
    { label: data.nav.bidRigging, href: '#bid-rigging' },
    { label: data.nav.careTeam, href: '#care-team' },
    { label: data.nav.icac, href: '#icac' },
    { label: data.nav.chilling, href: '#chilling' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-zinc-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 flex-shrink-0">
            <ShieldAlert className="h-6 w-6 text-red-600" />
            <span className="font-bold text-lg text-slate-100 tracking-wide hidden sm:block">
              宏福大火
            </span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 hover:text-white hover:bg-zinc-800 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-slate-200 px-3 py-1 rounded text-sm transition-colors border border-zinc-700"
              >
                <Globe className="h-4 w-4" />
                {lang === 'zh' ? 'EN' : '繁'}
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="w-full text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium mt-4 border-t border-zinc-700 pt-4"
            >
              {lang === 'zh' ? 'Switch to English' : '切換至繁體中文'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};