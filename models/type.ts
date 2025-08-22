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
  producer: Producer;   // بدل ما يكون رقم صار object
  writer: number;       // لسه معرف بـ id
  director: number;
  presenter: number;       // id
  cast: number[];       // مصفوفة ids
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
  crew?: Crew;
  episodes?: Episode[];
  videoEmbedUrl?: string; // للفيلم
}
