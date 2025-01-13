export interface SectionItemProperties {
  title?: string;
}

export interface SectionItem {
  propiedades: SectionItemProperties;
}

export interface Section {
  titulo: string;
  items?: Record<string, SectionItem>;
}

export interface Screen {
  Secciones: Section[];
}

export type Screens = Record<string, Screen>;