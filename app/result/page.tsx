import Link from "next/link";
import { Suspense } from "react";

import { ResultPageClient } from "@/components/result-page-client";
import { PageShell } from "@/components/ui/page-shell";

export default function ResultPage() {
  return (
    <PageShell eyebrow="YOUR PLANT" title="性格已落字，草木来回应" description="">
      <div className="mb-6">
        <Link href="/input" className="text-sm text-ink/60 transition hover:text-ink">
          返回输入页
        </Link>
      </div>
      <Suspense
        fallback={
          <div className="ink-card flex min-h-[420px] items-center justify-center p-8">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="loading-dot h-2.5 w-2.5 rounded-full bg-bamboo" />
                <span className="loading-dot h-2.5 w-2.5 rounded-full bg-bamboo" />
                <span className="loading-dot h-2.5 w-2.5 rounded-full bg-bamboo" />
              </div>
              <p className="font-serif text-2xl text-ink">正在整理你的草木结果</p>
            </div>
          </div>
        }
      >
        <ResultPageClient />
      </Suspense>
    </PageShell>
  );
}
