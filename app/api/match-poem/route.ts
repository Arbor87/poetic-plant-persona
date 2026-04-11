import { NextResponse } from "next/server";

import { PLANT_MAP } from "@/lib/data/plants";
import { matchPoem } from "@/lib/services/poem";
import { PlantSlug } from "@/lib/types";

export async function POST(request: Request) {
  const { plantSlug, tags } = (await request.json()) as {
    plantSlug?: PlantSlug;
    tags?: string[];
  };

  if (!plantSlug || !PLANT_MAP[plantSlug]) {
    return NextResponse.json({ error: "valid plantSlug is required" }, { status: 400 });
  }

  const poem = matchPoem(plantSlug, tags ?? []);
  return NextResponse.json({ poem });
}
