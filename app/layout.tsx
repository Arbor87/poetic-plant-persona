import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "见字如面，见性如木",
  description: "根据你的性格描述，生成草木意象与唐诗宋词诗句。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
