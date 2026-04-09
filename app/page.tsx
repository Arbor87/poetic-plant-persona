import Link from "next/link";

import { PageShell } from "@/components/ui/page-shell";

export default function HomePage() {
  return (
    <PageShell
      eyebrow="POETIC PERSONA"
      title="见字如面，见性如木"
      description="写下一段关于自己的性格描述。系统会先理解你的气质，再把它映照成一株草木，并为你挑出一联只属于唐诗或宋词的回声。"
    >
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="ink-card flex min-h-[420px] flex-col justify-between p-8 md:p-10">
          <div>
            <p className="font-serif text-2xl leading-10 text-ink">写下你的性格，看看你对应哪一株草木。</p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-ink/75">
              <p>不是测试题，而是一场气质映照。</p>
              <p>AI 先理解，再按固定规则稳定映射草木，最后从唐诗宋词中取一句与你相照的诗行。</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/input"
              className="rounded-full bg-ink px-7 py-3 text-sm tracking-[0.2em] text-paper transition hover:bg-pine"
            >
              开始测试
            </Link>
            <p className="text-xs leading-6 text-ink/55">部署后将首页公网 URL 生成二维码，即可扫码进入。</p>
          </div>
        </div>
        <div className="ink-card relative min-h-[420px] overflow-hidden p-8 md:p-10">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-bamboo/20 bg-bamboo/10 blur-2xl" />
          <div className="absolute bottom-10 left-6 h-32 w-32 rounded-full border border-pine/10 bg-pine/10 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="space-y-5">
              <p className="font-serif text-3xl text-ink">一页结果，四重回声</p>
              <ul className="space-y-3 text-sm leading-7 text-ink/75">
                <li>草木意象图片</li>
                <li>草木名称与人格解析</li>
                <li>严格来自唐诗或宋词的诗句</li>
                <li>国风留白、适合移动端展示</li>
              </ul>
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
