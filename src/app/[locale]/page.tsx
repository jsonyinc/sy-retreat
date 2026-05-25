// src/app/[locale]/page.tsx

// [추가됨] 다국어 정적 렌더링(SSG) 최적화를 위한 next-intl 서버 함수
import { setRequestLocale } from 'next-intl/server';

// ── 기존 컴포넌트 Import 완벽 유지 ──
import { TopHeader } from "@/components/domain/top-header"
import { HeroSection } from "@/components/domain/hero-section"
import { MasterProfileSection } from "@/components/domain/master-profile-section"
import { InfinityHealingSection } from "@/components/domain/infinity-healing-section"
import { ZoneCardsSection } from "@/components/domain/zone-cards-section"
import { WellnessProgramSection } from "@/components/domain/wellness-program-section"
import { PartnershipSection } from "@/components/domain/partnership-section"
import { BusinessInquiryForm } from "@/components/domain/BusinessInquiryForm" 
import { Footer } from "@/components/domain/footer"

// [업데이트됨] Next.js 15 규격에 맞춘 비동기 params 처리 및 locale 주입
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // 1. 접속한 언어(ko, en, vi) 파악
  const { locale } = await params;
  
  // 2. 정적 렌더링(Static Rendering) 활성화 -> 로딩 속도 극대화
  setRequestLocale(locale);

  return (
    // [보완됨] BI 2.0 테마의 기본 배경색(Oatmeal Sand)이 전체에 깔리도록 bg-background 추가
    <main className="min-h-screen bg-background">
      <TopHeader />
      <HeroSection />
      <MasterProfileSection />
      <InfinityHealingSection />
      <ZoneCardsSection />
      <WellnessProgramSection />
      <PartnershipSection />
      <BusinessInquiryForm />
      <Footer />
    </main>
  )
}







// // src/app/page.tsx

// import { TopHeader } from "@/components/domain/top-header"
// import { HeroSection } from "@/components/domain/hero-section"
// import { MasterProfileSection } from "@/components/domain/master-profile-section"
// import { InfinityHealingSection } from "@/components/domain/infinity-healing-section"
// import { ZoneCardsSection } from "@/components/domain/zone-cards-section"
// import { WellnessProgramSection } from "@/components/domain/wellness-program-section"
// import { PartnershipSection } from "@/components/domain/partnership-section"

// // 🚨 수정된 부분: 실제 파일명과 Export된 컴포넌트명으로 정확히 매핑합니다.
// import { BusinessInquiryForm } from "@/components/domain/BusinessInquiryForm" 

// import { Footer } from "@/components/domain/footer"

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <TopHeader />
//       <HeroSection />
//       <MasterProfileSection />
//       <InfinityHealingSection />
//       <ZoneCardsSection />
//       <WellnessProgramSection />
//       <PartnershipSection />
      
//       {/* 🚨 수정된 부분: 호출하는 컴포넌트 태그를 BusinessInquiryForm으로 변경합니다. */}
//       <BusinessInquiryForm />
      
//       <Footer />
//     </main>
//   )
// }