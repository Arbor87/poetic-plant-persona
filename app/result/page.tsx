import Link from "next/link";

import { ResultView } from "@/components/result-view";
import { PageShell } from "@/components/ui/page-shell";

export default async function ResultPage({
  searchParams
}: {
  searchParams: Promise<{ text?: string }>;
}) {
  const params = await searchParams;
  const text = params.text?.trim() ?? "";

  return (
    <PageShell
      eyebrow="YOUR PLANT"
      title="性格已落字，草木来回应"
      description="结果页展示草木图像、人格解析与严格限定在唐诗宋词中的一句诗。后续如接入真实图片模型，只需要替换服务层即可。"
    >
      <div className="mb-6">
        <Link href="/input" className="text-sm text-ink/60 transition hover:text-ink">
          返回输入页
        </Link>
      </div>
      {text ? (
        <ResultView text={text} />
      ) : (
        <div className="ink-card p-8">
          <p className="font-serif text-2xl text-ink">缺少性格描述</p>
          <p className="mt-4 text-sm text-ink/70">请先输入一段关于自己的描述，再生成结果。</p>
          <Link href="/input" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper">
            去输入
          </Link>
        </div>
      )}
    </PageShell>
  );
}
