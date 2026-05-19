"use client"

const zones = [
  {
    id: "01",
    badge: "ZONE 01",
    enTitle: "Heritage Tea Lounge",
    koTitle: "한국 약차 다실",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    items: [
      { label: "제공", desc: "체질별 맞춤 약차, 계절 꽃차, 침향차, 수면/디톡스차" },
      { label: "기능", desc: "웰컴 라운지 및 약차/MD 상품 전시 및 판매 공간" },
      { label: "디자인", desc: "한국 사찰 다실의 미니멀리즘 현대적 재해석" },
    ],
    mood: { icon: "🍵", text: "전통 한지, 짙은 목재, 자연석, 은은한 명상 음악" },
  },
  {
    id: "02",
    badge: "ZONE 02",
    enTitle: "Agarwood Sanctuary",
    koTitle: "침향 아로마 스파",
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    items: [
      { label: "프로그램", desc: "침향 오일 마사지, 두피 순환 케어, 숙면 테라피" },
      { label: "기능", desc: "\"향으로 마음을 치료하는\" 프라이빗 심신 안정 케어" },
      { label: "디자인", desc: "조도를 낮춘 프라이빗 룸, 간접 조명, 향로 오브제" },
    ],
    mood: { icon: "✨", text: "베트남 최고급 침향의 깊은 향, 따뜻한 온기, 완벽한 고요" },
  },
  {
    id: "03",
    badge: "ZONE 03",
    enTitle: "Botanica Skin Clinic",
    koTitle: "피부 자연요법 센터",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    items: [
      { label: "프로그램", desc: "약초 스팀, 한방 피부팩, 발효 약초 케어, 약초 족욕" },
      { label: "기능", desc: "선엽스님의 강점인 '식물 기반 문제성 피부 회복'" },
      { label: "디자인", desc: "자연 채광이 들어오는 밝고 깨끗한 에코-메디컬 무드" },
    ],
    mood: { icon: "🌿", text: "신선한 약초 내음, 화이트 & 세이지 그린 톤, 청결함" },
  },
  {
    id: "04",
    badge: "ZONE 04",
    enTitle: "Zen Detox & Consultation",
    koTitle: "한국형 디톡스 & 명상 라운지",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
    items: [
      { label: "프로그램", desc: "1:1 체질 상담, 도심형 데이(Day) 디톡스, 싱잉볼 명상" },
      { label: "기능", desc: "고객의 상태를 진단하고 팜스테이(심화)로 연결하는 허브" },
      { label: "디자인", desc: "시각적 자극을 최소화한 여백의 미, 좌식 명상 쿠션" },
    ],
    mood: { icon: "🧘", text: "완벽한 비움(Zen), 부드러운 패브릭, 싱잉볼의 파동" },
  },
]

export function ZoneCardsSection() {
  return (
    <section id="sanctuary" className="py-24 md:py-32 px-6 bg-[#F9F6F0]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C5A880] text-sm tracking-[0.3em] uppercase mb-4 block">
            도심형 웰니스 센터 공간 구성 시안
          </span>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-[#2C3E1A] mb-6">
            4대 핵심 K-Zen 힐링 스페이스
          </h2>
          <p className="text-[#5A6B4A] max-w-2xl mx-auto text-lg leading-relaxed">
            VIP 고객의 오감(五感)을 만족시키는 4가지 핵심 K-Zen 힐링 스페이스
          </p>
        </div>

        {/* Zone Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2C3E1A]/10 transition-all duration-500 flex flex-col border border-[#EEF2E6]"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={zone.img}
                  alt={zone.koTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#4a5d23] text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
                    {zone.badge}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1">
                {/* Title */}
                <div className="border-b border-[#EEF2E6] pb-4 mb-5">
                  <h3 className="font-[var(--font-cormorant)] text-2xl font-medium text-[#2C3E1A]">
                    {zone.enTitle}
                  </h3>
                  <p className="text-[#5A6B4A]/70 text-sm mt-1">{zone.koTitle}</p>
                </div>

                {/* Detail List */}
                <ul className="space-y-3 mb-6 flex-1">
                  {zone.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#5A6B4A]">
                      <span className="text-[#C5A880] mt-0.5 flex-shrink-0">✦</span>
                      <span>
                        <span className="font-semibold text-[#2C3E1A]">{item.label}: </span>
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Mood Tag */}
                <div className="flex items-center gap-3 bg-[#F9F6F0] rounded-xl px-4 py-3">
                  <span className="text-xl flex-shrink-0">{zone.mood.icon}</span>
                  <p className="text-[#4a5d23] text-xs font-medium leading-relaxed">
                    <span className="text-[#C5A880]">연출 무드: </span>
                    {zone.mood.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
