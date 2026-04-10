import Link from "next/link";

const PLANT_GROUPS = [
  {
    title: "清雅自持",
    plants: ["竹", "兰", "梅", "梨花"],
    note: "安静、清醒、带一点边界感"
  },
  {
    title: "温柔细密",
    plants: ["莲", "柳", "海棠", "芭蕉"],
    note: "柔软、细腻、能感知情绪起伏"
  },
  {
    title: "明朗鲜活",
    plants: ["桃花", "杏花", "紫藤", "桂花"],
    note: "热情、灵动、靠近时有明显生机"
  },
  {
    title: "沉静疏朗",
    plants: ["松", "菊", "梧桐", "枫"],
    note: "稳重、成熟、保有自己的节奏"
  }
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-8 md:px-10 md:py-10">
      <div className="mist-orb left-[5%] top-[7%] h-44 w-44 bg-bamboo/14" />
      <div className="mist-orb right-[7%] top-[12%] h-56 w-56 bg-earth/12" />
      <div className="mist-orb bottom-[10%] left-[22%] h-48 w-48 bg-seal/8" />

      <div className="mx-auto max-w-7xl">
        <section className="paper-panel relative overflow-hidden px-7 py-7 md:px-12 md:py-12">
          <div className="absolute right-[-2.5rem] top-[-1.5rem] hidden font-serif text-[14rem] leading-none text-earth/[0.07] md:block">
            木
          </div>
          <div className="absolute left-[46%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-earth/20 to-transparent md:block" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/30 to-transparent" />

          <div className="grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:gap-12">
            <div className="relative z-10 flex min-h-[640px] flex-col justify-between">
              <div className="fade-rise">
                <div className="mb-6 flex items-center gap-4 text-earth/80">
                  <span className="h-px w-10 bg-earth/35" />
                  <p className="font-serif text-xs tracking-[0.5em]">POETIC PERSONA</p>
                </div>
                <h1 className="max-w-3xl font-serif text-5xl leading-[1.04] text-ink md:text-[5.8rem]">
                  见字如面，
                  <br />
                  见性如木
                </h1>
                <p className="mt-8 max-w-xl text-base leading-9 text-dusk/90">
                  写下一段关于自己的性格描述，让草木意象、唐诗宋词与人格气质在同一页里缓慢对上。
                </p>
                <p className="mt-5 max-w-lg text-sm leading-8 text-dusk/70">
                  一个人也可能同时接近几种草木气质，系统会从多种草木里选出与你当下最贴近的一种回应你。
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-end gap-5">
                <Link
                  href="/input"
                  className="rounded-full border border-seal/15 bg-seal px-9 py-3 text-sm tracking-[0.28em] text-paper transition hover:bg-[#673932]"
                >
                  开始测试
                </Link>
                <div className="text-sm leading-7 text-dusk/65">
                  <p>输入一段自然描述</p>
                  <p>返回草木、诗句与人格解析</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex min-h-[640px] flex-col justify-between">
              <div className="grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
                <div className="rounded-[30px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.28))] px-6 py-7 shadow-veil backdrop-blur-sm">
                  <p className="text-xs tracking-[0.36em] text-earth/72">题签</p>
                  <div className="mt-6 flex justify-center">
                    <p className="poem-vertical font-serif text-[1.75rem] leading-[2.45rem] tracking-[0.32em] text-ink/90 md:text-[2.05rem] md:leading-[2.75rem]">
                      草木有性，
                      <br />
                      诗句有声。
                    </p>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.44),rgba(255,255,255,0.24))] px-6 py-7 shadow-veil backdrop-blur-sm">
                  <p className="text-xs tracking-[0.36em] text-earth/72">草木谱</p>
                  <div className="mt-6 space-y-5">
                    {PLANT_GROUPS.map((group) => (
                      <div key={group.title} className="border-b border-earth/15 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-4">
                          <p className="font-serif text-xl text-ink">{group.title}</p>
                          <p className="text-[11px] tracking-[0.2em] text-earth/65">{group.note}</p>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2.5">
                          {group.plants.map((plant) => (
                            <span
                              key={plant}
                              className="rounded-full border border-earth/12 bg-white/62 px-3 py-2 text-sm text-dusk/90"
                            >
                              {plant}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[30px] border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.48),rgba(244,238,227,0.24))] px-6 py-6 shadow-veil backdrop-blur-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs tracking-[0.36em] text-earth/72">结果页结构</p>
                    <p className="mt-4 font-serif text-3xl leading-[1.35] text-ink">草木图、人格解析、诗句与出处</p>
                  </div>
                  <p className="max-w-sm text-sm leading-8 text-dusk/72">
                    最终像一张被写完的纸，不是普通测试题，而是一页被回应的气质画像。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
