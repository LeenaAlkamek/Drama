// src/models/types.ts
export interface ActorWork {
  id: number;
  title: string;
  year: string; 
  poster: string;
  rating: number;
  type: string;
} 

export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  facebook?: string;
}

export interface Actor {
  id: number;
  name: string;
  nameEn: string;
  age: number;
  birthDate: string; // لأن البيانات نص
  worksCount: number;
  followers: string; // لأن عندك مثلاً '5.2M'
  nationality: string;
  coverImage: string;
  image: string;
  rating: number;
  bio: string;
  genre: string;
  works: ActorWork[];
  awards: string[];
  socialMedia: SocialMedia;
}
