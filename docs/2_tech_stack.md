# 기술 스택 및 아키텍처 가이드라인

## 1. Core Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript (Strict Mode)
- Styling: TailwindCSS (Utility-first)
- UI Components: shadcn/ui (Radix Primitives 기반)
- Backend/DB: Supabase (via Server Actions)

## 2. Directory Structure & Architecture (확장성 고려)
- **필수 규칙:** 모든 애플리케이션 소스 코드는 반드시 `src/` 디렉토리 하위에 배치해야 한다.
- Pages and routing: `src/app/`
- Reusable UI Components: `src/components/ui/`
- Database & Server logic: `src/lib/` 또는 Next.js Server Actions (`use server`)

## 3. UI/UX Design System Guidelines (Luxury Wellness)
글로벌 하이엔드 리트릿 타겟층에게 심리적 안정감과 프리미엄 가치를 전달하기 위해 'Luxury Earth Tone'을 엄격히 적용한다.
- **Primary Color:** Deep Olive Green (`#2C3E1A`) - 선(Zen)과 대자연을 상징
- **Secondary Color:** Muted Sage (`#8FBC8F`) - 테두리 및 부드러운 배경 요소
- **Background Color:** Warm Oatmeal Ivory (`#F9F6F0`) - 눈의 피로를 막고 고급스러운 질감 제공
- **Accent Color:** Champagne Gold (`#C5A880`) - CTA(Call-to-Action) 버튼 및 VIP 강조 포인트

## 4. Security & Data Integrity (보안 필수 규칙)
- **절대 금지:** 클라이언트 사이드(브라우저)에서 `supabase-js`를 사용하여 직접 DB에 데이터를 Insert/Update 하지 마라.
- **필수 구현:** VIP 사전 예약 폼 등 모든 데이터 제출은 반드시 **Next.js Server Actions (`use server`)**를 사용하여 백엔드 안전지대에서 Supabase로 전송해야 한다.