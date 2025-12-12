// src/app/models/suggestion.ts
export interface Suggestion {
  id: number;
  title: string;
  description: string;
  nbLikes: number;
  category: string;
  date: Date;
  status: 'acceptee' | 'refusee' | 'en_attente';
}
