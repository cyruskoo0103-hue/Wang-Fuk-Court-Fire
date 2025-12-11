import React from 'react';
import { 
  StandardSection as IStandardSection,
  ListSection as IListSection,
  ComparisonSection as IComparisonSection,
  TableSection as ITableSection,
  MediaItem
} from '../types';
import { ChevronRight, Scale, Youtube, Facebook, Instagram, ExternalLink } from 'lucide-react';

const SectionMedia = ({ items }: { items?: MediaItem[] }) => {
  if (!items || items.length === 0) return null;
  
  const getIcon = (type: MediaItem['type']) => {
    switch (type) {
      case 'youtube': return <Youtube className="h-5 w-5" />;
      case 'facebook': return <Facebook className="h-5 w-5" />;
      case 'instagram': return <Instagram className="h-5 w-5" />;
      default: return <ExternalLink className="h-5 w-5" />;
    }
  };

  const getStyles = (type: MediaItem['type']) => {
    switch (type) {
      case 'youtube':
        return 'bg-red-950/40 text-red-200 hover:bg-red-900/60 border border-red-800/40 hover:border-red-600';
      case 'facebook':
        return 'bg-blue-950/40 text-blue-200 hover:bg-blue-900/60 border border-blue-800/40 hover:border-blue-500';
      case 'instagram':
        return 'bg-pink-950/40 text-pink-200 hover:bg-pink-900/60 border border-pink-800/40 hover:border-pink-500';
      default:
        return 'bg-zinc-800 text-slate-200 hover:bg-zinc-700';
    }
  };
  
  return (
    <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
      {items.map((item, idx) => (
        <a 
          key={idx}
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg ${getStyles(item.type)}`}
        >
          {getIcon(item.type)}
          <span>{item.label}</span>
          <ExternalLink className="h-4 w-4 ml-1 opacity-60" />
        </a>
      ))}
    </div>
  );
};

const SectionImages = ({ images }: { images?: string[] }) => {
  if (!images || images.length === 0) return null;
  return (
    <div className="mt-10 flex flex-col gap-8">
      {images.map((src, idx) => (
        <div key={idx} className="relative w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
          <img 
            src={src} 
            alt={`Section evidence ${idx + 1}`} 
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export const StandardSection: React.FC<{ data: IStandardSection }> = ({ data }) => (
  <div className="prose prose-invert prose-slate max-w-none">
    {data.content.map((p, idx) => (
      <p key={idx} className="text-lg leading-8 text-slate-300 mb-6">{p}</p>
    ))}
    <SectionImages images={data.images} />
    <SectionMedia items={data.media} />
  </div>
);

export const ListSection: React.FC<{ data: IListSection }> = ({ data }) => (
  <div className="mt-6">
    {data.intro && <p className="text-lg text-slate-300 mb-6">{data.intro}</p>}
    <ul className="space-y-4">
      {data.items.map((item, idx) => (
        <li key={idx} className="flex items-start group">
          <ChevronRight className="h-6 w-6 text-red-500 flex-shrink-0 mt-1 mr-3 group-hover:translate-x-1 transition-transform" />
          <span className="text-lg text-slate-200">{item}</span>
        </li>
      ))}
    </ul>
    <SectionImages images={data.images} />
    <SectionMedia items={data.media} />
  </div>
);

export const ComparisonSection: React.FC<{ data: IComparisonSection }> = ({ data }) => (
  <div>
    <div className="mt-8 grid md:grid-cols-2 gap-8 relative">
      {/* Divider Icon for Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-slate-950 p-2 rounded-full border border-zinc-800 z-10">
        <Scale className="h-6 w-6 text-slate-500" />
      </div>

      {/* Left Column */}
      <div className="bg-zinc-900/50 p-6 rounded-lg border border-red-900/30">
        <h3 className="text-xl font-bold text-red-400 mb-4 border-b border-red-900/50 pb-2">
          {data.leftTitle}
        </h3>
        <ul className="space-y-3">
          {data.leftContent.map((item, idx) => (
            <li key={idx} className="text-slate-300 flex items-start text-base">
              <span className="mr-2 text-red-500/70">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-700">
        <h3 className="text-xl font-bold text-slate-200 mb-4 border-b border-zinc-700 pb-2">
          {data.rightTitle}
        </h3>
        <ul className="space-y-3">
          {data.rightContent.map((item, idx) => (
            <li key={idx} className="text-slate-300 flex items-start text-base">
              <span className="mr-2 text-slate-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <SectionImages images={data.images} />
    <SectionMedia items={data.media} />
  </div>
);

export const TableSection: React.FC<{ data: ITableSection }> = ({ data }) => (
  <div className="mt-8">
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="min-w-full divide-y divide-zinc-800 bg-zinc-900/30">
        <thead className="bg-zinc-900">
          <tr>
            {data.headers.map((header, idx) => (
              <th key={idx} scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {data.rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-zinc-800/50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-slate-200 whitespace-nowrap md:whitespace-normal">
                {row.col1}
              </td>
              <td className="px-6 py-4 text-sm text-slate-400 md:max-w-xs">
                {row.col2}
              </td>
              <td className="px-6 py-4 text-sm text-red-200/80 md:max-w-xs">
                {row.col3}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-6 p-4 bg-red-950/10 border border-red-900/20 rounded-md">
      <p className="text-base text-red-200 italic leading-relaxed text-center">
        {data.summary}
      </p>
    </div>
    <SectionImages images={data.images} />
    <SectionMedia items={data.media} />
  </div>
);