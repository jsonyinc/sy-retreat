# SUNYEOP WELLNESS - Technical & Architectural Rules

## 1. Core Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** TailwindCSS v4 (Utility-first, `@theme` 블록 사용)
- **UI Components:** shadcn/ui (Radix Primitives 기반)
- **Backend/DB:** Supabase (via Server Actions)
- **i18n (다국어):** `next-intl` 또는 Next.js App Router 공식 다국어 딕셔너리 패턴 사용

## 2. Directory Structure & Architecture (확장성 및 다국어 고려)
- **필수 규칙:** 모든 애플리케이션 소스 코드는 반드시 `src/` 디렉토리 하위에 배치한다.
- **다국어 라우팅:** `src/app/[locale]/` 동적 라우팅 구조를 사용하여 한국어(`ko`), 영어(`en`), 베트남어(`vi`)를 지원해야 한다.
- **컴포넌트 분리:** 재사용 가능한 UI는 `src/components/ui/`에, 비즈니스 로직이 포함된 도메인 컴포넌트는 `src/components/domain/`에 배치한다.
- **서버 로직:** DB 통신 등 서버 로직은 `src/lib/` 또는 Next.js Server Actions (`use server`)를 사용한다.

## 3. UI/UX Design System Guidelines (SUNYEOP WELLNESS BI 2.0)
글로벌 하이엔드 리트릿 타겟층에게 심리적 안정감과 프리미엄 가치를 전달하기 위해 공식 BI 2.0 가이드라인을 엄격히 적용한다.
- **Primary Color:** Deep Forest Ink Green (`#1A3322`) - 깊이감, 신뢰, 하이엔드 브랜드 선호
- **Accent Color:** Champagne Gold (`#C5A880`) - 초 프리미엄, 권위, 핵심 심볼, CTA 버튼
- **Background Color:** Oatmeal Sand (`#FBF9F4`) - 따뜻한 질감, 여백 활용, 젊고 깨끗한 인상
- **Text & UI Color:** Charcoal Dark Gray (`#222222`) - 눈의 피로도 감소, 디지털 최적화
- **Typography:** 영문 제목/로고(`Cormorant Garamond`), 한글 제목/로고(`Noto Serif KR`), 본문/UI(`Pretendard`), 영문 UI(`Montserrat`).

## 4. Security & Data Integrity (보안 필수 규칙)
- **절대 금지:** 클라이언트 사이드(브라우저)에서 `supabase-js`를 사용하여 직접 DB에 데이터를 Insert/Update 하지 마라.
- **필수 구현:** VIP 사전 예약 폼 등 모든 데이터 제출은 반드시 **Next.js Server Actions (`use server`)**를 사용하여 백엔드 안전지대에서 Supabase로 전송해야 한다.

## 5. AI Coding Guidelines (Risk Mitigation)
- **묻고 행동하기:** 기존 핵심 로직이나 폴더 구조(특히 다국어 라우팅)를 변경할 경우, 임의로 덮어쓰지 말고 사용자에게 먼저 설명 후 승인을 받아라.
- **점진적 개발:** 한 번에 5개 이상의 파일을 수정하지 마라.
- **에러 핸들링:** 에러 발생 시 1) 원인 분석, 2) 2가지 대안 제시, 3) 선택된 대안으로 수정하는 프로세스를 거쳐라.