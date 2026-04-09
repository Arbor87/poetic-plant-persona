import { PLANT_MAP } from "@/lib/data/plants";
import { ImageResult, PlantSlug } from "@/lib/types";

function buildLocalImageUrl(plantSlug: PlantSlug, tags: string[]) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const query = new URLSearchParams({ tags: tags.join(","), seed: plantSlug }).toString();
  return `${base}/api/plant-image/${plantSlug}?${query}`;
}

export async function generatePlantImage(plantSlug: PlantSlug, tags: string[]): Promise<ImageResult> {
  const plant = PLANT_MAP[plantSlug];
  if (!plant) {
    throw new Error(`Unknown plant slug: ${plantSlug}`);
  }

  const imagePrompt = `${plant.imagePromptCore}，人格关键词：${tags.join("、")}。`;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return {
      imagePrompt,
      imageUrl: buildLocalImageUrl(plantSlug, tags),
      provider: "mock-svg"
    };
  }

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_IMAGE_MODEL ?? "gpt-image-1",
        prompt: imagePrompt,
        size: "1024x1024"
      })
    });

    if (!response.ok) {
      throw new Error("image generation failed");
    }

    const data = (await response.json()) as {
      data?: Array<{ b64_json?: string; url?: string }>;
    };

    const first = data.data?.[0];
    if (first?.b64_json) {
      return {
        imagePrompt,
        imageUrl: `data:image/png;base64,${first.b64_json}`,
        provider: "openai"
      };
    }

    if (first?.url) {
      return {
        imagePrompt,
        imageUrl: first.url,
        provider: "openai"
      };
    }
  } catch {
    return {
      imagePrompt,
      imageUrl: buildLocalImageUrl(plantSlug, tags),
      provider: "mock-svg"
    };
  }

  return {
    imagePrompt,
    imageUrl: buildLocalImageUrl(plantSlug, tags),
    provider: "mock-svg"
  };
}
