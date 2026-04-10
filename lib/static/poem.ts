import { PLANT_MAP } from "@/lib/data/plants";
import { POEMS } from "@/lib/data/poems";
import { PoemEntry, PlantSlug } from "@/lib/types";

export function matchPoemStatic(plantSlug: PlantSlug, tags: string[]): PoemEntry {
  const candidates = POEMS.filter((poem) => poem.plant === plantSlug && (poem.dynasty === "唐" || poem.dynasty === "宋"));
  const pool = candidates.length ? candidates : POEMS;

  return [...pool]
    .map((poem) => ({
      poem,
      score:
        poem.emotionTags.reduce((acc, tag) => acc + (tags.includes(tag) ? 1 : 0), 0) +
        (poem.plant === plantSlug ? 0.5 : 0) +
        poem.emotionTags.reduce((acc, tag) => acc + (PLANT_MAP[plantSlug].poemThemes.includes(tag) ? 0.2 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score)[0].poem;
}
