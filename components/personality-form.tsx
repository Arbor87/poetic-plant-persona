"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EXAMPLE = "我比较安静，慢热，不太擅长表达，但认定的事会坚持很久。";

export function PersonalityForm() {
  const router = useRouter();
  const [text, setText] = useState(EXAMPLE);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!text.trim()) {
      return;
    }

    setLoading(true);
    router.push(`/result?text=${encodeURIComponent(text.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="ink-card mx-auto max-w-3xl p-6 md:p-8">
      <label htmlFor="personality" className="block font-serif text-2xl text-ink">
        请输入你对自己性格的描述
      </label>
      <p className="mt-3 text-sm leading-7 text-ink/65">可以写安静、热烈、理性、敏感、坚持、慢热、独立等，也可以直接写一段完整描述。</p>
      <textarea
        id="personality"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={EXAMPLE}
        className="mt-6 min-h-[220px] w-full resize-none rounded-[28px] border border-ink/10 bg-white/50 p-5 text-base leading-8 text-ink outline-none placeholder:text-ink/30 focus:border-bamboo/40"
      />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setText(EXAMPLE)}
          className="rounded-full border border-ink/10 px-5 py-3 text-sm text-ink/75 transition hover:border-bamboo/30 hover:bg-white/60"
        >
          使用示例
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-ink px-7 py-3 text-sm tracking-[0.18em] text-paper transition hover:bg-pine disabled:cursor-not-allowed disabled:opacity-75"
        >
          {loading ? "生成中..." : "开始生成"}
        </button>
      </div>
      {loading ? (
        <div className="mt-8 flex items-center gap-2 text-sm text-ink/60">
          <span className="loading-dot h-2 w-2 rounded-full bg-bamboo" />
          <span className="loading-dot h-2 w-2 rounded-full bg-bamboo" />
          <span className="loading-dot h-2 w-2 rounded-full bg-bamboo" />
          <span className="ml-2">正在理解你的气质，并寻找对应草木与诗句。</span>
        </div>
      ) : null}
    </form>
  );
}
