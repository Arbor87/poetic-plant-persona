import Link from "next/link";

import { PersonalityForm } from "@/components/personality-form";
import { PageShell } from "@/components/ui/page-shell";

export default function InputPage() {
  return (
    <PageShell eyebrow="WRITE YOURSELF" title="写下一段性格，自有草木回应" description="描述越自然，结果越像你。">
      <div className="mb-6">
        <Link href="/" className="text-sm text-ink/60 transition hover:text-ink">
          返回首页
        </Link>
      </div>
      <PersonalityForm />
    </PageShell>
  );
}
