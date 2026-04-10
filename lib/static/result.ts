import { ResultPayload } from "@/lib/types";
import { analyzePersonalityStatic } from "@/lib/static/personality";
import { matchPoemStatic } from "@/lib/static/poem";
import { buildPlantImageDataUrl } from "@/lib/static/plant-svg";

export function buildStaticResultPayload(input: string): ResultPayload {
  const analysis = analyzePersonalityStatic(input);
  const tags = analysis.personalityTags.map((tag) => tag.name);

  return {
    input,
    analysis,
    poem: matchPoemStatic(analysis.plant.slug, tags),
    image: {
      imagePrompt: `${analysis.plant.imagePromptCore}，人格关键词：${tags.join("、")}。`,
      imageUrl: buildPlantImageDataUrl(analysis.plant.slug, tags),
      provider: "mock-svg"
    }
  };
}
