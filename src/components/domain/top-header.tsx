"use client"

import { useState, useEffect, useTransition } from "react"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import { ChampagneLeafLogo } from "@/components/icons/logo"

// [추가됨] 다국어 라우팅을 위한 next-intl 훅 불러오기
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"

// [수정됨] 실제 라우팅에 사용할 소문자 locale 코드로 변경
type LanguageCode = "ko" | "en" | "vi"

const languages: { code: LanguageCode; label: string; display: string }[] = [
  { code: "ko", label: "한국어", display: "KO" },
  { code: "en", label: "English", display: "EN" },
  { code: "vi", label: "Tiếng Việt", display: "VI" },
]

// 향후 이 부분도 다국어 JSON(messages)과 연동하여 번역할 수 있습니다.
const navLinks = [
  { label: "마스터 & 철학", href: "#master" },
  { label: "힐링 스페이스", href: "#sanctuary" },
  { label: "웰니스 프로그램", href: "#program" },
  { label: "파트너십", href: "#business-inquiry" },
  { label: "사업 문의", href: "#business-inquiry" },
]

export function TopHeader() {
  // [수정됨] next-intl을 통해 현재 접속 중인 언어(locale)를 가져옵니다.
  const currentLocale = useLocale() as LanguageCode
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // 스크롤 감지 — 배경 불투명도 조절
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // [수정됨] 언어 선택 시 실제 URL 경로를 변경하는 로직
  const handleLangSelect = (nextLocale: LanguageCode) => {
    setIsLangOpen(false)
    startTransition(() => {
      // 현재 보고 있는 페이지(pathname)를 유지한 채 언어(locale)만 변경합니다.
      router.replace(pathname, { locale: nextLocale })
    })
  }

  const handleNavClick = () => {
    setIsMobileOpen(false)
  }

  // 현재 선택된 언어의 표시용 텍스트(KO, EN, VI) 찾기
  const currentLangDisplay = languages.find(l => l.code === currentLocale)?.display || "KO"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#2C3E1A]/8"
          : "bg-white/80 backdrop-blur-sm border-b border-[#2C3E1A]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
          <ChampagneLeafLogo className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex items-baseline">
            <span
              className="tracking-[0.18em] text-[#2C3E1A] leading-none select-none"
              style={{
                fontFamily: "'Black Han Sans', 'Noto Sans KR', sans-serif",
                fontWeight: 900,
                fontSize: "1.05rem",
                letterSpacing: "0.15em",
              }}
            >
              SUNYEOP
            </span>
            <span
              className="ml-2 tracking-[0.08em] text-[#C5A880] leading-none select-none"
              style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif KR', Georgia, serif",
                fontWeight: 600,
                fontSize: "1.05rem",
                fontStyle: "italic",
              }}
            >
              Zen Retreat
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.1em] text-[#2C3E1A]/65 hover:text-[#2C3E1A] transition-colors duration-300 uppercase whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right: Lang Switcher + Mobile Toggle ── */}
        <div className="flex items-center gap-3">

          {/* Language Switcher */}
          <div className="relative">
            <button
              id="lang-switcher"
              onClick={() => setIsLangOpen(!isLangOpen)}
              disabled={isPending}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs text-[#2C3E1A]/70 hover:text-[#2C3E1A] transition-colors duration-300 rounded hover:bg-[#2C3E1A]/5 ${isPending ? 'opacity-50 cursor-wait' : ''}`}
              aria-label="언어 선택"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider">{currentLangDisplay}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Lang Dropdown */}
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1 z-20 bg-white border border-[#2C3E1A]/10 rounded-lg shadow-xl overflow-hidden min-w-[152px] animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => {
                    const isActive = currentLocale === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors duration-200 ${
                          isActive
                            ? "bg-[#C5A880]/10 text-[#C5A880] font-semibold"
                            : "text-[#2C3E1A]/80 hover:bg-[#2C3E1A]/5 hover:text-[#2C3E1A]"
                        }`}
                      >
                        <span>{lang.label}</span>
                        <span className="text-[10px] font-medium opacity-60 ml-2">{lang.display}</span>
                      </button>
                    )
                  })}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#2C3E1A]/70 hover:text-[#2C3E1A] transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="메뉴 열기"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav Drawer ── */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#2C3E1A]/10 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-6 py-4 gap-0">
            {navLinks.map((link) => (
              <a
                key={link.label + link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3.5 text-sm text-[#2C3E1A]/70 hover:text-[#2C3E1A] border-b border-[#2C3E1A]/5 last:border-0 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}












// "use client"

// import { useState, useEffect } from "react"
// import { Globe, ChevronDown, Menu, X } from "lucide-react"
// // 👇 1. 새롭게 생성한 SVG 로고 컴포넌트를 가져옵니다 (Import)
// import { ChampagneLeafLogo } from "@/components/icons/logo"

// type Language = "KO" | "EN" | "VI"

// const languages: { code: Language; label: string; active: boolean }[] = [
//   { code: "KO", label: "한국어", active: true },
//   { code: "EN", label: "English", active: false },
//   { code: "VI", label: "Tiếng Việt", active: false },
// ]

// const navLinks = [
//   { label: "마스터 & 철학", href: "#master" },
//   { label: "힐링 스페이스", href: "#sanctuary" },
//   { label: "웰니스 프로그램", href: "#program" },
//   { label: "파트너십", href: "#business-inquiry" },
//   { label: "사업 문의", href: "#business-inquiry" },
// ]

// export function TopHeader() {
//   const [currentLang, setCurrentLang] = useState<Language>("KO")
//   const [isLangOpen, setIsLangOpen] = useState(false)
//   const [isMobileOpen, setIsMobileOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   // 스크롤 감지 — 배경 불투명도 조절
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleLangSelect = (lang: Language, active: boolean) => {
//     if (!active) return // 비활성 언어는 선택 불가
//     setCurrentLang(lang)
//     setIsLangOpen(false)
//   }

//   const handleNavClick = () => {
//     setIsMobileOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#2C3E1A]/8"
//           : "bg-white/80 backdrop-blur-sm border-b border-[#2C3E1A]/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between h-16">

//         {/* ── Logo ── */}
//         {/* 👇 2. gap-2.5로 심볼과 텍스트 간격을 벌리고, group 클래스를 추가하여 애니메이션을 묶습니다. */}
//         <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
          
//           {/* 👇 3. SVG 로고 컴포넌트를 삽입합니다. 반응형 크기 및 호버(Hover) 애니메이션을 적용합니다. */}
//           <ChampagneLeafLogo className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-105" />

//           {/* 텍스트 로고 영역 (기존 코드 유지) */}
//           <div className="flex items-baseline">
//             <span
//               className="tracking-[0.18em] text-[#2C3E1A] leading-none select-none"
//               style={{
//                 fontFamily: "'Black Han Sans', 'Noto Sans KR', sans-serif",
//                 fontWeight: 900,
//                 fontSize: "1.05rem",
//                 letterSpacing: "0.15em",
//               }}
//             >
//               SUNYEOP
//             </span>
//             <span
//               className="ml-2 tracking-[0.08em] text-[#C5A880] leading-none select-none"
//               style={{
//                 fontFamily: "'Cormorant Garamond', 'Noto Serif KR', Georgia, serif",
//                 fontWeight: 600,
//                 fontSize: "1.05rem",
//                 fontStyle: "italic",
//               }}
//             >
//               Zen Retreat
//             </span>
//           </div>
//         </a>

//         {/* ── Desktop Nav ── */}
//         <nav className="hidden lg:flex items-center gap-7">
//           {navLinks.slice(0, 4).map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-xs tracking-[0.1em] text-[#2C3E1A]/65 hover:text-[#2C3E1A] transition-colors duration-300 uppercase whitespace-nowrap"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* ── Right: Lang Switcher + Mobile Toggle ── */}
//         <div className="flex items-center gap-3">

//           {/* Language Switcher */}
//           <div className="relative">
//             <button
//               id="lang-switcher"
//               onClick={() => setIsLangOpen(!isLangOpen)}
//               className="flex items-center gap-1.5 px-3 py-2 text-xs text-[#2C3E1A]/70 hover:text-[#2C3E1A] transition-colors duration-300 rounded hover:bg-[#2C3E1A]/5"
//               aria-label="언어 선택"
//             >
//               <Globe className="w-3.5 h-3.5" />
//               <span className="font-semibold tracking-wider">{currentLang}</span>
//               <ChevronDown
//                 className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
//               />
//             </button>

//             {/* Lang Dropdown */}
//             {isLangOpen && (
//               <>
//                 <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
//                 <div className="absolute right-0 top-full mt-1 z-20 bg-white border border-[#2C3E1A]/10 rounded-lg shadow-xl overflow-hidden min-w-[152px] animate-in fade-in slide-in-from-top-2 duration-200">
//                   {languages.map((lang) => (
//                     <button
//                       key={lang.code}
//                       onClick={() => handleLangSelect(lang.code, lang.active)}
//                       className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors duration-200 ${
//                         lang.active
//                           ? currentLang === lang.code
//                             ? "bg-[#C5A880]/10 text-[#C5A880] font-semibold"
//                             : "text-[#2C3E1A]/80 hover:bg-[#2C3E1A]/5 hover:text-[#2C3E1A]"
//                           : "text-[#2C3E1A]/25 cursor-not-allowed"
//                       }`}
//                       disabled={!lang.active}
//                       title={lang.active ? undefined : "향후 지원 예정"}
//                     >
//                       <span>{lang.label}</span>
//                       <span className="text-[10px] font-medium opacity-60 ml-2">{lang.code}</span>
//                     </button>
//                   ))}
//                   <div className="px-4 py-2 border-t border-[#2C3E1A]/5">
//                     <p className="text-[10px] text-[#2C3E1A]/30 leading-relaxed">
//                       EN · VI 다국어 준비 중
//                     </p>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Mobile menu toggle */}
//           <button
//             className="lg:hidden p-2 text-[#2C3E1A]/70 hover:text-[#2C3E1A] transition-colors"
//             onClick={() => setIsMobileOpen(!isMobileOpen)}
//             aria-label="메뉴 열기"
//           >
//             {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       {/* ── Mobile Nav Drawer ── */}
//       {isMobileOpen && (
//         <div className="lg:hidden bg-white border-t border-[#2C3E1A]/10 shadow-lg animate-in slide-in-from-top-2 duration-200">
//           <nav className="flex flex-col px-6 py-4 gap-0">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label + link.href}
//                 href={link.href}
//                 onClick={handleNavClick}
//                 className="py-3.5 text-sm text-[#2C3E1A]/70 hover:text-[#2C3E1A] border-b border-[#2C3E1A]/5 last:border-0 transition-colors duration-200 tracking-wide"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }
