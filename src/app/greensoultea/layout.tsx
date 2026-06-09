// src/app/greensoultea/layout.tsx
// 독립 라우트: [locale] 다국어 체계와 분리된 임시 내부 공유 페이지
import type { Metadata } from "next";
import "../globals.css"; // ★ 핵심: Tailwind v4 + 전역 CSS 로드 (없으면 모든 스타일 깨짐)

// 초록영혼차 페이지 전용 메타데이터
export const metadata: Metadata = {
  title: "그린 소울 티 (Green Soul Tea) - 프리미엄 녹차 농축액",
  description: "선엽스님의 시그니처 약차 라인업, 초록영혼차 스마트스토어 기획안",
};

export default function GreenSoulTeaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}