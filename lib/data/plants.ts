import { PlantProfile } from "@/lib/types";

export const PLANTS: PlantProfile[] = [
  {
    slug: "bamboo",
    name: "竹",
    aliases: ["修竹", "翠竹"],
    category: "grass",
    temperament: ["坚韧", "克制", "自律", "清醒", "外柔内刚"],
    coreKeywords: ["坚韧", "克制", "清醒"],
    keywords: ["坚韧", "克制", "自律", "清醒", "坚持", "理性", "稳重", "冷静"],
    avoidTags: ["热烈", "高调", "黏人"],
    poemThemes: ["坚守", "清雅", "风骨"],
    season: ["四时"],
    imagePromptCore:
      "东方诗意风格，一丛修竹立于微风中，晨雾轻笼，水墨与工笔融合，留白构图，淡青与墨绿色调，宋画审美，宁静、坚韧、克制的气质，无人物，高级感",
    descriptionTemplate:
      "你像{plant}，外在克制安静，内里却有笔直而稳定的力量，越是沉默，越显风骨。"
  },
  {
    slug: "orchid",
    name: "兰",
    aliases: ["幽兰", "兰草"],
    category: "flower",
    temperament: ["内敛", "温和", "细腻", "安静", "清雅"],
    coreKeywords: ["内敛", "细腻", "温和"],
    keywords: ["内敛", "温和", "细腻", "安静", "慢热", "含蓄", "敏感", "清雅"],
    avoidTags: ["高调", "热烈", "张扬"],
    poemThemes: ["幽静", "温柔", "清芬"],
    season: ["春"],
    imagePromptCore:
      "国风留白构图，一枝幽兰静立于山石旁，淡墨与浅青色层叠，雾气轻绕，宋画式审美，安静、清雅、细腻的气质，无人物，高级感",
    descriptionTemplate:
      "你像{plant}，不以喧闹示人，却在细微处自有香气，温柔而有分寸，安静而有光。"
  },
  {
    slug: "plum",
    name: "梅",
    aliases: ["寒梅", "梅花"],
    category: "flower",
    temperament: ["坚强", "抗压", "清冷", "孤傲"],
    coreKeywords: ["独立", "坚韧", "清冷"],
    keywords: ["坚强", "抗压", "清冷", "孤傲", "独立", "倔强", "自持", "锋利"],
    avoidTags: ["热烈", "依赖", "黏人"],
    poemThemes: ["坚守", "清冷", "孤高"],
    season: ["冬", "早春"],
    imagePromptCore:
      "淡彩水墨风格，寒枝上数点梅花，雪意未尽，构图疏朗，白与浅绯对比，东方高级审美，清冷、坚强、孤高的气质，无人物",
    descriptionTemplate:
      "你像{plant}，不依赖热闹来证明自己，越在寒意之中，越能显出清醒与力量。"
  },
  {
    slug: "lotus",
    name: "莲",
    aliases: ["荷", "芙蕖"],
    category: "flower",
    temperament: ["纯净", "平和", "温柔", "有边界感"],
    coreKeywords: ["纯净", "平和", "边界感"],
    keywords: ["纯净", "平和", "温柔", "边界感", "包容", "柔和", "安定", "克己", "明净"],
    avoidTags: ["张扬", "锋利", "躁动"],
    poemThemes: ["纯净", "平和", "自守"],
    season: ["夏"],
    imagePromptCore:
      "宋画审美的莲叶与淡粉荷花，水面平静，薄雾留白，水墨与淡彩融合，净而不冷，柔和而有边界，无人物，高级感",
    descriptionTemplate:
      "你像{plant}，温柔并不意味着失去边界，你的平和，是清楚知道自己该靠近什么、远离什么。"
  },
  {
    slug: "pine",
    name: "松",
    aliases: ["青松", "古松"],
    category: "tree",
    temperament: ["稳重", "可靠", "沉静", "有担当"],
    coreKeywords: ["稳重", "可靠", "担当"],
    keywords: ["稳重", "可靠", "沉静", "担当", "耐心", "责任感", "厚重", "踏实"],
    avoidTags: ["轻浮", "摇摆", "情绪化"],
    poemThemes: ["担当", "沉静", "坚守"],
    season: ["四时"],
    imagePromptCore:
      "古松立于山石之间，远山淡墨，风过松针，画面开阔而宁静，浓淡墨色层次分明，留白充足，无人物，东方高级质感",
    descriptionTemplate:
      "你像{plant}，看似不动声色，却总能在关键时刻给人依靠，安静之下，是极强的稳定感。"
  },
  {
    slug: "willow",
    name: "柳",
    aliases: ["垂柳", "杨柳"],
    category: "tree",
    temperament: ["柔软", "感性", "细腻", "共情力强"],
    coreKeywords: ["共情", "柔韧", "感性"],
    keywords: ["柔软", "感性", "细腻", "共情", "敏感", "体贴", "柔和", "情绪感知", "柔韧"],
    avoidTags: ["强硬", "锋利", "高压"],
    poemThemes: ["柔情", "共鸣", "轻盈"],
    season: ["春"],
    imagePromptCore:
      "东方淡彩风格，临水垂柳随风轻拂，水面微波，浅绿与烟灰色调，留白构图，柔软、细腻、感性的气质，无人物",
    descriptionTemplate:
      "你像{plant}，情绪感知细密而柔软，能体会风声水意，也能把温柔给到身边的人。"
  },
  {
    slug: "chrysanthemum",
    name: "菊",
    aliases: ["秋菊", "黄菊"],
    category: "flower",
    temperament: ["淡泊", "独立", "不争", "安静"],
    coreKeywords: ["淡泊", "不争", "自由"],
    keywords: ["淡泊", "独立", "不争", "安静", "疏朗", "自得", "清淡", "自由"],
    avoidTags: ["热烈", "虚荣", "高调"],
    poemThemes: ["淡泊", "自守", "疏朗"],
    season: ["秋"],
    imagePromptCore:
      "秋日淡彩水墨，一簇菊花于疏篱旁，色彩克制，空间通透，留白丰富，安静、淡泊、自足的东方审美，无人物",
    descriptionTemplate:
      "你像{plant}，不急着与世界争高下，更在意内心是否安稳，自有一种疏朗而坚定的自由。"
  },
  {
    slug: "peach-blossom",
    name: "桃花",
    aliases: ["桃夭", "桃英"],
    category: "flower",
    temperament: ["热情", "开朗", "浪漫", "有生命力"],
    coreKeywords: ["热情", "浪漫", "开朗"],
    keywords: ["热情", "开朗", "浪漫", "生命力", "明亮", "外向", "灵动", "赤诚"],
    avoidTags: ["冷感", "疏离", "淡泊"],
    poemThemes: ["浪漫", "明朗", "生机"],
    season: ["春"],
    imagePromptCore:
      "东方诗意淡彩风格，春日桃花盛放，枝影疏朗，粉白与浅金色调，轻盈空气感，留白构图，浪漫、明亮、鲜活，无人物",
    descriptionTemplate:
      "你像{plant}，情感饱满而明亮，愿意主动靠近世界，也让周围的人感到生机与暖意。"
  },
  {
    slug: "osmanthus",
    name: "桂花",
    aliases: ["木樨", "丹桂"],
    category: "flower",
    temperament: ["温润", "克制", "含蓄", "耐看"],
    coreKeywords: ["温润", "克制", "耐看"],
    keywords: ["温润", "克制", "含蓄", "安静", "真诚", "耐看", "低调", "细腻"],
    avoidTags: ["浮夸", "张扬", "热烈"],
    poemThemes: ["暗香", "温润", "含蓄"],
    season: ["秋"],
    imagePromptCore:
      "东方淡彩风格，枝头桂花细密点金，秋夜微凉，月色如水，香气似有若无，留白构图，温润、含蓄、安静的气质，无人物",
    descriptionTemplate:
      "你像{plant}，并不急着被看见，却总在靠近之后留下长久回味，克制里藏着温润的香气。"
  },
  {
    slug: "crabapple",
    name: "海棠",
    aliases: ["海棠花", "西府海棠"],
    category: "flower",
    temperament: ["柔美", "敏感", "浪漫", "细腻"],
    coreKeywords: ["浪漫", "细腻", "敏感"],
    keywords: ["柔美", "敏感", "浪漫", "细腻", "温柔", "梦感", "含情", "柔软"],
    avoidTags: ["冷硬", "克制过度", "粗粝"],
    poemThemes: ["春意", "柔美", "怜惜"],
    season: ["春"],
    imagePromptCore:
      "东方诗意淡彩风格，海棠花开映着微雨，花色浅绯，枝影轻柔，画面朦胧而有春意，留白构图，柔美、敏感、细腻，无人物",
    descriptionTemplate:
      "你像{plant}，情绪有柔软的波光，细腻而有温度，轻轻一眼，就能看见春意与心事。"
  },
  {
    slug: "apricot-blossom",
    name: "杏花",
    aliases: ["杏英", "杏花雨"],
    category: "flower",
    temperament: ["明快", "温柔", "灵动", "有春意"],
    coreKeywords: ["灵动", "温柔", "明亮"],
    keywords: ["明快", "温柔", "灵动", "开朗", "松弛", "明亮", "自然", "清新"],
    avoidTags: ["压抑", "冷峻", "沉重"],
    poemThemes: ["春雨", "轻盈", "明快"],
    season: ["春"],
    imagePromptCore:
      "江南春雨中的杏花，花色清浅，空气湿润，风过轻软，水墨与淡粉色融合，轻盈、明快、温柔的气质，无人物，留白",
    descriptionTemplate:
      "你像{plant}，有一种不费力的轻盈，靠近时不喧闹，却能让人感到春风拂面的舒服。"
  },
  {
    slug: "pear-blossom",
    name: "梨花",
    aliases: ["梨英", "梨雪"],
    category: "flower",
    temperament: ["明净", "安静", "清冷", "疏淡"],
    coreKeywords: ["明净", "安静", "清冷"],
    keywords: ["明净", "安静", "清冷", "疏淡", "纯净", "自持", "克制", "清醒"],
    avoidTags: ["热烈", "艳丽", "张扬"],
    poemThemes: ["月色", "清凉", "疏淡"],
    season: ["春"],
    imagePromptCore:
      "月色下的梨花疏影，白瓣如雪，色调极淡，空气清凉通透，留白充足，清冷、明净、疏淡的东方气质，无人物",
    descriptionTemplate:
      "你像{plant}，明净而不冷漠，疏淡却不疏离，安静地站在那里，就有一种自持的清光。"
  },
  {
    slug: "parasol-tree",
    name: "梧桐",
    aliases: ["青桐", "梧叶"],
    category: "tree",
    temperament: ["独立", "清醒", "有距离感", "沉静"],
    coreKeywords: ["独立", "清醒", "疏离"],
    keywords: ["独立", "清醒", "疏离", "有距离感", "沉静", "边界感", "克制", "理性"],
    avoidTags: ["黏人", "喧闹", "热烈"],
    poemThemes: ["秋声", "清醒", "寂静"],
    season: ["秋"],
    imagePromptCore:
      "东方诗意风格，梧桐叶影落在微雨中，色调偏黛青与褐金，空间疏朗，带一点秋声与距离感，留白构图，无人物",
    descriptionTemplate:
      "你像{plant}，有清楚的边界，也有安静的重量，不轻易靠近谁，却始终知道自己站在哪里。"
  },
  {
    slug: "banana-leaf",
    name: "芭蕉",
    aliases: ["蕉叶", "芭蕉叶"],
    category: "leaf",
    temperament: ["敏感", "柔软", "有情绪感", "细密"],
    coreKeywords: ["敏感", "细腻", "感性"],
    keywords: ["敏感", "柔软", "有情绪感", "细密", "感性", "安静", "共情", "雨声"],
    avoidTags: ["迟钝", "粗砺", "高调"],
    poemThemes: ["夜雨", "细愁", "柔软"],
    season: ["夏", "秋"],
    imagePromptCore:
      "雨中的芭蕉叶宽大舒展，水珠细密，墨绿与黛色交织，画面有夜雨与窗前气息，柔软、敏感、细密，无人物，留白",
    descriptionTemplate:
      "你像{plant}，对情绪和气息都感受深刻，看似安静，内在却有层层回响与细密的感知。"
  },
  {
    slug: "wisteria",
    name: "紫藤",
    aliases: ["藤花", "紫藤花"],
    category: "vine",
    temperament: ["浪漫", "灵动", "温柔", "有延展感"],
    coreKeywords: ["浪漫", "灵动", "温柔"],
    keywords: ["浪漫", "灵动", "温柔", "自由", "梦感", "柔和", "流动", "延展"],
    avoidTags: ["僵硬", "冷峻", "压抑"],
    poemThemes: ["花瀑", "流动", "春意"],
    season: ["春"],
    imagePromptCore:
      "春日紫藤垂落成瀑，紫与灰青交叠，空气轻柔，构图有向下流动的韵律，浪漫、灵动、温柔，无人物，留白",
    descriptionTemplate:
      "你像{plant}，情感的流动感很强，柔和却不单薄，靠近时常带着一种轻轻垂落的浪漫。"
  },
  {
    slug: "maple",
    name: "枫",
    aliases: ["枫叶", "丹枫"],
    category: "tree",
    temperament: ["热烈", "成熟", "清醒", "有层次"],
    coreKeywords: ["热烈", "清醒", "成熟"],
    keywords: ["热烈", "清醒", "成熟", "明亮", "有层次", "独立", "坚韧", "审美感"],
    avoidTags: ["寡淡", "模糊", "优柔"],
    poemThemes: ["秋色", "热烈", "层次"],
    season: ["秋"],
    imagePromptCore:
      "秋日枫叶层层染红，远山冷灰，画面有成熟与清醒的明艳感，色彩克制而不沉闷，东方诗意审美，无人物，留白",
    descriptionTemplate:
      "你像{plant}，情感与判断都有层次，明亮但不轻浮，热烈中带着成熟与清醒。"
  }
];

export const PLANT_MAP = Object.fromEntries(PLANTS.map((plant) => [plant.slug, plant])) as Record<
  PlantProfile["slug"],
  PlantProfile
>;
