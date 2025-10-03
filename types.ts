
export interface NailSign {
  id: string;
  name: string;
  description: string;
  meaning: string;
  imageUrl: string;
}

export interface NailCategory {
  id: string;
  title: string;
  signs: NailSign[];
}