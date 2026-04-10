export function PageShell({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10 md:py-12">
      <div className="mist-orb left-[6%] top-[8%] h-40 w-40 bg-bamboo/15" />
      <div className="mist-orb right-[7%] top-[16%] h-48 w-48 bg-earth/12" />
      <div className="mist-orb bottom-[10%] left-[20%] h-44 w-44 bg-seal/8" />
      <div className="mx-auto max-w-6xl">
        <div className="fade-rise mb-12 max-w-3xl md:mb-14">
          <div className="mb-5 flex items-center gap-4 text-earth/80">
            <span className="h-px w-10 bg-earth/35" />
            <p className="font-serif text-xs tracking-[0.45em]">{eyebrow}</p>
          </div>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] text-ink md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-dusk/85 md:text-base">{description}</p>
        </div>
        {children}
      </div>
    </main>
  );
}
