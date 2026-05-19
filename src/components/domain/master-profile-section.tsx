"use client"

import { Award, Star, Leaf, Globe, BookOpen, Tv } from "lucide-react"

export function MasterProfileSection() {
  return (
    <section id="master" className="bg-background py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* 상단 타이틀 영역 */}
        <div className="mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-block py-1 px-3 border border-muted/50 text-muted-foreground text-xs tracking-[0.2em] uppercase mb-6 rounded-full">
            Brand Origin & Authority
          </span>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-primary font-light tracking-wide leading-tight">
            수제 약차 명인, <br className="md:hidden" />
            <span className="italic font-medium text-accent">선엽스님</span>
          </h2>
        </div>

        {/* 2단 레이아웃 (좌: 고정된 이미지 / 우: 스크롤 타임라인) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── 좌측: 저서 이미지 및 철학 (Sticky 고정) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-in fade-in duration-1000 delay-150">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
              {/* 이미지 호버 시 살짝 확대되는 고급 효과 */}
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/book-cover.jpg"
                alt="선엽스님의 힐링 약차 저서 및 프로필"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* 스님의 철학 인용구 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border-l-4 border-accent shadow-lg shadow-primary/5 relative">
              <div className="absolute top-6 left-6 text-accent/20 text-6xl font-serif leading-none">"</div>
              <p className="relative z-10 text-xl md:text-2xl font-[var(--font-cormorant)] text-primary leading-relaxed italic mb-6">
                독소는 쏙 빼고 면역력은 끌어올린다!<br />
                산과 들에 지천으로 널린 꽃과 풀들이 귀한 약차가 된다.
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                — 선엽스님, 자연치유 철학
              </p>
            </div>
          </div>

          {/* ── 우측: 핵심 어필 배너 & 타임라인 ── */}
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

            {/* [핵심 하이라이트] 2026 ITI 수상 배너 */}
            <div className="bg-gradient-to-br from-primary to-[#1A2510] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden group">
              {/* 배경 장식 */}
              <div className="absolute -right-10 -top-10 text-accent/10 transform rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                <Award size={180} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-accent text-sm tracking-widest uppercase ml-2 font-semibold">2026 ITI Superior Taste Award</span>
                </div>
                <h3 className="text-2xl md:text-3xl text-primary-foreground font-serif mb-4 leading-snug">
                  미슐랭 셰프 200인이 인정한<br />세계적인 프리미엄 명차
                </h3>
                <p className="text-muted font-light leading-relaxed">
                  미식의 본고장 벨기에 브뤼셀에서 열린 '국제 식음료 품평회(ITI)'에서 전 세계 미슐랭 스타 셰프 및 소믈리에의 블라인드 심사를 거쳐, 스님이 직접 개발한 <strong>'침향공진단차'가 국제 우수 미각상 2스타(2 Stars)</strong>를 수상하며 K-한방차의 글로벌 경쟁력을 입증했습니다.
                </p>
              </div>
            </div>

            {/* 타임라인 연혁 */}
            <div className="relative pl-4 md:pl-8 border-l border-muted/30 space-y-12 py-4">

              {/* Item 1: 2003 */}
              <div className="relative group">
                <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
                  <Leaf className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="pl-6">
                  <span className="text-accent text-sm font-bold tracking-widest mb-2 block">2003 ~ 수행 초기</span>
                  <h4 className="text-xl text-primary font-serif mb-3">출가 및 투병, 약차를 통한 자연치유</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    협심증 등 병약했던 몸을 산천의 약초로 만든 약차를 마시며 회복. 보훈병원 호스피스 병동에서 5년간 봉사하며 생사를 오가는 고통 속에서 <strong>'자연치유와 명상'이라는 진정성 있는 브랜드 철학</strong>을 확립했습니다.
                  </p>
                </div>
              </div>

              {/* Item 2: 2014 - 2019 */}
              <div className="relative group">
                <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
                  <Globe className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="pl-6">
                  <span className="text-accent text-sm font-bold tracking-widest mb-2 block">2014 ~ 2019</span>
                  <h4 className="text-xl text-primary font-serif mb-3">글로벌 무대 검증 및 서구권 진출</h4>
                  <ul className="space-y-2 text-muted-foreground font-light text-sm">
                    <li>• 중국 하이난 세계보이차대회 입상 (글로벌 경쟁력 입증)</li>
                    <li>• 중국 베이징 CCTV '호식품 베이징 포럼' 초청 강연</li>
                    <li>• 미국 뉴욕/뉴저지 초청 '건강 디톡스 티 템플스테이' 진행</li>
                  </ul>
                </div>
              </div>

              {/* Item 3: 2020 */}
              <div className="relative group">
                <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
                  <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="pl-6">
                  <span className="text-accent text-sm font-bold tracking-widest mb-2 block">2020</span>
                  <h4 className="text-xl text-primary font-serif mb-3">지식재산권(IP) 확보 및 오프라인 실증</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm mb-2">
                    82가지 약차 레시피를 집대성한 <strong>저서 《선엽스님의 힐링 약차》 출간</strong>. 남양주 북한강변에 웰니스 플랫폼의 테스트베드인 <strong>'마음정원'</strong> 운영을 본격화했습니다.
                  </p>
                </div>
              </div>

              {/* Item 4: 현재 */}
              <div className="relative group">
                <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
                  <Tv className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="pl-6">
                  <span className="text-accent text-sm font-bold tracking-widest mb-2 block">현재</span>
                  <h4 className="text-xl text-primary font-serif mb-3">미디어 활동 및 글로벌 비즈니스 다각화</h4>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    BBS, EBS, BTN 등 다수 방송 출연 및 다큐멘터리 제작으로 대중적 인지도를 확보하고, 유튜브 채널 및 커머스(B2C), 교육(B2B) 등 <strong>베트남 확장을 위한 다각화된 수익 모델</strong>을 완성했습니다.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





// import Image from "next/image"

// const history = [
//   {
//     label: "글로벌 무대 검증",
//     desc: "\"차의 나라\" 중국 하이난 세계보이차대회 입상 및 CCTV 초청 포럼 강연으로 한국 약차의 우수성 입증",
//   },
//   {
//     label: "서구권 웰니스 진출",
//     desc: "미국 뉴욕/뉴저지 초청 '건강 디톡스 티 템플스테이' 진행, 글로벌 명상 수요 확인",
//   },
//   {
//     label: "지식재산권(IP) 확보",
//     desc: "저서 《선엽스님의 힐링 약차》 출간, 체질별 맞춤 차 이론 및 자연치유 철학의 학술적 체계화 완성",
//   },
//   {
//     label: "오프라인 실증",
//     desc: "남양주 '마음정원' 운영 및 다수 미디어(BBS, BTN, EBS) 출연을 통한 프리미엄 브랜드 인지도 구축",
//   },
// ]

// const values = [
//   {
//     icon: "🌿",
//     title: "독보적 희소성",
//     subtitle: "Unrivaled Rarity",
//     desc: "일반적인 마사지 중심의 웰니스가 아닙니다. 한국 사찰약차 전승자가 직접 기획한 '수행 기반 차문화'와 '피부 자연요법'이 결합된 대체 불가능한 프리미엄 콘텐츠입니다.",
//   },
//   {
//     icon: "💎",
//     title: "초개인화 VIP 케어",
//     subtitle: "Hyper-Personalized",
//     desc: "저서로 입증된 82가지 레시피를 바탕으로, 고객의 체질 상담부터 맞춤형 약차·침향 스파·디톡스 식단까지 이어지는 완벽한 1:1 맞춤형 힐링 솔루션을 제공합니다.",
//   },
//   {
//     icon: "📈",
//     title: "무한한 확장성",
//     subtitle: "Scalable Business",
//     desc: "공간 비즈니스(리트릿)를 넘어, 시그니처 약차·침향 MD 상품 판매 및 국제 티테라피 교육 사업으로 이어지는 다각화된 고수익 비즈니스 모델을 창출합니다.",
//   },
// ]

// export function MasterProfileSection() {
//   return (
//     <section id="master" className="bg-[#F9F6F0]">

//       {/* ── Part 1: Brand Origin & Authority ── */}
//       <div className="py-24 md:py-32 px-6 border-b border-[#D4CFC5]">
//         <div className="max-w-6xl mx-auto">

//           {/* Section badge */}
//           <div className="mb-12 text-center md:text-left">
//             <span className="inline-block bg-[#EEF2E6] text-[#556b2f] text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
//               Brand Origin &amp; Authority
//             </span>
//           </div>

//           {/* Main Grid: Image left / Text right */}
//           <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-stretch">

//             {/* Left: Book Cover */}
//             <div className="flex flex-col items-center h-full">
//               {/* Gold accent top bar */}
//               <div className="w-full h-1 bg-gradient-to-r from-[#6b8e23] to-[#a2b86c] rounded-full mb-6" />

//               {/* Image: fills available height, width follows 3:4 ratio */}
//               <div className="relative group flex-1 flex items-start justify-center w-full">
//                 {/* Double gold frame — scoped to the aspect-ratio box */}
//                 <div className="relative h-full aspect-[3/4] max-w-full group">
//                   <div className="absolute -inset-3 border border-[#C5A880]/25 rounded-2xl pointer-events-none" />
//                   <div className="absolute -inset-1.5 border border-[#C5A880]/15 rounded-xl pointer-events-none" />

//                   <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-[#2C3E1A]/15 transition-transform duration-500 group-hover:scale-[1.02]">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src="/images/book-cover.jpg"
//                       alt="선엽스님의 힐링 약차 저서 표지"
//                       className="w-full h-full object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="text-center mt-6">
//                 <p className="text-[#5A6B4A] text-sm leading-relaxed">
//                   &ldquo;독소는 쏙 빼고 면역력은 끌어올린다!&rdquo;
//                 </p>
//                 <p className="text-[#C5A880] text-xs tracking-wide font-medium mt-1">
//                   82가지 체질 맞춤 약차 레시피 집대성
//                 </p>
//               </div>
//             </div>

//             {/* Right: Text & History */}
//             <div className="flex flex-col justify-center">
//               <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E1A] mb-3 leading-tight">
//                 수제 약차 명인,<br />
//                 <span className="italic">선엽스님</span>
//               </h2>
//               <p className="text-[#5A6B4A] text-lg font-light leading-relaxed mb-10">
//                 생사를 오가는 투병에서 피어난 &lsquo;자연치유&rsquo;의 기적,<br className="hidden md:block" />
//                 글로벌 K-Zen 웰니스의 기준이 되다.
//               </p>

//               {/* History List */}
//               <ul className="space-y-5 mb-10">
//                 {history.map((item, i) => (
//                   <li key={i} className="flex items-start gap-4 group">
//                     <span className="mt-1.5 w-2 h-2 rounded-sm bg-[#8FBC8F] flex-shrink-0 group-hover:bg-[#C5A880] transition-colors duration-300" />
//                     <p className="text-[#444] text-sm leading-relaxed">
//                       <span className="text-[#556b2f] font-semibold">{item.label}:</span>{" "}
//                       {item.desc}
//                     </p>
//                   </li>
//                 ))}
//               </ul>

//               {/* Quote Box */}
//               <blockquote className="border-l-4 border-[#6b8e23] bg-white/80 pl-6 py-5 pr-6 rounded-r-xl shadow-sm">
//                 <p className="font-[var(--font-cormorant)] text-xl md:text-2xl italic font-light text-[#2C3E1A] leading-relaxed mb-3">
//                   &ldquo;산과 들에 지천으로 널린 꽃과 풀들이<br className="hidden md:block" />
//                   귀한 약차가 된다.&rdquo;
//                 </p>
//                 <cite className="text-sm text-[#5A6B4A]/70 not-italic">
//                   — 선엽스님, 단순한 차를 넘어 생명을 살리는 치유의 철학
//                 </cite>
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Part 2: Value Proposition (Why K-Zen) ── */}
//       <div className="py-24 md:py-32 px-6">
//         <div className="max-w-6xl mx-auto">

//           {/* Header */}
//           <div className="text-center mb-4">
//             <span className="inline-block bg-[#EEF2E6] text-[#556b2f] text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
//               Value Proposition for VIP &amp; Partners
//             </span>
//             <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#2C3E1A] mt-6 mb-4">
//               왜 선엽스님의 &lsquo;K-Zen 웰니스&rsquo;인가?
//             </h3>
//             <p className="text-[#5A6B4A] text-lg font-light max-w-2xl mx-auto">
//               단순한 스파(Spa)를 넘어, 하이엔드 타겟을 위한 &lsquo;동양 자연치유 플랫폼&rsquo;
//             </p>
//           </div>

//           {/* Value Cards */}
//           <div className="grid md:grid-cols-3 gap-6 mt-14">
//             {values.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-[#EEF2E6] rounded-2xl p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2C3E1A]/5 hover:border-[#C5A880]/40 transition-all duration-500 group"
//               >
//                 <div className="text-4xl mb-5">{item.icon}</div>
//                 <h4 className="font-[var(--font-cormorant)] text-xl text-[#2C3E1A] font-medium mb-1">
//                   {item.title}
//                 </h4>
//                 <p className="text-[#C5A880] text-xs tracking-widest uppercase mb-4">
//                   {item.subtitle}
//                 </p>
//                 <div className="w-8 h-px bg-[#C5A880]/40 mb-4 group-hover:w-16 transition-all duration-500" />
//                 <p className="text-[#5A6B4A] text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Vision Box */}
//           <div className="mt-10 px-10 py-8 bg-[#2C3E1A] rounded-2xl text-center shadow-xl shadow-[#2C3E1A]/20">
//             <p className="font-[var(--font-cormorant)] text-xl md:text-2xl font-light text-[#F9F6F0]/80 italic leading-relaxed mb-3">
//               &ldquo;차를 마시고, 향을 맡고, 피부를 치유하며 자연과 다시 연결되는 곳.&rdquo;
//             </p>
//             <p className="text-[#F9F6F0]/60 text-sm tracking-widest uppercase">
//               SUNYEOP ZEN RETREAT —{" "}
//               <span className="text-[#C5A880] font-medium">
//                 글로벌 웰니스 시장의 새로운 패러다임
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }
