// src/components/domain/master-profile-section.tsx
"use client"

import { Award, Star, Leaf, Globe, BookOpen, Tv } from "lucide-react"
// [추가됨] 방금 만든 애니메이션 모듈 불러오기
import { FadeInUp } from "@/components/ui/fade-in-up"

export function MasterProfileSection() {
  return (
    <section id="master-profile" className="bg-background py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 상단 타이틀 영역 */}
        <FadeInUp>
          <div className="mb-16 md:mb-24">
            <span className="inline-block py-1 px-3 border border-muted/50 text-muted-foreground text-xs tracking-[0.2em] uppercase mb-6 rounded-full">
              Brand Origin & Authority
            </span>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-primary font-light tracking-wide leading-tight">
              수제 약차 명인, <br className="md:hidden" />
              <span className="italic font-medium text-accent">선엽스님</span>
            </h2>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── 좌측: 저서 이미지 및 철학 (Sticky 고정) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <FadeInUp delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/book-cover.jpg" 
                  alt="선엽스님의 힐링 약차 저서 및 프로필" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border-l-4 border-accent shadow-lg shadow-primary/5 relative">
                <div className="absolute top-6 left-6 text-accent/20 text-6xl font-serif leading-none">"</div>
                <p className="relative z-10 text-xl md:text-2xl font-[var(--font-cormorant)] text-primary leading-relaxed italic mb-6">
                  독소는 쏙 빼고 면역력은 끌어올린다!<br/>
                  산과 들에 지천으로 널린 꽃과 풀들이 귀한 약차가 된다.
                </p>
                <p className="text-muted-foreground text-sm tracking-widest uppercase">
                  — 선엽스님, 자연치유 철학
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* ── 우측: 핵심 어필 배너 & 타임라인 ── */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* [핵심 하이라이트] 2026 ITI 수상 배너 */}
            <FadeInUp delay={0.3}>
              <div className="bg-gradient-to-br from-primary to-[#1A2510] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden group">
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
                    미슐랭 셰프 200인이 인정한<br/>세계적인 프리미엄 명차
                  </h3>
                  <p className="text-muted font-light leading-relaxed">
                    미식의 본고장 벨기에 브뤼셀에서 열린 '국제 식음료 품평회(ITI)'에서 전 세계 미슐랭 스타 셰프 및 소믈리에의 블라인드 심사를 거쳐, 스님이 직접 개발한 <strong>'침향공진단차'가 국제 우수 미각상 2스타(2 Stars)</strong>를 수상하며 K-한방차의 글로벌 경쟁력을 입증했습니다.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* 타임라인 연혁 */}
            <div className="relative pl-4 md:pl-8 border-l border-muted/30 space-y-12 py-4">
              
              <FadeInUp delay={0.4}>
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
              </FadeInUp>

              <FadeInUp delay={0.5}>
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
              </FadeInUp>

              <FadeInUp delay={0.6}>
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
              </FadeInUp>

              <FadeInUp delay={0.7}>
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
              </FadeInUp>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





// "use client"

// import { Award, Star, Leaf, Globe, BookOpen, Tv } from "lucide-react"

// export function MasterProfileSection() {
//   return (
//     <section id="master" className="bg-background py-24 md:py-32 px-6 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         {/* 상단 타이틀 영역 */}
//         <div className="mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
//           <span className="inline-block py-1 px-3 border border-muted/50 text-muted-foreground text-xs tracking-[0.2em] uppercase mb-6 rounded-full">
//             Brand Origin & Authority
//           </span>
//           <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl text-primary font-light tracking-wide leading-tight">
//             수제 약차 명인, <br className="md:hidden" />
//             <span className="italic font-medium text-accent">선엽스님</span>
//           </h2>
//         </div>

//         {/* 2단 레이아웃 (좌: 고정된 이미지 / 우: 스크롤 타임라인) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

//           {/* ── 좌측: 저서 이미지 및 철학 (Sticky 고정) ── */}
//           <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-in fade-in duration-1000 delay-150">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
//               {/* 이미지 호버 시 살짝 확대되는 고급 효과 */}
//               <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/images/book-cover.jpg"
//                 alt="선엽스님의 힐링 약차 저서 및 프로필"
//                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
//               />
//             </div>

//             {/* 스님의 철학 인용구 */}
//             <div className="bg-white p-8 md:p-10 rounded-2xl border-l-4 border-accent shadow-lg shadow-primary/5 relative">
//               <div className="absolute top-6 left-6 text-accent/20 text-6xl font-serif leading-none">"</div>
//               <p className="relative z-10 text-xl md:text-2xl font-[var(--font-cormorant)] text-primary leading-relaxed italic mb-6">
//                 독소는 쏙 빼고 면역력은 끌어올린다!<br />
//                 산과 들에 지천으로 널린 꽃과 풀들이 귀한 약차가 된다.
//               </p>
//               <p className="text-muted-foreground text-sm tracking-widest uppercase">
//                 — 선엽스님, 자연치유 철학
//               </p>
//             </div>
//           </div>

//           {/* ── 우측: 핵심 어필 배너 & 타임라인 ── */}
//           <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

//             {/* [핵심 하이라이트] 2026 ITI 수상 배너 */}
//             <div className="bg-gradient-to-br from-primary to-[#1A2510] rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden group">
//               {/* 배경 장식 */}
//               <div className="absolute -right-10 -top-10 text-accent/10 transform rotate-12 group-hover:rotate-45 transition-transform duration-1000">
//                 <Award size={180} strokeWidth={1} />
//               </div>

//               <div className="relative z-10">
//                 <div className="flex items-center gap-2 mb-4">
//                   <Star className="w-5 h-5 fill-accent text-accent" />
//                   <Star className="w-5 h-5 fill-accent text-accent" />
//                   <span className="text-accent text-sm tracking-widest uppercase ml-2 font-semibold">2026 ITI Superior Taste Award</span>
//                 </div>
//                 <h3 className="text-2xl md:text-3xl text-primary-foreground font-serif mb-4 leading-snug">
//                   미슐랭 셰프 200인이 인정한<br />세계적인 프리미엄 명차
//                 </h3>
//                 <p className="text-muted font-light leading-relaxed">
//                   미식의 본고장 벨기에 브뤼셀에서 열린 '국제 식음료 품평회(ITI)'에서 전 세계 미슐랭 스타 셰프 및 소믈리에의 블라인드 심사를 거쳐, 스님이 직접 개발한 <strong>'침향공진단차'가 국제 우수 미각상 2스타(2 Stars)</strong>를 수상하며 K-한방차의 글로벌 경쟁력을 입증했습니다.
//                 </p>
//               </div>
//             </div>

//             {/* 타임라인 연혁 */}
//             <div className="relative pl-4 md:pl-8 border-l border-muted/30 space-y-12 py-4">

//               {/* Item 1: 2003 */}
//               <div className="relative group">
//                 <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
//                   <Leaf className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
//                 </div>
//                 <div className="pl-6">
//                   <span className="text-accent text-sm font-bold tracking-widest mb-2 block">2003 ~ 수행 초기</span>
//                   <h4 className="text-xl text-primary font-serif mb-3">출가 및 투병, 약차를 통한 자연치유</h4>
//                   <p className="text-muted-foreground font-light leading-relaxed text-sm">
//                     협심증 등 병약했던 몸을 산천의 약초로 만든 약차를 마시며 회복. 보훈병원 호스피스 병동에서 5년간 봉사하며 생사를 오가는 고통 속에서 <strong>'자연치유와 명상'이라는 진정성 있는 브랜드 철학</strong>을 확립했습니다.
//                   </p>
//                 </div>
//               </div>

//               {/* Item 2: 2014 - 2019 */}
//               <div className="relative group">
//                 <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
//                   <Globe className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
//                 </div>
//                 <div className="pl-6">
//                   <span className="text-accent text-sm font-bold tracking-widest mb-2 block">2014 ~ 2019</span>
//                   <h4 className="text-xl text-primary font-serif mb-3">글로벌 무대 검증 및 서구권 진출</h4>
//                   <ul className="space-y-2 text-muted-foreground font-light text-sm">
//                     <li>• 중국 하이난 세계보이차대회 입상 (글로벌 경쟁력 입증)</li>
//                     <li>• 중국 베이징 CCTV '호식품 베이징 포럼' 초청 강연</li>
//                     <li>• 미국 뉴욕/뉴저지 초청 '건강 디톡스 티 템플스테이' 진행</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Item 3: 2020 */}
//               <div className="relative group">
//                 <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
//                   <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
//                 </div>
//                 <div className="pl-6">
//                   <span className="text-accent text-sm font-bold tracking-widest mb-2 block">2020</span>
//                   <h4 className="text-xl text-primary font-serif mb-3">지식재산권(IP) 확보 및 오프라인 실증</h4>
//                   <p className="text-muted-foreground font-light leading-relaxed text-sm mb-2">
//                     82가지 약차 레시피를 집대성한 <strong>저서 《선엽스님의 힐링 약차》 출간</strong>. 남양주 북한강변에 웰니스 플랫폼의 테스트베드인 <strong>'마음정원'</strong> 운영을 본격화했습니다.
//                   </p>
//                 </div>
//               </div>

//               {/* Item 4: 현재 */}
//               <div className="relative group">
//                 <div className="absolute -left-[21px] md:-left-[37px] top-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border border-muted/50 group-hover:border-accent transition-colors">
//                   <Tv className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
//                 </div>
//                 <div className="pl-6">
//                   <span className="text-accent text-sm font-bold tracking-widest mb-2 block">현재</span>
//                   <h4 className="text-xl text-primary font-serif mb-3">미디어 활동 및 글로벌 비즈니스 다각화</h4>
//                   <p className="text-muted-foreground font-light leading-relaxed text-sm">
//                     BBS, EBS, BTN 등 다수 방송 출연 및 다큐멘터리 제작으로 대중적 인지도를 확보하고, 유튜브 채널 및 커머스(B2C), 교육(B2B) 등 <strong>베트남 확장을 위한 다각화된 수익 모델</strong>을 완성했습니다.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

