# 见性如木

一个可部署为公网网页的 MVP：用户输入性格描述，系统解析人格标签，稳定映射到草木意象，匹配仅来自唐诗或宋词的诗句，并生成草木主题图片。

## 1. 项目整体目录结构

```text
.
├─ app/
│  ├─ api/
│  │  ├─ analyze/route.ts
│  │  ├─ generate-image/route.ts
│  │  ├─ match-poem/route.ts
│  │  ├─ plant-image/[plant]/route.ts
│  │  └─ result/route.ts
│  ├─ input/page.tsx
│  ├─ result/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ personality-form.tsx
│  ├─ result-view.tsx
│  └─ ui/
│     └─ page-shell.tsx
├─ lib/
│  ├─ data/
│  │  ├─ plants.ts
│  │  └─ poems.ts
│  ├─ services/
│  │  ├─ image.ts
│  │  ├─ personality.ts
│  │  ├─ poem.ts
│  │  └─ result.ts
│  ├─ prompts/
│  │  └─ analysis.ts
│  └─ types.ts
├─ package.json
├─ tailwind.config.ts
└─ tsconfig.json
```

## 2. 前后端模块拆分

- 前端页面层：`app/page.tsx`、`app/input/page.tsx`、`app/result/page.tsx`
- 前端组件层：表单、结果展示、通用页面容器
- API 层：负责接收输入、组织服务调用、返回结构化结果
- 业务服务层：人格分析、草木映射、诗句匹配、图片生成
- 数据层：固定草木映射表、本地唐诗宋词诗句库
- 提示词层：统一维护大模型分析 prompt 与图片 prompt 模板

## 3. 数据结构设计

见 [lib/types.ts](/E:/zzx/lib/types.ts)。

核心类型：

- `PersonalityTag`: 人格标签与权重
- `PlantProfile`: 草木画像、关键词、视觉 prompt 模板
- `PoemEntry`: 诗句库结构，严格包含 `dynasty`
- `AnalysisResult`: AI/规则分析结果
- `ResultPayload`: 最终结果聚合结构

## 4. 性格分析到草木映射的实现方案

流程分两层，保证稳定与可控：

1. 文本理解层
   - 优先使用大模型从描述中抽取 `personalityTags`、`personalityType`、`summary`
   - 若没有配置大模型密钥，则回退到本地关键词规则抽取

2. 稳定映射层
   - 将标签与每个草木的 `keywords` 做打分
   - 同义词统一归并后累计分数
   - 分数最高的草木为最终结果
   - 如分数接近，使用预设优先级和主标签进行 tie-break

这样可以让“AI 负责理解，规则负责定类”，避免结果漂移。

## 5. 诗句库的数据结构设计

见 [lib/data/poems.ts](/E:/zzx/lib/data/poems.ts)。

字段：

- `id`
- `plant`
- `emotionTags`
- `line`
- `author`
- `title`
- `dynasty`

约束：

- `dynasty` 只允许 `"唐"` 或 `"宋"`
- 匹配时先按 `plant` 过滤，再按 `emotionTags` 与人格标签重叠度排序

## 6. API 设计

### `POST /api/analyze`

请求：

```json
{
  "text": "我比较安静，慢热，不太擅长表达，但认定的事会坚持很久。"
}
```

### `POST /api/generate-image`

请求：

```json
{
  "plantSlug": "bamboo",
  "tags": ["安静", "坚韧"]
}
```

### `POST /api/match-poem`

请求：

```json
{
  "plantSlug": "orchid",
  "tags": ["内敛", "安静", "细腻"]
}
```

### `POST /api/result`

请求：

```json
{
  "text": "用户输入的性格描述"
}
```

说明：

- MVP 前端只调用聚合接口即可跑通完整链路
- 其余接口保留给后续拆分和调试

## 7. 页面结构

### 首页

- 标题：“见字如面，见性如木”
- 副标题：引导文案
- 进入按钮：跳转输入页
- 视觉：大留白、水墨底纹、东方极简

### 输入页

- 多行输入框
- 示例描述提示
- 提交按钮
- 加载态文案与动效

### 结果页

- 草木图像主视觉
- 草木名称与人格解析
- 唐诗宋词诗句卡片
- 重新生成按钮
- 保存结果按钮占位

## 8. 第一版 MVP 开发方案

1. 用 Next.js App Router 搭单仓项目
2. 用本地规则完成“可控人格映射”
3. 用本地数据维护草木与唐诗宋词诗句
4. 用本地 SVG 图片服务完成无外部依赖的草木生成
5. 预留真实模型接口，后续通过环境变量切换
6. 优先保证完整闭环：输入 -> 分析 -> 映射 -> 配图 -> 匹配诗句 -> 展示

## 9. 当前代码骨架状态

当前仓库已包含：

- 可运行的 Next.js 项目骨架
- 3 个页面
- 4 个 API 接口 + 1 个本地图像接口
- 草木映射与诗句库
- 可回退的分析与配图服务

## 运行方式

```bash
npm install
npm run dev
```

可选环境变量：

```bash
OPENAI_API_KEY=your_key
OPENAI_IMAGE_MODEL=gpt-image-1
OPENAI_TEXT_MODEL=gpt-4.1-mini
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

部署到公网后，将首页 URL 生成二维码即可实现“扫码跳转网页”。
