"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ResultPayload } from "@/lib/types";

function downloadResult(data: ResultPayload) {
  const content = [
    `输入描述：${data.input}`,
    `草木：${data.analysis.plant.name}`,
    `人格类型：${data.analysis.personalityType}`,
    `人格解析：${data.analysis.summary}`,
    `诗句：${data.poem.line}`,
    `出处：${data.poem.dynasty}·${data.poem.author}《${data.poem.title}》`
  ].join("\n\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `见性如木-${data.analysis.plant.name}.txt`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function ResultView({ text }: { text: string }) {
  const [data, setData] = useState<ResultPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const response = await fetch("/api/result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });

        if (!response.ok) {
          throw new Error("生成失败");
        }

        const payload = (await response.json()) as ResultPayload;
        if (!cancelled) {
          setData(payload);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "生成失败");
        }
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [text]);

  if (error) {
    return (
      <div className="ink-card p-8">
        <p className="font-serif text-2xl text-ink">未能生成结果</p>
        <p className="mt-4 text-sm text-ink/70">{error}</p>
        <Link href="/input" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-paper">
          返回重试
        </Link>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="ink-card flex min-h-[420px] items-center justify-center p-8">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="loading-dot h-2.5 w-2.5 rounded-full bg-bamboo" />
            <span className="loading-dot h-2.5 w-2.5 rounded-full bg-bamboo" />
            <span className="loading-dot h-2.5 w-2.5 rounded-full bg-bamboo" />
          </div>
          <p className="font-serif text-2xl text-ink">正在为你寻找一株相合的草木</p>
        </div>
      </div>
    );
  }

  const {
    analysis: { plant, personalityType, summary, personalityTags },
    poem,
    image
  } = data;

  return (
    <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
      <div className="ink-card overflow-hidden">
        <div className="relative aspect-[4/5] w-full">
          <img src={image.imageUrl} alt={plant.name} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="space-y-6">
        <section className="ink-card p-7 md:p-8">
          <p className="text-xs tracking-[0.35em] text-bamboo/80">{plant.slug.toUpperCase()}</p>
          <div className="mt-3 flex items-end gap-4">
            <h2 className="font-serif text-5xl text-ink">{plant.name}</h2>
            <p className="pb-1 text-sm text-ink/55">{personalityType}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {personalityTags.map((tag) => (
              <span key={tag.name} className="rounded-full border border-bamboo/20 bg-bamboo/10 px-3 py-1 text-xs text-ink/75">
                {tag.name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-8 text-ink/75">{summary}</p>
        </section>

        <section className="ink-card grid min-h-[240px] grid-cols-[120px_1fr] gap-4 p-7 md:p-8">
          <div className="flex justify-center">
            <p className="poem-vertical font-serif text-2xl leading-10 tracking-[0.25em] text-ink">{poem.line}</p>
          </div>
          <div className="flex flex-col justify-end">
            <div className="border-t border-ink/8 pt-5 text-sm leading-7 text-ink/65">
              <p>
                {poem.dynasty} · {poem.author}
              </p>
              <p>《{poem.title}》</p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/input" className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition hover:bg-pine">
            重新生成
          </Link>
          <button
            type="button"
            onClick={() => downloadResult(data)}
            className="rounded-full border border-ink/10 bg-white/50 px-6 py-3 text-sm text-ink/70 transition hover:border-bamboo/30"
          >
            保存结果
          </button>
        </div>
      </div>
    </div>
  );
}
