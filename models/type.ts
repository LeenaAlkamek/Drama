// src/types.ts

export interface Episode {
  id: number;
  title: string;
  videoEmbedUrl: string;
  thumbnail?: string;
  duration?: string;
}

// ✅ نعرف نوع للـ Producer
export interface Producer {
  name: string;
  logo: string;
  website?: string; // اختياري
}

export interface Crew {
  producer?: Producer; // ✅ مو string
  writer?: number | string;
  director?: number | string;
  presenter?: number;
  cast?: number[];
}


export interface Show {
  id: number;
  title: string;
  description: string;
  rating: number;
  genre: string;
  year: number;
  seasons?: number;
  image?: string;
  cardimg?: string;
  type:string;
  crew?: Crew;
  episodes?: Episode[];
  videoEmbedUrl?: string; // للفيلم
}
