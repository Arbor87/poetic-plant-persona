import { PLANTS } from "@/lib/data/plants";
import { ANALYSIS_SYSTEM_PROMPT } from "@/lib/prompts/analysis";
import { AnalysisResult, PersonalityTag, PlantProfile } from "@/lib/types";

const NORMALIZATION: Record<string, string> = {
  慢热: "安静",
  含蓄: "内敛",
  温润: "温和",
  稳定: "稳重",
  倔强: "坚韧",
  坚持: "坚韧",
  体贴: "共情",
  清冷: "独立",
  柔和: "温柔",
  生命力: "热情",
  冷静: "理性",
  细致: "细腻"
};

const RULE_KEYWORDS: Record<string, string[]> = {
  内敛: ["内敛", "含蓄", "不太擅长表达", "不善表达", "收着"],
  安静: ["安静", "慢热", "沉静", "平静", "低调"],
  坚韧: ["坚持", "坚韧", "有韧性", "不放弃", "认定", "执着"],
  温柔: ["温柔", "柔和", "柔软", "温和"],
  理性: ["理性", "冷静", "清醒", "逻辑", "克制"],
  敏感: ["敏感", "容易察觉", "感受强"],
  热情: ["热情", "热烈", "有生命力", "主动", "明亮"],
  独立: ["独立", "自持", "有边界", "不依赖", "自己扛"],
  稳重: ["稳重", "可靠", "沉稳", "担当", "踏实"],
  淡泊: ["淡泊", "不争", "看得开", "疏离", "自得"],
  开朗: ["开朗", "外向", "爱表达", "活泼", "乐观"],
  浪漫: ["浪漫", "诗意", "喜欢美", "想象力"],
  细腻: ["细腻", "细致", "心思细", "观察细微"],
  共情: ["共情", "体贴", "感同身受", "会照顾别人"],
  克制: ["克制", "有分寸", "自律", "能忍"],
  清醒: ["清醒", "通透", "明白自己"]
};

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
    .slice(0, 5);

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

function parseModelPayload(raw: string) {
  const parsed = JSON.parse(raw) as {
    personalityTags?: PersonalityTag[];
    personalityType?: string;
    summary?: string;
  };

  if (!parsed.personalityTags?.length || !parsed.personalityType || !parsed.summary) {
    return null;
  }

  return {
    personalityTags: mergeTags(parsed.personalityTags),
    personalityType: parsed.personalityType,
    summary: parsed.summary
  };
}

function extractOutputText(data: unknown) {
  if (!data || typeof data !== "object") {
    return null;
  }

  if ("output_text" in data && typeof data.output_text === "string") {
    return data.output_text;
  }

  if (!("output" in data) || !Array.isArray(data.output)) {
    return null;
  }

  const texts = data.output.flatMap((item) => {
    if (!item || typeof item !== "object" || !("content" in item) || !Array.isArray(item.content)) {
      return [];
    }

    return item.content
      .filter((content: unknown) => content && typeof content === "object" && "type" in content && content.type === "output_text")
      .map((content: unknown) =>
        content && typeof content === "object" && "text" in content && typeof content.text === "string" ? content.text : ""
      )
      .filter(Boolean);
  });

  return texts.join("").trim() || null;
}

async function requestModelAnalyze(input: string, options: { apiKey: string; model: string; baseUrl: string }) {
  const response = await fetch(`${options.baseUrl}/responses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: options.model,
      input: [
        { role: "system", content: ANALYSIS_SYSTEM_PROMPT },
        { role: "user", content: input }
      ],
      text: {
        format: {
          type: "json_object"
        }
      }
    })
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as unknown;
  const raw = extractOutputText(data);
  if (!raw) {
    return null;
  }

  try {
    return parseModelPayload(raw);
  } catch {
    return null;
  }
}

async function modelAnalyze(input: string) {
  const arkApiKey = process.env.ARK_API_KEY;
  const arkModel = process.env.ARK_TEXT_MODEL;
  if (arkApiKey && arkModel) {
    const arkResult = await requestModelAnalyze(input, {
      apiKey: arkApiKey,
      model: arkModel,
      baseUrl: process.env.ARK_BASE_URL ?? "https://ark.cn-beijing.volces.com/api/v3"
    });

    if (arkResult) {
      return arkResult;
    }
  }

  const openaiApiKey = process.env.OPENAI_API_KEY;
  if (!openaiApiKey) {
    return null;
  }

  return requestModelAnalyze(input, {
    apiKey: openaiApiKey,
    model: process.env.OPENAI_TEXT_MODEL ?? "gpt-4.1-mini",
    baseUrl: process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1"
  });
}

function scorePlant(tags: PersonalityTag[], plant: PlantProfile) {
  return tags.reduce((acc, tag) => {
    const direct = plant.keywords.includes(tag.name) ? 1.3 : 0;
    const fuzzy = plant.keywords.some((keyword) => keyword.includes(tag.name) || tag.name.includes(keyword)) ? 0.35 : 0;
    return acc + (direct + fuzzy) * tag.score;
  }, 0);
}

function mapPlant(tags: PersonalityTag[]) {
  return [...PLANTS]
    .map((plant) => ({ plant, score: scorePlant(tags, plant) }))
    .sort((a, b) => b.score - a.score)[0].plant;
}

function hydrateSummary(summary: string, plant: PlantProfile) {
  const template = plant.descriptionTemplate.replace("{plant}", plant.name);
  return summary.length > 54 ? template : `${summary} ${template}`;
}

export async function analyzePersonality(input: string): Promise<AnalysisResult> {
  const clean = input.trim();
  const analyzed = (await modelAnalyze(clean)) ?? fallbackAnalyze(clean);
  const dominantTraits = analyzed.personalityTags.slice(0, 3).map((tag) => tag.name);
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

