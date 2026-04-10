"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ResultView } from "@/components/result-view";

export function ResultPageClient() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text")?.trim() ?? "";

  return text ? (
    <ResultView text={text} />
  ) : (
    <div className="ink-card p-8">
      <p className="font-serif text-2xl text-ink">缺少性格描述</p>
      <p className="mt-4 text-sm text-ink/70">请先输入一段关于自己的描述，再生成结果。</p>
      <Link href="/input" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper">
        去输入
      </Link>
    </div>
  );
}
