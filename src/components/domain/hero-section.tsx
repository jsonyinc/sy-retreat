"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link" 
import { useTranslations } from 'next-intl' 

export function HeroSection() {
  // 'Hero' 네임스페이스 다국어 훅 호출
  const t = useTranslations('Hero')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Layer 1: Full-screen background image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Layer 2: Luxury dark gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      {/* ── Layer 3: Top vignette (header area) ── */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

      {/* ── Layer 4: Bottom vignette ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* ── Content: left-aligned, padded ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-2xl animate-in fade-in duration-1000">

          {/* Eyebrow label */}
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span
              className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-[#C5A880]"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
            >
              <span className="w-8 h-px bg-[#C5A880]" />
              {/* 단순 텍스트는 t()로 직접 출력하여 성능 확보 */}
              <span>{t('eyebrow')}</span>
              <span className="w-8 h-px bg-[#C5A880]" />
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-[var(--font-cormorant)] text-6xl md:text-7xl lg:text-8xl font-light text-[#F9F6F0] mb-6 tracking-tight leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)" }}
          >
            <span>{t('titleMain')}</span>
            <span className="block font-normal italic text-[#C5A880]">
              {t('titleSub')}
            </span>
          </h1>

          {/* Thin gold divider */}
          <div className="flex items-center gap-4 mb-8 animate-in fade-in duration-700 delay-250">
            <div className="w-12 h-px bg-[#C5A880]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/80" />
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-[#F9F6F0] font-light leading-relaxed mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
          >
            {/* [핵심] JSON의 <br> 태그를 감지하여 Tailwind 클래스를 안전하게 주입하는 t.rich() 활용 */}
            {t.rich('tagline1', {
              br: () => <br className="hidden sm:block" />
            })}
          </p>

          <p
            className="text-sm md:text-base text-[#F9F6F0]/80 font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
          >
            {t.rich('tagline2', {
              br: () => <br className="hidden sm:block" />
            })}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            
            {/* Link 컴포넌트로 교체되어 스크롤 안정성 확보 */}
            <Button
              asChild
              size="lg"
              className="bg-[#C5A880] hover:bg-[#D4B896] text-[#2C3E1A] font-semibold px-10 py-6 text-base tracking-widest uppercase transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A880]/40 hover:-translate-y-0.5 rounded-none"
            >
              <Link href="#business-inquiry">
                {t('btnInquiry')}
              </Link>
            </Button>

            <Link
              href="#healing"
              className="flex items-center gap-2 text-[#F9F6F0]/70 hover:text-[#C5A880] text-sm tracking-widest uppercase transition-colors duration-300 py-6 group"
            >
              <span>{t('btnMore')}</span>
              <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
            </Link>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#F9F6F0]/40 text-xs tracking-widest uppercase">{t('scroll')}</span>
        <ChevronDown className="w-5 h-5 text-[#F9F6F0]/40" />
      </div>
    </section>
  )
}





// "use client"

// import { ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">

//       {/* ── Layer 1: Full-screen background image ── */}
//       {/* eslint-disable-next-line @next/next/no-img-element */}
//       <img
//         src="/images/hero-bg.jpg"
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />

//       {/* ── Layer 2: Luxury dark gradient overlay ── */}
//       {/* Left: strong dark for text readability → Right: fades to show photo */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

//       {/* ── Layer 3: Top vignette (header area) ── */}
//       <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

//       {/* ── Layer 4: Bottom vignette ── */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

//       {/* ── Content: left-aligned, padded ── */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">
//         <div className="max-w-2xl animate-in fade-in duration-1000">

//         {/* Eyebrow label */}
//           <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
//             <span
//               className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-[#C5A880]"
//               style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
//             >
//               <span className="w-8 h-px bg-[#C5A880]" />
//               동양 자연치유 웰니스 플랫폼
//               <span className="w-8 h-px bg-[#C5A880]" />
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h1
//             className="font-[var(--font-cormorant)] text-6xl md:text-7xl lg:text-8xl font-light text-[#F9F6F0] mb-6 tracking-tight leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150"
//             style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)" }}
//           >
//             선엽 명상 치유
//             <span className="block font-normal italic text-[#C5A880]">
//               SUNYEOP Zen Retreat center
//             </span>
//           </h1>

//           {/* Thin gold divider */}
//           <div className="flex items-center gap-4 mb-8 animate-in fade-in duration-700 delay-250">
//             <div className="w-12 h-px bg-[#C5A880]/60" />
//             <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]/80" />
//           </div>

//           {/* Tagline */}
//           <p
//             className="text-lg md:text-xl text-[#F9F6F0] font-light leading-relaxed mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
//             style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
//           >
//             한국 전통 사찰약차와 자연치유 철학,<br className="hidden sm:block" />
//             베트남의 침향과 약초가 만나는 곳
//           </p>

//           <p
//             className="text-sm md:text-base text-[#F9F6F0]/80 font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400"
//             style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
//           >
//             단순한 스파가 아닌, 명상과 치유 중심의 프리미엄 리트릿 —<br className="hidden sm:block" />
//             호치민 도심과 메콩강 대자연을 잇는 O2O 힐링 여정
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
//             <Button
//               size="lg"
//               className="bg-[#C5A880] hover:bg-[#D4B896] text-[#2C3E1A] font-semibold px-10 py-6 text-base tracking-widest uppercase transition-all duration-500 hover:shadow-xl hover:shadow-[#C5A880]/40 hover:-translate-y-0.5 rounded-none"
//               onClick={() =>
//                 document.getElementById("business-inquiry")?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               Business Inquiry
//             </Button>

//             <button
//               className="flex items-center gap-2 text-[#F9F6F0]/70 hover:text-[#C5A880] text-sm tracking-widest uppercase transition-colors duration-300 py-6 group"
//               onClick={() =>
//                 document.getElementById("healing")?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               <span>더 알아보기</span>
//               <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
//         <span className="text-[#F9F6F0]/40 text-xs tracking-widest uppercase">Scroll</span>
//         <ChevronDown className="w-5 h-5 text-[#F9F6F0]/40" />
//       </div>
//     </section>
//   )
// }