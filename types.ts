export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
}

export enum QuizLevel {
  A1 = 'A1 - Beginner',
  A2 = 'A2 - Elementary',
  B1 = 'B1 - Intermediate',
  B2 = 'B2 - Upper Intermediate',
  C1 = 'C1 - Advanced',
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
}

export type QuizPhase = 'intro' | 'question' | 'capture' | 'result';
