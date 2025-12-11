import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CONTENT } from './constants';
import { Language, SectionData } from './types';
import { 
  StandardSection, 
  ListSection, 
  ComparisonSection, 
  TableSection 
} from './components/SectionRenderers';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const data = CONTENT[lang];

  // Factory function to render sections based on type
  const renderSection = (section: SectionData) => {
    switch (section.type) {
      case 'standard':
        return <StandardSection data={section} />;
      case 'list':
        return <ListSection data={section} />;
      case 'comparison':
        return <ComparisonSection data={section} />;
      case 'table':
        return <TableSection data={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-900 selection:text-white">
      <Navbar lang={lang} setLang={setLang} data={data.header} />
      
      <main className="pt-24 pb-20">
        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl border border-zinc-800 shadow-2xl bg-zinc-900 group">
            <img 
              src="https://static.hkej.com/hkej/images/2025/12/04/4265528_954b01904360a02a8621694daf5cd8db.jpg" 
              alt="Wang Fuk Court Fire Scene" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
          </div>
          <p className="mt-2 text-xs text-zinc-500 text-right italic font-mono">
            Image Source: HKEJ
          </p>
        </div>

        {/* Header Title Area */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-zinc-700 rounded-full bg-zinc-900/50 text-xs tracking-widest text-zinc-400 uppercase">
            Investigative Archive
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
            {data.header.title}
          </h1>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-4">
          {data.sections.map((section, index) => (
            <section 
              key={section.id} 
              id={section.id} 
              className={`py-16 border-t border-zinc-900 transition-colors duration-500 ${
                index % 2 === 0 ? 'bg-slate-950' : 'bg-[#050a1d]' // Subtle stripe effect
              }`}
            >
              <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-red-600 font-mono text-xl font-bold opacity-50">0{index + 1}</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-100">
                    {section.title}
                  </h2>
                </div>
                
                {renderSection(section)}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 text-sm font-mono">
            © {new Date().getFullYear()} Investigative Project. Static build v1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;