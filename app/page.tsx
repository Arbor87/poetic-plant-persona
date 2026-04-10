import Link from "next/link";

import { PageShell } from "@/components/ui/page-shell";

export default function HomePage() {
  return (
    <PageShell eyebrow="POETIC PERSONA" title="见字如面，见性如木" description="写下一段关于自己的性格描述。">
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="ink-card flex min-h-[420px] flex-col justify-between p-8 md:p-10">
          <div>
            <p className="font-serif text-2xl leading-10 text-ink">写下你的性格，看看你对应哪一株草木。</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/input"
              className="rounded-full bg-ink px-7 py-3 text-sm tracking-[0.2em] text-paper transition hover:bg-pine"
            >
              开始测试
            </Link>
          </div>
        </div>
        <div className="ink-card relative min-h-[420px] overflow-hidden p-8 md:p-10">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-bamboo/20 bg-bamboo/10 blur-2xl" />
          <div className="absolute bottom-10 left-6 h-32 w-32 rounded-full border border-pine/10 bg-pine/10 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="space-y-5">
              <p className="font-serif text-3xl text-ink">一页结果，四重回声</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-ink/65">
              {["竹", "兰", "梅", "莲", "松", "柳", "菊", "桃花"].map((item) => (
                <div key={item} className="rounded-full border border-ink/10 bg-white/40 px-4 py-3 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
