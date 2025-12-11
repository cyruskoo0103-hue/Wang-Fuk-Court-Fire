export type Language = 'zh' | 'en';

export type SectionType = 'standard' | 'list' | 'comparison' | 'table';

export interface MediaItem {
  type: 'youtube' | 'facebook' | 'instagram';
  url: string;
  label: string;
}

export interface BaseSection {
  id: string;
  title: string;
  type: SectionType;
  media?: MediaItem[];
  images?: string[];
}

export interface StandardSection extends BaseSection {
  type: 'standard';
  content: string[]; // Paragraphs
}

export interface ListSection extends BaseSection {
  type: 'list';
  intro?: string;
  items: string[];
}

export interface ComparisonSection extends BaseSection {
  type: 'comparison';
  leftTitle: string;
  rightTitle: string;
  leftContent: string[];
  rightContent: string[];
}

export interface TableRow {
  col1: string;
  col2: string;
  col3: string;
}

export interface TableSection extends BaseSection {
  type: 'table';
  headers: [string, string, string];
  rows: TableRow[];
  summary: string;
}

export type SectionData = StandardSection | ListSection | ComparisonSection | TableSection;

export interface SiteData {
  header: {
    title: string;
    nav: {
      causes: string;
      bidRigging: string;
      icac: string;
      careTeam: string;
      socialWorker: string;
      accountability: string;
      chilling: string;
    };
  };
  sections: SectionData[];
}

export interface ContentMap {
  zh: SiteData;
  en: SiteData;
}