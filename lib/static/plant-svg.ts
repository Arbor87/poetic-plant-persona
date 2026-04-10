import { PLANT_MAP } from "@/lib/data/plants";
import { PlantSlug } from "@/lib/types";

const PALETTE: Record<PlantSlug, { main: string; accent: string; wash: string }> = {
  bamboo: { main: "#5d7661", accent: "#8ba08a", wash: "#eef2ea" },
  orchid: { main: "#768a6c", accent: "#9fb0a0", wash: "#eef1ea" },
  plum: { main: "#6a4f4f", accent: "#d8b3ba", wash: "#f5eff0" },
  lotus: { main: "#728b80", accent: "#e1c2c5", wash: "#f3f0eb" },
  pine: { main: "#485c52", accent: "#91a28e", wash: "#ecefe9" },
  willow: { main: "#8a9d78", accent: "#c1d0a9", wash: "#f1f4ec" },
  chrysanthemum: { main: "#8b7a53", accent: "#d9c690", wash: "#f6f2e8" },
  "peach-blossom": { main: "#9f6e73", accent: "#edc5ca", wash: "#f8eff0" },
  osmanthus: { main: "#7d6b48", accent: "#d7bb67", wash: "#f6f1e5" },
  crabapple: { main: "#8f6874", accent: "#efc2cf", wash: "#f9eff3" },
  "apricot-blossom": { main: "#97716e", accent: "#f1d2c4", wash: "#faf2ed" },
  "pear-blossom": { main: "#767d86", accent: "#f2f4f3", wash: "#f6f7f4" },
  "parasol-tree": { main: "#596167", accent: "#8c7761", wash: "#efede8" },
  "banana-leaf": { main: "#516c57", accent: "#9fbc94", wash: "#edf3ea" },
  wisteria: { main: "#756d93", accent: "#c5bbe7", wash: "#f1eff8" },
  maple: { main: "#815348", accent: "#d98a62", wash: "#f7efe8" }
};

function drawBlossomBranch(main: string, accent: string, blossoms: Array<{ x: number; y: number; r: number }>) {
  return `
    <g fill="none" stroke-linecap="round">
      <path d="M250 935 C330 785, 420 655, 590 450" stroke="${main}" stroke-width="11" />
      <path d="M465 602 C402 542, 350 500, 295 470" stroke="${main}" stroke-width="7" />
      <path d="M560 490 C625 448, 690 402, 748 332" stroke="${main}" stroke-width="7" />
      <g fill="${accent}" stroke="none">${blossoms.map((b) => `<circle cx="${b.x}" cy="${b.y}" r="${b.r}" />`).join("")}</g>
    </g>`;
}

function drawCanopyTree(main: string, accent: string, canopy: Array<{ cx: number; cy: number; rx: number; ry: number; opacity: number }>) {
  return `
    <g fill="none" stroke-linecap="round">
      <path d="M455 935 C450 805, 456 645, 470 360" stroke="${main}" stroke-width="12" />
      <path d="M468 600 C408 555, 350 520, 292 465" stroke="${main}" stroke-width="7" opacity="0.92" />
      <path d="M478 560 C555 525, 625 485, 710 420" stroke="${main}" stroke-width="7" opacity="0.92" />
      <g fill="${accent}" stroke="none">${canopy.map((leaf) => `<ellipse cx="${leaf.cx}" cy="${leaf.cy}" rx="${leaf.rx}" ry="${leaf.ry}" opacity="${leaf.opacity}" />`).join("")}</g>
    </g>`;
}

function drawCascade(main: string, accent: string) {
  return `
    <g fill="none" stroke-linecap="round">
      <path d="M240 360 C360 325, 480 322, 645 360" stroke="${main}" stroke-width="9" />
      <path d="M300 380 C285 525, 292 675, 320 860" stroke="${main}" stroke-width="5" />
      <path d="M390 372 C372 520, 378 680, 405 895" stroke="${main}" stroke-width="5" />
      <path d="M485 370 C470 530, 474 698, 505 905" stroke="${main}" stroke-width="5" />
      <path d="M585 374 C568 520, 575 670, 605 882" stroke="${main}" stroke-width="5" />
      <path d="M670 390 C650 515, 658 640, 688 820" stroke="${main}" stroke-width="5" />
      <g fill="${accent}" stroke="none" opacity="0.88">
        <ellipse cx="300" cy="505" rx="26" ry="40" />
        <ellipse cx="316" cy="585" rx="22" ry="34" />
        <ellipse cx="395" cy="520" rx="28" ry="42" />
        <ellipse cx="412" cy="615" rx="22" ry="36" />
        <ellipse cx="488" cy="520" rx="26" ry="40" />
        <ellipse cx="505" cy="620" rx="20" ry="34" />
        <ellipse cx="588" cy="520" rx="28" ry="40" />
        <ellipse cx="605" cy="620" rx="22" ry="36" />
        <ellipse cx="676" cy="525" rx="24" ry="38" />
      </g>
    </g>`;
}

function drawBroadLeaves(main: string, accent: string) {
  return `
    <g fill="none" stroke-linecap="round">
      <path d="M455 940 C452 835, 456 712, 468 500" stroke="${main}" stroke-width="8" />
      <path d="M468 720 C378 650, 320 570, 280 440 C368 442, 430 505, 470 650" fill="${accent}" fill-opacity="0.28" stroke="${main}" stroke-width="5" />
      <path d="M476 690 C555 598, 620 520, 705 420 C660 548, 590 638, 492 748" fill="${accent}" fill-opacity="0.24" stroke="${main}" stroke-width="5" />
      <path d="M456 590 C412 498, 392 420, 402 315 C470 398, 490 472, 485 568" fill="${accent}" fill-opacity="0.2" stroke="${main}" stroke-width="4" />
      <path d="M332 468 C380 510, 420 568, 455 652" stroke="${main}" stroke-width="3" opacity="0.65" />
      <path d="M635 500 C585 560, 540 628, 496 736" stroke="${main}" stroke-width="3" opacity="0.65" />
    </g>`;
}

function drawPlant(plant: PlantSlug, main: string, accent: string) {
  switch (plant) {
    case "bamboo":
      return `<g stroke="${main}" fill="none" stroke-linecap="round"><path d="M320 930 C330 760, 335 560, 345 300" stroke-width="12" /><path d="M430 960 C438 800, 448 610, 455 340" stroke-width="10" opacity="0.92" /><path d="M545 920 C548 780, 560 620, 570 380" stroke-width="11" opacity="0.8" /><path d="M350 450 C290 420, 255 395, 220 340" stroke-width="6" /><path d="M355 565 C300 545, 250 512, 205 460" stroke-width="6" opacity="0.9" /><path d="M455 500 C525 470, 585 430, 650 360" stroke-width="6" /><path d="M460 630 C520 610, 590 565, 670 490" stroke-width="6" opacity="0.9" /><path d="M575 565 C645 525, 700 480, 760 410" stroke-width="6" opacity="0.8" /></g>`;
    case "orchid":
      return `<g fill="none" stroke-linecap="round"><path d="M450 910 C430 760, 420 610, 455 410" stroke="${main}" stroke-width="7" /><path d="M465 870 C385 760, 330 640, 300 470" stroke="${main}" stroke-width="8" /><path d="M470 860 C560 760, 620 645, 655 480" stroke="${main}" stroke-width="8" /><path d="M470 760 C360 770, 280 720, 215 630" stroke="${accent}" stroke-width="7" /><path d="M485 700 C605 690, 700 640, 760 555" stroke="${accent}" stroke-width="7" /><circle cx="468" cy="395" r="18" fill="${accent}" opacity="0.9" /><circle cx="498" cy="420" r="14" fill="${accent}" opacity="0.75" /><circle cx="436" cy="425" r="14" fill="${accent}" opacity="0.75" /></g>`;
    case "plum":
      return drawBlossomBranch(main, accent, [{ x: 325, y: 468, r: 18 }, { x: 388, y: 538, r: 12 }, { x: 438, y: 592, r: 14 }, { x: 562, y: 420, r: 20 }, { x: 620, y: 460, r: 16 }, { x: 720, y: 330, r: 17 }]);
    case "lotus":
      return `<g fill="none" stroke-linecap="round"><path d="M355 930 C350 820, 355 690, 390 540" stroke="${main}" stroke-width="7" /><path d="M560 930 C555 825, 552 705, 520 555" stroke="${main}" stroke-width="7" /><ellipse cx="325" cy="780" rx="128" ry="44" fill="${accent}" opacity="0.35" /><ellipse cx="600" cy="735" rx="142" ry="48" fill="${main}" opacity="0.18" /><path d="M388 500 C415 438, 454 400, 490 365 C522 400, 550 442, 572 498" fill="${accent}" opacity="0.68" stroke="${accent}" stroke-width="3" /><path d="M410 500 C440 452, 465 430, 492 405 C518 431, 540 456, 552 500" fill="#f7e4e6" opacity="0.85" stroke="${accent}" stroke-width="2" /></g>`;
    case "pine":
      return `<g fill="none" stroke-linecap="round"><path d="M455 930 C448 785, 455 620, 470 360" stroke="${main}" stroke-width="14" /><path d="M470 480 C365 435, 300 395, 232 320" stroke="${main}" stroke-width="8" /><path d="M470 550 C575 510, 650 462, 742 390" stroke="${main}" stroke-width="8" /><path d="M458 645 C365 628, 290 590, 205 515" stroke="${accent}" stroke-width="7" /><path d="M482 690 C590 660, 688 610, 778 545" stroke="${accent}" stroke-width="7" /><path d="M260 330 L200 300 M278 350 L220 325 M300 370 L242 345 M685 420 L745 390 M650 450 L716 425" stroke="${accent}" stroke-width="5" /></g>`;
    case "willow":
      return `<g fill="none" stroke-linecap="round"><path d="M460 940 C452 770, 450 620, 458 345" stroke="${main}" stroke-width="9" /><path d="M458 405 C372 440, 292 475, 230 560" stroke="${main}" stroke-width="6" /><path d="M462 392 C555 430, 640 470, 705 560" stroke="${main}" stroke-width="6" /><path d="M290 520 C285 650, 280 745, 250 855" stroke="${accent}" stroke-width="5" /><path d="M360 470 C348 620, 338 745, 310 900" stroke="${accent}" stroke-width="5" /><path d="M570 470 C585 625, 602 760, 635 900" stroke="${accent}" stroke-width="5" /><path d="M640 520 C650 655, 665 760, 705 860" stroke="${accent}" stroke-width="5" /></g>`;
    case "chrysanthemum":
      return `<g fill="none" stroke-linecap="round"><path d="M450 930 C452 810, 458 700, 468 560" stroke="${main}" stroke-width="7" /><path d="M468 720 C402 700, 340 668, 278 610" stroke="${main}" stroke-width="6" /><path d="M475 670 C548 648, 622 610, 690 540" stroke="${main}" stroke-width="6" /><g stroke="${accent}" stroke-width="5"><path d="M470 470 L470 360" /><path d="M470 470 L418 376" /><path d="M470 470 L522 376" /><path d="M470 470 L382 425" /><path d="M470 470 L558 425" /><path d="M470 470 L390 520" /><path d="M470 470 L550 520" /></g><circle cx="470" cy="470" r="28" fill="${accent}" opacity="0.85" /></g>`;
    case "peach-blossom":
      return drawBlossomBranch(main, accent, [{ x: 300, y: 470, r: 16 }, { x: 344, y: 498, r: 12 }, { x: 450, y: 610, r: 14 }, { x: 593, y: 450, r: 17 }, { x: 670, y: 388, r: 16 }, { x: 736, y: 334, r: 15 }]);
    case "osmanthus":
      return drawBlossomBranch(main, accent, [{ x: 314, y: 470, r: 8 }, { x: 354, y: 492, r: 7 }, { x: 446, y: 608, r: 8 }, { x: 586, y: 450, r: 9 }, { x: 658, y: 386, r: 8 }, { x: 730, y: 334, r: 7 }, { x: 618, y: 410, r: 7 }, { x: 525, y: 505, r: 8 }]);
    case "crabapple":
      return drawBlossomBranch(main, accent, [{ x: 304, y: 470, r: 18 }, { x: 350, y: 500, r: 14 }, { x: 450, y: 610, r: 15 }, { x: 590, y: 448, r: 19 }, { x: 665, y: 385, r: 18 }, { x: 734, y: 334, r: 16 }, { x: 620, y: 430, r: 13 }]);
    case "apricot-blossom":
      return drawBlossomBranch(main, accent, [{ x: 302, y: 470, r: 14 }, { x: 345, y: 500, r: 12 }, { x: 447, y: 610, r: 12 }, { x: 592, y: 450, r: 14 }, { x: 666, y: 386, r: 13 }, { x: 733, y: 334, r: 12 }]);
    case "pear-blossom":
      return drawBlossomBranch(main, accent, [{ x: 300, y: 470, r: 15 }, { x: 346, y: 498, r: 13 }, { x: 450, y: 610, r: 13 }, { x: 592, y: 450, r: 16 }, { x: 668, y: 388, r: 15 }, { x: 735, y: 334, r: 14 }]);
    case "parasol-tree":
      return drawCanopyTree(main, accent, [{ cx: 350, cy: 455, rx: 96, ry: 74, opacity: 0.24 }, { cx: 472, cy: 388, rx: 108, ry: 78, opacity: 0.26 }, { cx: 600, cy: 455, rx: 100, ry: 74, opacity: 0.22 }, { cx: 520, cy: 520, rx: 84, ry: 60, opacity: 0.18 }]);
    case "banana-leaf":
      return drawBroadLeaves(main, accent);
    case "wisteria":
      return drawCascade(main, accent);
    case "maple":
      return drawCanopyTree(main, accent, [{ cx: 335, cy: 470, rx: 90, ry: 72, opacity: 0.22 }, { cx: 462, cy: 392, rx: 112, ry: 82, opacity: 0.28 }, { cx: 600, cy: 470, rx: 100, ry: 74, opacity: 0.24 }, { cx: 520, cy: 540, rx: 88, ry: 62, opacity: 0.2 }]);
  }
}

export function buildPlantImageDataUrl(plantSlug: PlantSlug, tags: string[]) {
  const plant = PLANT_MAP[plantSlug];
  const colors = PALETTE[plantSlug];
  const text = tags.slice(0, 3).join(" · ");
  const illustration = drawPlant(plantSlug, colors.main, colors.accent);

  const svg = `
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
  </svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
