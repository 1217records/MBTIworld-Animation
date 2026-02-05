
export type MBTI_Axis = 'EI' | 'SN' | 'TF' | 'JP';
export type MBTI_Value = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Option {
  value: MBTI_Value;
  label: string;
}

export interface Question {
  axis: MBTI_Axis;
  prompt: string;
  options: [Option, Option];
}

export interface CharacterResult {
  name: string;
  desc: string;
  longDesc: string;
  episodeNote?: string;
}

export interface ThemeMeta {
  id: string;
  label: string;
  emoji: string;
  gradient: string;
  tags: string[];
  accentColor: string;
}

export interface ThemeContent {
  questions: Question[];
  results: Record<string, CharacterResult>;
}
