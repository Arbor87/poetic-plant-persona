export type PlantSlug =
  | "bamboo"
  | "orchid"
  | "plum"
  | "lotus"
  | "pine"
  | "willow"
  | "chrysanthemum"
  | "peach-blossom";

export interface PersonalityTag {
  name: string;
  score: number;
}

export interface PlantProfile {
  slug: PlantSlug;
  name: string;
  aliases: string[];
  temperament: string[];
  keywords: string[];
  imagePromptCore: string;
  descriptionTemplate: string;
  poemThemes: string[];
}

export interface PoemEntry {
  id: string;
  plant: PlantSlug;
  emotionTags: string[];
  line: string;
  author: string;
  title: string;
  dynasty: "唐" | "宋";
}

export interface AnalysisResult {
  input: string;
  personalityTags: PersonalityTag[];
  personalityType: string;
  summary: string;
  dominantTraits: string[];
  plant: PlantProfile;
}

export interface ImageResult {
  imagePrompt: string;
  imageUrl: string;
  provider: "mock-svg" | "openai";
}

export interface ResultPayload {
  input: string;
  analysis: AnalysisResult;
  image: ImageResult;
  poem: PoemEntry;
}
