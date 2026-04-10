import { PLANT_MAP, PLANTS } from "@/lib/data/plants";
import { AnalysisResult, PersonalityTag, PlantProfile, PlantSlug } from "@/lib/types";

const NORMALIZATION: Record<string, string> = {
  慢热: "安静",
  含蓄: "内敛",
  温润: "温润",
  稳定: "稳重",
  倔强: "坚韧",
  坚持: "坚韧",
  体贴: "共情",
  清冷: "独立",
  柔和: "温柔",
  生命力: "热情",
  冷静: "理性",
  细致: "细腻",
  距离感: "疏离",
  有边界: "边界感",
  有边界感: "边界感",
  松弛: "自由",
  鲜活: "灵动",
  清透: "明净",
  温厚: "温润",
  不争不抢: "淡泊"
};

const RULE_KEYWORDS: Record<string, string[]> = {
  内敛: ["内敛", "含蓄", "不太擅长表达", "不善表达", "收着"],
  安静: ["安静", "慢热", "沉静", "平静", "低调"],
  坚韧: ["坚持", "坚韧", "有韧性", "不放弃", "认定", "执着"],
  温柔: ["温柔", "柔和", "柔软", "温和"],
  理性: ["理性", "冷静", "清醒", "逻辑", "克制"],
  敏感: ["敏感", "容易察觉", "感受强", "情绪感强"],
  热情: ["热情", "热烈", "有生命力", "主动", "明亮"],
  独立: ["独立", "自持", "不依赖", "自己扛"],
  稳重: ["稳重", "可靠", "沉稳", "担当", "踏实"],
  淡泊: ["淡泊", "不争", "看得开", "疏离", "自得"],
  开朗: ["开朗", "外向", "爱表达", "活泼", "乐观"],
  浪漫: ["浪漫", "诗意", "喜欢美", "想象力"],
  细腻: ["细腻", "细致", "心思细", "观察细微"],
  共情: ["共情", "体贴", "感同身受", "会照顾别人"],
  克制: ["克制", "有分寸", "自律", "能忍"],
  清醒: ["清醒", "通透", "明白自己"],
  温润: ["温润", "温厚", "柔润", "不张扬"],
  边界感: ["边界感", "有边界", "界限分明", "有分寸"],
  柔韧: ["柔韧", "适应力强", "能屈能伸", "韧劲"],
  疏离: ["疏离", "距离感", "不黏人", "喜欢留白"],
  灵动: ["灵动", "鲜活", "轻盈", "有趣"],
  明净: ["明净", "清透", "干净", "纯澈"],
  自由: ["自由", "松弛", "自在", "不受拘束"],
  真诚: ["真诚", "坦诚", "赤诚", "实在"],
  耐看: ["耐看", "耐品", "越看越有味", "含蓄耐品"],
  成熟: ["成熟", "有层次", "稳当", "不幼稚"]
};

const FALLBACK_BY_TRAIT: Array<{ traits: string[]; plant: PlantSlug }> = [
  { traits: ["坚韧", "克制", "理性", "清醒"], plant: "bamboo" },
  { traits: ["内敛", "细腻", "敏感", "温和"], plant: "orchid" },
  { traits: ["独立", "清冷"], plant: "plum" },
  { traits: ["温柔", "纯净", "边界感", "明净"], plant: "lotus" },
  { traits: ["稳重", "担当", "可靠"], plant: "pine" },
  { traits: ["共情", "感性", "柔韧"], plant: "willow" },
  { traits: ["淡泊", "不争", "自由"], plant: "chrysanthemum" },
  { traits: ["热情", "开朗", "浪漫", "灵动"], plant: "peach-blossom" }
];

function normalizeTag(name: string) {
  return NORMALIZATION[name] ?? name;
}

function mergeTags(tags: PersonalityTag[]) {
  const merged = new Map<string, number>();

  for (const tag of tags) {
    const normalized = normalizeTag(tag.name);
    merged.set(normalized, Math.max(tag.score, merged.get(normalized) ?? 0));
  }

  return Array.from(merged.entries())
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => b.score - a.score);
}

function buildSummary(tags: string[]) {
  const joined = tags.slice(0, 3).join("、");
  return `你给人的感受偏向${joined}，气质不张扬，但情绪与意志都很稳定。`;
}

function fallbackAnalyze(input: string) {
  const tags = Object.entries(RULE_KEYWORDS)
    .map(([name, patterns]) => ({
      name,
      score: patterns.reduce((acc, pattern) => acc + (input.includes(pattern) ? 0.22 : 0), 0)
    }))
    .filter((tag) => tag.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  const safeTags = mergeTags(
    tags.length
      ? tags
      : [
          { name: "安静", score: 0.6 },
          { name: "细腻", score: 0.54 },
          { name: "坚韧", score: 0.5 }
        ]
  );

  return {
    personalityTags: safeTags,
    personalityType: `${safeTags[0].name}${safeTags[1] ? safeTags[1].name : ""}型`,
    summary: buildSummary(safeTags.map((tag) => tag.name))
  };
}

function fallbackPlantByTags(tags: PersonalityTag[]) {
  for (const fallback of FALLBACK_BY_TRAIT) {
    if (tags.some((tag) => fallback.traits.includes(tag.name))) {
      return PLANT_MAP[fallback.plant];
    }
  }

  return PLANT_MAP.orchid;
}

function scorePlant(tags: PersonalityTag[], plant: PlantProfile) {
  return tags.reduce((acc, tag) => {
    const core = plant.coreKeywords.includes(tag.name) ? 2.4 : 0;
    const direct = plant.keywords.includes(tag.name) ? 1.25 : 0;
    const fuzzy = [...plant.coreKeywords, ...plant.keywords].some(
      (keyword) => keyword.includes(tag.name) || tag.name.includes(keyword)
    )
      ? 0.25
      : 0;
    const avoid = plant.avoidTags.includes(tag.name) ? -1.6 : 0;
    return acc + (core + direct + fuzzy + avoid) * tag.score;
  }, 0);
}

function mapPlant(tags: PersonalityTag[]) {
  const ranked = [...PLANTS]
    .map((plant) => ({ plant, score: scorePlant(tags, plant) }))
    .sort((a, b) => b.score - a.score);

  const [top, second] = ranked;
  const fallback = fallbackPlantByTags(tags);

  if (!top || top.score < 0.9) {
    return fallback;
  }

  if (second && top.score - second.score < 0.12 && tags[0] && fallback.coreKeywords.includes(tags[0].name)) {
    return fallback;
  }

  return top.plant;
}

function hydrateSummary(summary: string, plant: PlantProfile) {
  const template = plant.descriptionTemplate.replace("{plant}", plant.name);
  return summary.length > 54 ? template : `${summary} ${template}`;
}

export function analyzePersonalityStatic(input: string): AnalysisResult {
  const clean = input.trim();
  const analyzed = fallbackAnalyze(clean);
  const dominantTraits = analyzed.personalityTags.slice(0, 4).map((tag) => tag.name);
  const plant = mapPlant(analyzed.personalityTags);

  return {
    input: clean,
    personalityTags: analyzed.personalityTags,
    personalityType: analyzed.personalityType,
    summary: hydrateSummary(analyzed.summary, plant),
    dominantTraits,
    plant
  };
}
