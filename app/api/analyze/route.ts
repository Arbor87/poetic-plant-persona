import { NextResponse } from "next/server";

import { analyzePersonality } from "@/lib/services/personality";

export async function POST(request: Request) {
  const { text } = (await request.json()) as { text?: string };

  if (!text?.trim()) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  const analysis = await analyzePersonality(text);
  return NextResponse.json(analysis);
}
