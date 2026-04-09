import { PlantProfile } from "@/lib/types";

export const PLANTS: PlantProfile[] = [
  {
    slug: "bamboo",
    name: "竹",
    aliases: ["修竹", "翠竹"],
    temperament: ["坚韧", "克制", "自律", "清醒", "外柔内刚"],
    keywords: ["坚韧", "克制", "自律", "清醒", "坚持", "理性", "稳重", "冷静"],
    imagePromptCore:
      "东方诗意风格，一丛修竹立于微风中，晨雾轻笼，水墨与工笔融合，留白构图，淡青与墨绿色调，宋画审美，宁静、坚韧、克制的气质，无人物，高级感",
    descriptionTemplate:
      "你像{plant}，外在克制安静，内里却有笔直而稳定的力量，越是沉默，越显风骨。",
    poemThemes: ["坚韧", "清雅", "清醒"]
  },
  {
    slug: "orchid",
    name: "兰",
    aliases: ["幽兰", "兰草"],
    temperament: ["内敛", "温和", "细腻", "安静", "清雅"],
    keywords: ["内敛", "温和", "细腻", "安静", "慢热", "含蓄", "敏感", "清雅"],
    imagePromptCore:
      "国风留白构图，一枝幽兰静立于山石旁，淡墨与浅青色层叠，雾气轻绕，宋画式审美，安静、清雅、细腻的气质，无人物，高级感",
    descriptionTemplate:
      "你像{plant}，不以喧闹示人，却在细微处自有香气，温柔而有分寸，安静而有光。",
    poemThemes: ["幽静", "温柔", "清雅"]
  },
  {
    slug: "plum",
    name: "梅",
    aliases: ["寒梅", "梅花"],
    temperament: ["坚强", "抗压", "清冷", "孤傲"],
    keywords: ["坚强", "抗压", "清冷", "孤傲", "独立", "倔强", "自持", "锋利"],
    imagePromptCore:
      "淡彩水墨风格，寒枝上数点梅花，雪意未尽，构图疏朗，白与浅绯对比，东方高级审美，清冷、坚强、孤高的气质，无人物",
    descriptionTemplate:
      "你像{plant}，不依赖热闹来证明自己，越在寒意之中，越能显出清醒与力量。",
    poemThemes: ["坚守", "清冷", "独立"]
  },
  {
    slug: "lotus",
    name: "莲",
    aliases: ["荷", "芙蕖"],
    temperament: ["纯净", "平和", "温柔", "有边界感"],
    keywords: ["纯净", "平和", "温柔", "边界感", "包容", "柔和", "安定", "克己"],
    imagePromptCore:
      "宋画审美的莲叶与淡粉荷花，水面平静，薄雾留白，水墨与淡彩融合，净而不冷，柔和而有边界，无人物，高级感",
    descriptionTemplate:
      "你像{plant}，温柔并不意味着失去边界，你的平和，是清楚知道自己该靠近什么、远离什么。",
    poemThemes: ["纯净", "平和", "自守"]
  },
  {
    slug: "pine",
    name: "松",
    aliases: ["青松", "古松"],
    temperament: ["稳重", "可靠", "沉静", "有担当"],
    keywords: ["稳重", "可靠", "沉静", "担当", "耐心", "责任感", "厚重", "踏实"],
    imagePromptCore:
      "古松立于山石之间，远山淡墨，风过松针，画面开阔而宁静，浓淡墨色层次分明，留白充足，无人物，东方高级质感",
    descriptionTemplate:
      "你像{plant}，看似不动声色，却总能在关键时刻给人依靠，安静之下，是极强的稳定感。",
    poemThemes: ["担当", "沉静", "可靠"]
  },
  {
    slug: "willow",
    name: "柳",
    aliases: ["垂柳", "杨柳"],
    temperament: ["柔软", "感性", "细腻", "共情力强"],
    keywords: ["柔软", "感性", "细腻", "共情", "敏感", "体贴", "柔和", "情绪感知"],
    imagePromptCore:
      "东方淡彩风格，临水垂柳随风轻拂，水面微波，浅绿与烟灰色调，留白构图，柔软、细腻、感性的气质，无人物",
    descriptionTemplate:
      "你像{plant}，情绪感知细密而柔软，能体会风声水意，也能把温柔给到身边的人。",
    poemThemes: ["感性", "柔情", "共鸣"]
  },
  {
    slug: "chrysanthemum",
    name: "菊",
    aliases: ["秋菊", "黄菊"],
    temperament: ["淡泊", "独立", "不争", "安静"],
    keywords: ["淡泊", "独立", "不争", "安静", "疏朗", "自得", "清淡", "自由"],
    imagePromptCore:
      "秋日淡彩水墨，一簇菊花于疏篱旁，色彩克制，空间通透，留白丰富，安静、淡泊、自足的东方审美，无人物",
    descriptionTemplate:
      "你像{plant}，不急着与世界争高下，更在意内心是否安稳，自有一种疏朗而坚定的自由。",
    poemThemes: ["淡泊", "自守", "安静"]
  },
  {
    slug: "peach-blossom",
    name: "桃花",
    aliases: ["桃夭", "桃英"],
    temperament: ["热情", "开朗", "浪漫", "有生命力"],
    keywords: ["热情", "开朗", "浪漫", "生命力", "明亮", "外向", "灵动", "赤诚"],
    imagePromptCore:
      "东方诗意淡彩风格，春日桃花盛放，枝影疏朗，粉白与浅金色调，轻盈空气感，留白构图，浪漫、明亮、鲜活，无人物",
    descriptionTemplate:
      "你像{plant}，情感饱满而明亮，愿意主动靠近世界，也让周围的人感到生机与暖意。",
    poemThemes: ["浪漫", "明朗", "生机"]
  }
];

export const PLANT_MAP = Object.fromEntries(PLANTS.map((plant) => [plant.slug, plant])) as Record<
  PlantProfile["slug"],
  PlantProfile
>;
