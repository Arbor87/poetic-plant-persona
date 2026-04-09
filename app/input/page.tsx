import Link from "next/link";

import { PersonalityForm } from "@/components/personality-form";
import { PageShell } from "@/components/ui/page-shell";

export default function InputPage() {
  return (
    <PageShell
      eyebrow="WRITE YOURSELF"
      title="写下一段性格，自有草木回应"
      description="这一页只需要真诚。描述越自然，结果越像你。系统会从语义中抽取人格标签，再映射到固定草木类型，避免结果漂移。"
    >
      <div className="mb-6">
        <Link href="/" className="text-sm text-ink/60 transition hover:text-ink">
          返回首页
        </Link>
      </div>
      <PersonalityForm />
    </PageShell>
  );
}
