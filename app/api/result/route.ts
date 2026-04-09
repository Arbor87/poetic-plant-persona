import { NextResponse } from "next/server";

import { buildResultPayload } from "@/lib/services/result";

export async function POST(request: Request) {
  const { text } = (await request.json()) as { text?: string };

  if (!text?.trim()) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  const result = await buildResultPayload(text);
  return NextResponse.json(result);
}
