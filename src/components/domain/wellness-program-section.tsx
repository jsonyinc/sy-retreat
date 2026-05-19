import React from "react"

const steps = [
  {
    icon: "📝",
    step: "STEP 1",
    title: "체질 상담",
    desc: "선엽스님의 동양의학적 접근을 바탕으로 고객의 현재 신체적·정신적 상태와 고유의 체질을 정밀하게 진단합니다.",
    isCore: false,
  },
  {
    icon: "🌿",
    step: "STEP 2",
    title: "맞춤형 웰니스 수행",
    desc: "진단 결과를 바탕으로 오직 한 사람만을 위한 K-Zen 자연치유 프로그램을 설계하고 실행합니다.",
    isCore: true,
    tags: ["🍵 힐링약차", "🧘 명상", "✨ 침향 테라피", "🥗 디톡스", "💆 피부 자연요법"],
  },
  {
    icon: "🍵",
    step: "STEP 3",
    title: "힐링 상담 (회향)",
    desc: "프로그램 수행 후의 변화를 점검하고, 일상으로 돌아가서도 치유를 이어갈 수 있는 라이프스타일 및 맞춤 약차를 처방합니다.",
    isCore: false,
  },
]

const programs = [
  {
    emoji: "🏢",
    title: "도심형 웰니스 프로그램",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    items: [
      { label: "목적", desc: "일상 속 즉각적인 스트레스 완화 및 케어" },
      { label: "형태", desc: "데이 스파(Day Spa), 반나절 리트릿" },
      { label: "핵심", desc: "침향 아로마 스파, 피부 자연요법, 다실 차명상" },
      { label: "타겟", desc: "바쁜 기업가, VIP, 단기 관광객" },
    ],
  },
  {
    emoji: "🌳",
    title: "자연형 팜스테이 프로그램",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    items: [
      { label: "목적", desc: "몸의 독소를 비우는 근본적인 체질 개선" },
      { label: "형태", desc: "체류형 리트릿 (1박 2일 ~ 7박 8일)" },
      { label: "핵심", desc: "딥 디톡스 식단, 대자연 명상, 약초 채집 체험" },
      { label: "타겟", desc: "심화 치유 목적객, 웰니스 관광객" },
    ],
  },
]

export function WellnessProgramSection() {
  return (
    <section id="program" className="py-24 md:py-32 px-6 bg-[#F9F6F0]">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#C5A880]/10 text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-6">
            Core Service Architecture
          </span>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E1A] mb-5">
            초개인화 맞춤형 웰니스 프로그램
          </h2>
          <p className="text-[#5A6B4A] text-lg font-light max-w-2xl mx-auto">
            단순한 휴식을 넘어, 고객의 체질과 라이프스타일에 맞춘<br className="hidden md:block" />
            근본적인 치유 솔루션을 제공합니다.
          </p>
        </div>

        {/* ── Part 1: 3-Step Healing Journey ── */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#2C3E1A] pb-4 border-b border-[#D4CFC5] inline-block px-8">
              The Healing Journey — 3단계 치유 프로세스
            </h3>
          </div>

          <div className="relative">
            {/* Dashed connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px border-t-2 border-dashed border-[#8FBC8F]/50 z-0" />

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Step icon circle */}
                  <div
                    className={`flex items-center justify-center rounded-full mb-6 transition-all duration-500 ${
                      step.isCore
                        ? "w-24 h-24 text-4xl bg-[#C5A880] shadow-xl shadow-[#C5A880]/30 group-hover:scale-110"
                        : "w-20 h-20 text-3xl bg-white shadow-md group-hover:bg-[#8FBC8F]/10 group-hover:scale-105"
                    }`}
                    style={{
                      border: step.isCore ? "4px solid #C5A880" : "3px solid #8FBC8F",
                    }}
                  >
                    {step.icon}
                  </div>

                  <span
                    className={`text-xs tracking-[0.25em] uppercase font-semibold mb-2 ${
                      step.isCore ? "text-[#C5A880]" : "text-[#8FBC8F]"
                    }`}
                  >
                    {step.step}
                  </span>

                  <h4
                    className={`font-[var(--font-cormorant)] mb-3 ${
                      step.isCore ? "text-2xl text-[#C5A880]" : "text-xl text-[#2C3E1A]"
                    }`}
                  >
                    {step.title}
                  </h4>

                  <p className="text-[#5A6B4A] text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  {/* Core program tags (Step 2 only) */}
                  {step.isCore && step.tags && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {step.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="bg-white border border-[#D4CFC5] text-[#2C3E1A] text-xs font-medium px-3 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Part 2: Dual-Track Program Harmony ── */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#EEF2E6] shadow-sm">
          <div className="text-center mb-3">
            <h3 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#2C3E1A]">
              Dual-Track Program Harmony
            </h3>
          </div>
          <p className="text-center text-[#5A6B4A] text-sm mb-10">
            고객의 일정과 치유 목적에 따라 두 가지 형태의 프로그램이 유기적으로 조화롭게 운영됩니다.
          </p>

          {/* Program cards + plus connector */}
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {programs.map((prog, i) => (
              <React.Fragment key={i}>
                <div className="flex-1 rounded-xl overflow-hidden border border-[#EEF2E6] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                  {/* Image */}
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prog.img}
                      alt={prog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-[var(--font-cormorant)] text-xl text-[#2C3E1A] mb-4">
                      {prog.emoji} {prog.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {prog.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-[#5A6B4A]">
                          <span className="text-[#8FBC8F] font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span>
                            <span className="font-semibold text-[#2C3E1A]">{item.label}: </span>
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plus connector between cards */}
                {i === 0 && (
                  <div className="flex items-center justify-center px-2 py-4 md:py-0">
                    <span className="font-[var(--font-cormorant)] text-5xl font-light text-[#C5A880]">+</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Conclusion box */}
          <div className="mt-8 p-6 bg-[#F9F6F0] rounded-xl border-l-4 border-[#C5A880]">
            <p className="text-[#2C3E1A] text-sm md:text-base leading-relaxed text-center">
              &ldquo;도심 센터에서의{" "}
              <strong>일상적 케어(Daily Care)</strong>와 팜스테이에서의{" "}
              <strong>집중 치유(Deep Detox)</strong>가 결합되어,<br className="hidden md:block" />
              단절없는 완벽한{" "}
              <strong className="text-[#C5A880]">K-Zen 웰니스 라이프스타일</strong>을 완성합니다.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
