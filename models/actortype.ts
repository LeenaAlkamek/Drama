// src/models/types.ts
export interface ActorWork {
  id?: number;
  type?: string;
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
  birthDate: string;
  worksCount: number;
  followers: string;
  nationality: string;
  coverImage: string;
  image: string;
  rating: number;
  bio: string;
  genre: string;
  works?: ActorWork[];
  awards?: string[];
  socialMedia: SocialMedia;
}

