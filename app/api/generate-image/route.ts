import { NextResponse } from "next/server";

import { PLANT_MAP } from "@/lib/data/plants";
import { generatePlantImage } from "@/lib/services/image";
import { PlantSlug } from "@/lib/types";

export async function POST(request: Request) {
  const { plantSlug, tags } = (await request.json()) as {
    plantSlug?: PlantSlug;
    tags?: string[];
  };

  if (!plantSlug || !PLANT_MAP[plantSlug]) {
    return NextResponse.json({ error: "valid plantSlug is required" }, { status: 400 });
  }

  const image = await generatePlantImage(plantSlug, tags ?? []);
  return NextResponse.json(image);
}
