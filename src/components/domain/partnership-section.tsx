const categories = [
  {
    icon: "🏨",
    title: "초럭셔리 리조트 & 호스피탈리티",
    groups: "Vingroup · Sun Group · BRG · BIM · Nova",
    desc: "베트남 최고급 인프라를 보유한 그룹. 단순 서양식 스파를 넘어 아시아 전통 치유 콘텐츠에 목말라 있음.",
    model: "도심 5성급 호텔 및 메가 리조트 내 'VIP K-Zen 웰니스 센터' 숍인숍 입점",
  },
  {
    icon: "🌿",
    title: "에코 팜스테이 & 라이프스타일",
    groups: "Flamingo · TTC · Sovico (Vietjet)",
    desc: "대자연(숲, 바다) 기반의 에코 리조트 및 항공(비엣젯) 연계 관광 인프라를 보유한 그룹.",
    model: "자연형 팜스테이 리트릿 공동 개발 및 항공권 연계 디톡스 투어 패키지 론칭",
  },
  {
    icon: "🍵",
    title: "F&B 유통 & 헬스케어 R&D",
    groups: "Trung Nguyen Legend · TH Group",
    desc: "'Zen(선) 철학'을 표방하는 1위 커피 그룹 및 대규모 약초/의료 인프라를 보유한 헬스케어 그룹.",
    model: "베트남 침향/약초 활용 기능성 약차 공동 R&D 및 전국 VIP 라운지 B2B 유통",
  },
]

const archItems = [
  {
    title: "선엽스님 K-Zen 코어",
    sub: "Software & IP",
    points: ["한국 사찰 약차 레시피", "체질 맞춤형 자연치유 철학", "K-Zen 차명상 프로그램"],
    dark: false,
  },
  {
    title: "베트남 Top 그룹사",
    sub: "Hardware & Capital",
    points: ["초럭셔리 리조트 공간", "막강한 VIP 고객 풀", "현지 약초/침향 인프라"],
    dark: false,
  },
  {
    title: "SUNYEOP ZEN RETREAT",
    sub: "Global Wellness Platform",
    points: ["도심형 VIP 웰니스 센터", "자연형 팜스테이 리트릿", "글로벌 MD 상품 수출"],
    dark: true,
  },
]

const insights = [
  {
    num: "1",
    title: "K-Culture 프리미엄 활용",
    desc: "단순 제휴가 아닌 \"한국 전통 사찰 치유의 정수를 베트남 VIP에게 독점 제공한다\"는 문화적 우위와 희소성을 강조하여 협상 주도권 확보.",
  },
  {
    num: "2",
    title: "B2B 마스터 프랜차이즈 지향",
    desc: "직접 매장을 짓고 운영하는 리스크를 배제. 그룹사에 공간/자본 투자를 맡기고, 프로그램 기획 및 로열티(위탁 경영) 수익을 창출하는 모델.",
  },
  {
    num: "3",
    title: "침향(Agarwood) 스토리텔링",
    desc: "베트남의 풍부한 자원인 '침향'을 한국 명인의 비법으로 가공하여 부가가치를 극대화한다는 논리로 현지 대기업의 R&D 투자 유도.",
  },
]

export function PartnershipSection() {
  return (
    <section className="bg-[#2C3E1A]">

      {/* ── Part 1: 파트너십 타겟 그룹핑 ── */}
      <div className="py-24 md:py-32 px-6 border-b border-[#F9F6F0]/10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-4">
            <span className="inline-block bg-[#C5A880]/15 text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6">
              Target Strategy
            </span>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#F9F6F0] mb-4 mt-2">
              베트남 진출 전략적 파트너십 매핑
            </h2>
            <p className="text-[#F9F6F0]/60 text-base md:text-lg pb-6 border-b border-[#F9F6F0]/10">
              10대 잠재 협력 그룹사를 3대 핵심 카테고리로 병합하여 맞춤형 제안 추진
            </p>
          </div>

          {/* 3 Category Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group flex flex-col bg-[#F9F6F0]/5 border border-[#F9F6F0]/10 rounded-2xl p-7 transition-all duration-500 hover:bg-[#F9F6F0]/10 hover:border-[#C5A880]/40"
              >
                {/* Icon */}
                <div className="text-4xl mb-5">{cat.icon}</div>

                {/* Title */}
                <h3 className="font-[var(--font-cormorant)] text-xl font-medium text-[#F9F6F0] mb-4 leading-snug">
                  {cat.title}
                </h3>

                {/* Group badge */}
                <div className="inline-block bg-[#C5A880]/15 text-[#C5A880] text-xs font-semibold px-3 py-1.5 rounded mb-4 self-start">
                  {cat.groups}
                </div>

                {/* Description */}
                <p className="text-[#F9F6F0]/60 text-sm leading-relaxed mb-5 flex-1">
                  {cat.desc}
                </p>

                {/* Cooperation model */}
                <div className="border-l-4 border-[#6b8e23] bg-[#F9F6F0]/5 px-4 py-3 rounded-r-lg">
                  <p className="text-[#F9F6F0]/50 text-[10px] tracking-[0.2em] uppercase font-semibold mb-1">
                    협력 모델
                  </p>
                  <p className="text-[#F9F6F0]/80 text-sm leading-relaxed">
                    {cat.model}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Part 2: 시너지 아키텍처 & 핵심 시사점 ── */}
      <div className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-4">
            <span className="inline-block bg-[#C5A880]/15 text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6">
              Business Architecture &amp; Insights
            </span>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#F9F6F0] mb-4 mt-2">
              K-Zen 웰니스 융합 비즈니스 모델
            </h2>
            <p className="text-[#F9F6F0]/60 text-base md:text-lg pb-6 border-b border-[#F9F6F0]/10">
              소프트웨어(선엽스님 IP)와 하드웨어(베트남 자본)의 결합을 통한 리스크 최소화 및 스케일업
            </p>
          </div>

          {/* Architecture diagram */}
          <div className="flex flex-col md:flex-row items-center gap-4 bg-[#F9F6F0]/5 border border-[#F9F6F0]/10 rounded-2xl p-8 mt-10 mb-12">
            {archItems.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 flex-1 w-full">
                <div
                  className={`flex-1 w-full rounded-xl p-6 text-center ${
                    item.dark
                      ? "bg-[#1a2510] border border-[#C5A880]/30"
                      : "bg-white/10 border border-[#F9F6F0]/10"
                  }`}
                >
                  <h4
                    className={`font-[var(--font-cormorant)] text-lg font-medium mb-1 ${
                      item.dark ? "text-[#8FBC8F]" : "text-[#F9F6F0]"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[#F9F6F0]/40 text-xs tracking-wide mb-4">
                    ({item.sub})
                  </p>
                  <ul className="space-y-1.5">
                    {item.points.map((pt, j) => (
                      <li
                        key={j}
                        className={`text-sm ${
                          item.dark ? "text-[#F9F6F0]/70" : "text-[#F9F6F0]/60"
                        }`}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Operator between items */}
                {i < archItems.length - 1 && (
                  <div className="text-[#8FBC8F] text-3xl font-bold flex-shrink-0 rotate-90 md:rotate-0">
                    {i === 0 ? "✖" : "＝"}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-5">
            {insights.map((ins, i) => (
              <div
                key={i}
                className="bg-[#F9F6F0]/5 border-t-4 border-[#C5A880] rounded-xl p-6 hover:bg-[#F9F6F0]/10 transition-colors duration-300"
              >
                <h4 className="text-[#C5A880] font-semibold text-sm mb-3">
                  {ins.num}. {ins.title}
                </h4>
                <p className="text-[#F9F6F0]/65 text-sm leading-relaxed">
                  {ins.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 text-center p-10 rounded-2xl border border-[#C5A880]/20 bg-[#C5A880]/5">
            <p className="font-[var(--font-cormorant)] text-2xl md:text-3xl text-[#F9F6F0]/80 italic font-light mb-4">
              &ldquo;당신의 공간에 선엽의 철학을 담습니다.&rdquo;
            </p>
            <p className="text-[#F9F6F0]/50 text-sm tracking-wide">
              파트너십 제안 및 사전 협의 문의 →{" "}
              <a
                href="mailto:rarara0002@naver.com"
                className="text-[#C5A880] hover:text-[#D4B896] transition-colors underline underline-offset-4"
              >
                rarara0002@naver.com
              </a>
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
