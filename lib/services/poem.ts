import { POEMS } from "@/lib/data/poems";
import { PoemEntry, PlantSlug } from "@/lib/types";

export function matchPoem(plantSlug: PlantSlug, tags: string[]): PoemEntry {
  const candidates = POEMS.filter((poem) => poem.plant === plantSlug && (poem.dynasty === "唐" || poem.dynasty === "宋"));

  return [...candidates]
    .map((poem) => ({
      poem,
      score: poem.emotionTags.reduce((acc, tag) => acc + (tags.includes(tag) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score)[0].poem;
}
