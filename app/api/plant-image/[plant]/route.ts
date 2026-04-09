import { NextResponse } from "next/server";

import { PLANT_MAP } from "@/lib/data/plants";
import { PlantSlug } from "@/lib/types";

const PALETTE: Record<string, { main: string; accent: string; wash: string }> = {
  bamboo: { main: "#5d7661", accent: "#8ba08a", wash: "#eef2ea" },
  orchid: { main: "#768a6c", accent: "#9fb0a0", wash: "#eef1ea" },
  plum: { main: "#6a4f4f", accent: "#d8b3ba", wash: "#f5eff0" },
  lotus: { main: "#728b80", accent: "#e1c2c5", wash: "#f3f0eb" },
  pine: { main: "#485c52", accent: "#91a28e", wash: "#ecefe9" },
  willow: { main: "#8a9d78", accent: "#c1d0a9", wash: "#f1f4ec" },
  chrysanthemum: { main: "#8b7a53", accent: "#d9c690", wash: "#f6f2e8" },
  "peach-blossom": { main: "#9f6e73", accent: "#edc5ca", wash: "#f8eff0" }
};

function drawPlant(plant: PlantSlug, main: string, accent: string) {
  switch (plant) {
    case "bamboo":
      return `
        <g stroke="${main}" fill="none" stroke-linecap="round">
          <path d="M320 930 C330 760, 335 560, 345 300" stroke-width="12" />
          <path d="M430 960 C438 800, 448 610, 455 340" stroke-width="10" opacity="0.92" />
          <path d="M545 920 C548 780, 560 620, 570 380" stroke-width="11" opacity="0.8" />
          <path d="M350 450 C290 420, 255 395, 220 340" stroke-width="6" />
          <path d="M355 565 C300 545, 250 512, 205 460" stroke-width="6" opacity="0.9" />
          <path d="M455 500 C525 470, 585 430, 650 360" stroke-width="6" />
          <path d="M460 630 C520 610, 590 565, 670 490" stroke-width="6" opacity="0.9" />
          <path d="M575 565 C645 525, 700 480, 760 410" stroke-width="6" opacity="0.8" />
        </g>`;
    case "orchid":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M450 910 C430 760, 420 610, 455 410" stroke="${main}" stroke-width="7" />
          <path d="M465 870 C385 760, 330 640, 300 470" stroke="${main}" stroke-width="8" />
          <path d="M470 860 C560 760, 620 645, 655 480" stroke="${main}" stroke-width="8" />
          <path d="M470 760 C360 770, 280 720, 215 630" stroke="${accent}" stroke-width="7" />
          <path d="M485 700 C605 690, 700 640, 760 555" stroke="${accent}" stroke-width="7" />
          <circle cx="468" cy="395" r="18" fill="${accent}" opacity="0.9" />
          <circle cx="498" cy="420" r="14" fill="${accent}" opacity="0.75" />
          <circle cx="436" cy="425" r="14" fill="${accent}" opacity="0.75" />
        </g>`;
    case "plum":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M250 910 C330 770, 415 620, 565 420" stroke="${main}" stroke-width="12" />
          <path d="M445 600 C410 540, 370 500, 318 470" stroke="${main}" stroke-width="8" />
          <path d="M535 500 C615 455, 675 400, 728 320" stroke="${main}" stroke-width="8" />
          <g fill="${accent}" stroke="none">
            <circle cx="325" cy="468" r="18" /><circle cx="562" cy="420" r="20" />
            <circle cx="720" cy="330" r="17" /><circle cx="438" cy="592" r="14" />
            <circle cx="620" cy="460" r="16" /><circle cx="388" cy="538" r="12" />
          </g>
        </g>`;
    case "lotus":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M355 930 C350 820, 355 690, 390 540" stroke="${main}" stroke-width="7" />
          <path d="M560 930 C555 825, 552 705, 520 555" stroke="${main}" stroke-width="7" />
          <ellipse cx="325" cy="780" rx="128" ry="44" fill="${accent}" opacity="0.35" />
          <ellipse cx="600" cy="735" rx="142" ry="48" fill="${main}" opacity="0.18" />
          <path d="M388 500 C415 438, 454 400, 490 365 C522 400, 550 442, 572 498" fill="${accent}" opacity="0.68" stroke="${accent}" stroke-width="3" />
          <path d="M410 500 C440 452, 465 430, 492 405 C518 431, 540 456, 552 500" fill="#f7e4e6" opacity="0.85" stroke="${accent}" stroke-width="2" />
        </g>`;
    case "pine":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M455 930 C448 785, 455 620, 470 360" stroke="${main}" stroke-width="14" />
          <path d="M470 480 C365 435, 300 395, 232 320" stroke="${main}" stroke-width="8" />
          <path d="M470 550 C575 510, 650 462, 742 390" stroke="${main}" stroke-width="8" />
          <path d="M458 645 C365 628, 290 590, 205 515" stroke="${accent}" stroke-width="7" />
          <path d="M482 690 C590 660, 688 610, 778 545" stroke="${accent}" stroke-width="7" />
          <path d="M260 330 L200 300 M278 350 L220 325 M300 370 L242 345 M685 420 L745 390 M650 450 L716 425" stroke="${accent}" stroke-width="5" />
        </g>`;
    case "willow":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M460 940 C452 770, 450 620, 458 345" stroke="${main}" stroke-width="9" />
          <path d="M458 405 C372 440, 292 475, 230 560" stroke="${main}" stroke-width="6" />
          <path d="M462 392 C555 430, 640 470, 705 560" stroke="${main}" stroke-width="6" />
          <path d="M290 520 C285 650, 280 745, 250 855" stroke="${accent}" stroke-width="5" />
          <path d="M360 470 C348 620, 338 745, 310 900" stroke="${accent}" stroke-width="5" />
          <path d="M570 470 C585 625, 602 760, 635 900" stroke="${accent}" stroke-width="5" />
          <path d="M640 520 C650 655, 665 760, 705 860" stroke="${accent}" stroke-width="5" />
        </g>`;
    case "chrysanthemum":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M450 930 C452 810, 458 700, 468 560" stroke="${main}" stroke-width="7" />
          <path d="M468 720 C402 700, 340 668, 278 610" stroke="${main}" stroke-width="6" />
          <path d="M475 670 C548 648, 622 610, 690 540" stroke="${main}" stroke-width="6" />
          <g stroke="${accent}" stroke-width="5">
            <path d="M470 470 L470 360" />
            <path d="M470 470 L418 376" />
            <path d="M470 470 L522 376" />
            <path d="M470 470 L382 425" />
            <path d="M470 470 L558 425" />
            <path d="M470 470 L390 520" />
            <path d="M470 470 L550 520" />
          </g>
          <circle cx="470" cy="470" r="28" fill="${accent}" opacity="0.85" />
        </g>`;
    case "peach-blossom":
      return `
        <g fill="none" stroke-linecap="round">
          <path d="M260 935 C330 785, 420 655, 590 450" stroke="${main}" stroke-width="11" />
          <path d="M465 602 C402 542, 350 500, 295 470" stroke="${main}" stroke-width="7" />
          <path d="M560 490 C625 448, 690 402, 748 332" stroke="${main}" stroke-width="7" />
          <g fill="${accent}" stroke="none">
            <circle cx="300" cy="470" r="16" /><circle cx="344" cy="498" r="12" />
            <circle cx="450" cy="610" r="14" /><circle cx="593" cy="450" r="17" />
            <circle cx="670" cy="388" r="16" /><circle cx="736" cy="334" r="15" />
          </g>
        </g>`;
  }
}

function svgForPlant(plantSlug: PlantSlug, tags: string[]) {
  const plant = PLANT_MAP[plantSlug];
  const colors = PALETTE[plantSlug];
  const text = tags.slice(0, 3).join(" · ");
  const illustration = drawPlant(plantSlug, colors.main, colors.accent);

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1125">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#faf7f1" />
        <stop offset="100%" stop-color="${colors.wash}" />
      </linearGradient>
      <filter id="blur">
        <feGaussianBlur stdDeviation="18" />
      </filter>
    </defs>
    <rect width="900" height="1125" fill="url(#bg)" />
    <circle cx="170" cy="170" r="120" fill="${colors.accent}" opacity="0.13" filter="url(#blur)" />
    <circle cx="730" cy="260" r="160" fill="${colors.main}" opacity="0.08" filter="url(#blur)" />
    <ellipse cx="450" cy="985" rx="250" ry="36" fill="${colors.main}" opacity="0.06" />
    ${illustration}
    <text x="120" y="160" font-size="72" fill="${colors.main}" font-family="STSong, Songti SC, serif">${plant.name}</text>
    <text x="124" y="220" font-size="24" fill="${colors.main}" fill-opacity="0.65" font-family="Noto Serif SC, Songti SC, serif">${text}</text>
    <text x="124" y="1010" font-size="24" fill="${colors.main}" fill-opacity="0.58" font-family="Noto Serif SC, Songti SC, serif">东方诗意草木意象 / 无人物 / 留白</text>
  </svg>
  `.trim();
}

export async function GET(request: Request, context: { params: Promise<{ plant: string }> }) {
  const { plant } = await context.params;
  if (!PLANT_MAP[plant as PlantSlug]) {
    return NextResponse.json({ error: "Unknown plant" }, { status: 404 });
  }

  const plantSlug = plant as PlantSlug;
  const tags = new URL(request.url).searchParams.get("tags")?.split(",").filter(Boolean) ?? [];

  return new NextResponse(svgForPlant(plantSlug, tags), {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
