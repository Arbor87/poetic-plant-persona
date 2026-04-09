import { analyzePersonality } from "@/lib/services/personality";
import { generatePlantImage } from "@/lib/services/image";
import { matchPoem } from "@/lib/services/poem";
import { ResultPayload } from "@/lib/types";

export async function buildResultPayload(input: string): Promise<ResultPayload> {
  const analysis = await analyzePersonality(input);
  const tags = analysis.personalityTags.map((tag) => tag.name);
  const [image, poem] = await Promise.all([
    generatePlantImage(analysis.plant.slug, tags),
    Promise.resolve(matchPoem(analysis.plant.slug, tags))
  ]);

  return {
    input,
    analysis,
    image,
    poem
  };
}
