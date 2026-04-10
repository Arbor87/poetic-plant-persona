export type PlantSlug =
  | "bamboo"
  | "orchid"
  | "plum"
  | "lotus"
  | "pine"
  | "willow"
  | "chrysanthemum"
  | "peach-blossom"
  | "osmanthus"
  | "crabapple"
  | "apricot-blossom"
  | "pear-blossom"
  | "parasol-tree"
  | "banana-leaf"
  | "wisteria"
  | "maple";

export type PlantCategory = "flower" | "tree" | "vine" | "grass" | "leaf";

export interface PersonalityTag {
  name: string;
  score: number;
}

export interface PlantProfile {
  slug: PlantSlug;
  name: string;
  aliases: string[];
  category: PlantCategory;
  temperament: string[];
  coreKeywords: string[];
  keywords: string[];
  avoidTags: string[];
  poemThemes: string[];
  season: string[];
  imagePromptCore: string;
  descriptionTemplate: string;
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
