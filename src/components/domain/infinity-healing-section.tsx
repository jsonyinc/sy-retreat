"use client"

import { useTranslations } from 'next-intl';

export function InfinityHealingSection() {
  const t = useTranslations('InfinityHealingSection');

  // hubs 배열을 컴포넌트 내부로 이동하여 다국어 훅(t)을 적용합니다.
  const hubs = [
    {
      badge: t('hub1Badge'),
      zone: t('hub1Zone'),
      location: t('hub1Location'),
      desc: t('hub1Desc'),
      role: t('hub1Role'),
      features: [
        t('hub1Feature1'),
        t('hub1Feature2'),
        t('hub1Feature3'),
      ],
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: t('hub2Badge'),
      zone: t('hub2Zone'),
      location: t('hub2Location'),
      desc: t('hub2Desc'),
      role: t('hub2Role'),
      features: [
        t('hub2Feature1'),
        t('hub2Feature2'),
        t('hub2Feature3'),
      ],
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="healing" className="py-24 md:py-32 px-6 bg-[#2C3E1A]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C5A880] text-sm tracking-[0.3em] uppercase mb-4 block">
            {t('subHeading')}
          </span>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#F9F6F0] mb-6">
            {t('heading')}
          </h2>
          <p className="text-[#F9F6F0]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.rich('description', {
              br: () => <br className="hidden md:block" />
            })}
          </p>
        </div>

        {/* ── Equal 2-col cards with centered ⇄ overlay ── */}
        <div className="relative">
          {/* Equal grid: both cards occupy exactly 50% */}
          <div className="grid md:grid-cols-2 gap-6">
            {hubs.map((hub, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#F9F6F0]/10 bg-[#F9F6F0]/5 hover:border-[#C5A880]/40 transition-all duration-500"
              >
                {/* Image — fixed height, equal on both sides */}
                <div className="relative h-60 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hub.img}
                    alt={hub.zone}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Stage badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C5A880] text-[#2C3E1A] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                      {hub.badge}
                    </span>
                  </div>
                </div>

                {/* Content — identical structure both cards */}
                <div className="flex flex-col flex-1 p-7">
                  <span className="text-[#C5A880] text-xs tracking-[0.25em] uppercase mb-2 block">
                    {hub.location}
                  </span>
                  <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#F9F6F0] mb-4 leading-snug">
                    {hub.zone}
                  </h3>
                  <p className="text-[#F9F6F0]/60 text-sm leading-relaxed mb-6">
                    {hub.desc}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {hub.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#F9F6F0]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Role tag */}
                  <div className="flex items-center gap-2 pt-5 border-t border-[#F9F6F0]/10">
                    <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                    <span className="text-[#C5A880] text-xs tracking-widest font-medium uppercase">
                      {hub.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ⇄ connector: absolutely centered between the two equal cards */}
          <div className="hidden md:flex absolute top-[calc(50%-1rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-[#2C3E1A] border-2 border-[#C5A880] flex items-center justify-center shadow-2xl shadow-[#C5A880]/30">
              <span className="text-[#C5A880] text-xl font-bold select-none">⇄</span>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-[#F9F6F0]/45 text-sm leading-relaxed border-t border-[#F9F6F0]/10 pt-8 max-w-3xl mx-auto mt-10">
          {t.rich('footnote', {
            highlight: (chunks) => <span className="text-[#C5A880]">{chunks}</span>
          })}
        </p>
      </div>
    </section>
  )
}



// "use client"

// const hubs = [
//   {
//     badge: "1단계 — 도심",
//     zone: "Urban Wellness Center",
//     location: "호치민 / 하노이 도심",
//     desc: "VIP 고객의 일상적 접근성 확보. 체질 상담, 데이 스파, 약차 구매를 통한 1차 고객 접점 및 리드(Lead) 창출.",
//     role: "브랜드 쇼룸 및 일상 케어",
//     features: [
//       "체질 상담 & 1:1 맞춤 진단",
//       "데이 스파 & 약차 힐링",
//       "약차 / MD 상품 전시·판매",
//     ],
//     img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     badge: "2단계 — 자연",
//     zone: "Nature Farmstay Retreat",
//     location: "컨터 / 메콩강 대자연",
//     desc: "도심 센터에서 검증된 VIP 고객을 대상으로 한 고단가 체류형(1~7박) 심화 디톡스 및 숲속 차명상 프로그램.",
//     role: "고수익 프리미엄 리트릿",
//     features: [
//       "1~7박 체류형 심화 디톡스",
//       "숲속 차명상 & 자연 치유",
//       "팜스테이 힐링 패키지",
//     ],
//     img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
//   },
// ]

// export function InfinityHealingSection() {
//   return (
//     <section id="healing" className="py-24 md:py-32 px-6 bg-[#2C3E1A]">
//       <div className="max-w-6xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <span className="text-[#C5A880] text-sm tracking-[0.3em] uppercase mb-4 block">
//             Spatial Design &amp; Synergy
//           </span>
//           <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#F9F6F0] mb-6">
//             The Infinity Healing Loop
//           </h2>
//           <p className="text-[#F9F6F0]/70 max-w-2xl mx-auto text-lg leading-relaxed">
//             도심에서의 일상적 비움과 대자연에서의 깊은 채움이 교차하는<br className="hidden md:block" />
//             완벽한 웰니스 생태계
//           </p>
//         </div>

//         {/* ── Equal 2-col cards with centered ⇄ overlay ── */}
//         <div className="relative">
//           {/* Equal grid: both cards occupy exactly 50% */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {hubs.map((hub, i) => (
//               <div
//                 key={i}
//                 className="group flex flex-col rounded-2xl overflow-hidden border border-[#F9F6F0]/10 bg-[#F9F6F0]/5 hover:border-[#C5A880]/40 transition-all duration-500"
//               >
//                 {/* Image — fixed height, equal on both sides */}
//                 <div className="relative h-60 overflow-hidden flex-shrink-0">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={hub.img}
//                     alt={hub.zone}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                   {/* Stage badge */}
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-[#C5A880] text-[#2C3E1A] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
//                       {hub.badge}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content — identical structure both cards */}
//                 <div className="flex flex-col flex-1 p-7">
//                   <span className="text-[#C5A880] text-xs tracking-[0.25em] uppercase mb-2 block">
//                     {hub.location}
//                   </span>
//                   <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#F9F6F0] mb-4 leading-snug">
//                     {hub.zone}
//                   </h3>
//                   <p className="text-[#F9F6F0]/60 text-sm leading-relaxed mb-6">
//                     {hub.desc}
//                   </p>

//                   {/* Feature list */}
//                   <ul className="space-y-2.5 flex-1 mb-6">
//                     {hub.features.map((f, j) => (
//                       <li key={j} className="flex items-center gap-3 text-sm text-[#F9F6F0]/70">
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] flex-shrink-0" />
//                         {f}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Role tag */}
//                   <div className="flex items-center gap-2 pt-5 border-t border-[#F9F6F0]/10">
//                     <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
//                     <span className="text-[#C5A880] text-xs tracking-widest font-medium uppercase">
//                       {hub.role}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ⇄ connector: absolutely centered between the two equal cards */}
//           <div className="hidden md:flex absolute top-[calc(50%-1rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="w-14 h-14 rounded-full bg-[#2C3E1A] border-2 border-[#C5A880] flex items-center justify-center shadow-2xl shadow-[#C5A880]/30">
//               <span className="text-[#C5A880] text-xl font-bold select-none">⇄</span>
//             </div>
//           </div>
//         </div>

//         {/* Footnote */}
//         <p className="text-center text-[#F9F6F0]/45 text-sm leading-relaxed border-t border-[#F9F6F0]/10 pt-8 max-w-3xl mx-auto mt-10">
//           도심 센터는{" "}
//           <span className="text-[#C5A880]">&#39;브랜드 쇼룸 및 일상 케어&#39;</span>{" "}
//           역할을, 자연형 센터는{" "}
//           <span className="text-[#C5A880]">&#39;고수익 프리미엄 리트릿&#39;</span>{" "}
//           역할을 수행하며 상호 고객을 순환시킵니다.
//         </p>
//       </div>
//     </section>
//   )
// }
