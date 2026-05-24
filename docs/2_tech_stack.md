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

## 3. UI/UX Design System Guidelines (SUNYEOP WELLNESS BI 2.0)
글로벌 하이엔드 리트릿 타겟층에게 심리적 안정감과 프리미엄 가치를 전달하기 위해 공식 BI 2.0 가이드라인을 엄격히 적용한다.

### [Brand Color System]
- **Primary Color:** Deep Forest Ink Green (`#1A3322`) - 깊이감, 신뢰, 하이엔드 브랜드 선호 (배경 및 주요 영역)
- **Accent Color:** Champagne Gold (`#C5A880`) - 초 프리미엄, 권위, 핵심 심볼, CTA 버튼 활용
- **Background Color:** Oatmeal Sand (`#FBF9F4`) - 따뜻한 질감, 여백 활용, 젊고 깨끗한 인상 (메인 배경)
- **Text & UI Color:** Charcoal Dark Gray (`#222222`) - 눈의 피로도 감소, 디지털 최적화 UI/UX (기본 텍스트)

### [Typography System]
- **English Headings & Logo:** `Cormorant Garamond` (영문 대제목 및 로고)
- **Korean Headings & Logo:** `Noto Serif KR` (한글 제목 및 로고)
- **Body & UI:** `Pretendard` (중/소제목, 본문 및 일반 UI)
- **English UI:** `Montserrat` (현대적 가독성, 디지털 환경 최적화 영문)

### [Iconography & Logo System]
- **Logo:** 원형 배경과 샴페인 골드 색상의 '잎(Leaf)' 심볼 조합. 미니멀하고 젊고 깨끗한 인상 유지.
- **Icons:** 5대 핵심 아이콘(힐링 약차/찻잔, 명상/정신수양, 침향/연기, 디톡스/심신정화, 피부관리/광채)의 컨셉을 `lucide-react` 라이브러리를 활용하여 얇고 고급스러운 라인 아이콘으로 구현한다.

## 4. Security & Data Integrity (보안 필수 규칙)
- **절대 금지:** 클라이언트 사이드(브라우저)에서 `supabase-js`를 사용하여 직접 DB에 데이터를 Insert/Update 하지 마라.
- **필수 구현:** VIP 사전 예약 폼 등 모든 데이터 제출은 반드시 **Next.js Server Actions (`use server`)**를 사용하여 백엔드 안전지대에서 Supabase로 전송해야 한다.