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
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-serif text-sm tracking-[0.35em] text-bamboo/80">{eyebrow}</p>
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/75 md:text-base">{description}</p>
        </div>
        {children}
      </div>
    </main>
  );
}
