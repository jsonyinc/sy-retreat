// src/app/greensoultea/page.tsx
"use client"

import React from 'react';

export default function GreenSoulTeaPage() {
  return (
    <div className="antialiased overflow-x-hidden bg-[#fcfbf9] text-[#2c3e2b] font-sans">
      {/* 폰트 및 커스텀 스타일 주입 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,600;1,400&display=swap');
        
        .custom-font-sans { font-family: 'Noto Sans KR', sans-serif; }
        .serif-font { font-family: 'Playfair Display', 'Noto Sans KR', serif; }
        
        .hover-zoom:hover img {
            transform: scale(1.03);
            transition: transform 0.5s ease;
        }
        .hover-zoom img {
            transition: transform 0.5s ease;
        }
      `}} />

      <div className="custom-font-sans">
        {/* TOP ANNOUNCEMENT BANNER */}
        <div className="bg-emerald-900 text-amber-100 text-center py-3 px-4 text-xs sm:text-sm font-medium tracking-wider">
          📢 <span className="underline">안심 보장 혜택</span> : 본품 구매 시 시음용 미니 앰플(20ml) 증정! 먼저 체험해 보시고 불만족 시 100% 무료 반품해 드립니다.
        </div>

        {/* MAIN WRAPPER */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm border-x border-gray-100 pb-20">

          {/* LOGO HEADER */}
          <header className="py-10 text-center border-b border-gray-50">
            {/* 이미지 파일명 영문 변경 적용 */}
            <img src="/images/greensoultea/logo.png" alt="마음정원 로고" className="mx-auto h-16 object-contain" />
          </header>

          {/* SECTION 1. OPENING HOOK (Hero Section) */}
          <section className="relative bg-gradient-to-b from-stone-50 to-white px-6 py-16 text-center">
            <div className="mb-4">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-widest">Premium Green Tea Concentrate</span>
            </div>
            
            <h1 className="serif-font text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 leading-tight mb-6">
              당류 가득한 음료 대신,<br />
              내 몸을 깨우는 가장 순수한 리프레시
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              부모님의 아침 공복에도 편안한 수분 보충부터,<br className="hidden sm:block" />
              나를 위한 제로 칼로리 아이스 웰니스 루틴까지 단 몇 초 만에 완성합니다.
            </p>

            {/* VIDEO CONTAINER PLACEHOLDER */}
            <div className="w-full aspect-video bg-stone-100 border border-stone-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-center items-center mb-10 group relative">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 filter blur-sm" style={{ backgroundImage: "url('/images/greensoultea/product-1.jpg')" }}></div>
              <div className="z-10 text-center px-4">
                <div className="w-16 h-16 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-emerald-700 transition">
                  <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-emerald-950 font-bold text-lg mb-1">맑은 황금빛 원액이 퍼져나가는 고화질 영상</p>
                <p className="text-emerald-900 text-xs">(추후 촬영본 비디오 링크로 대체 예정 영역)</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-left space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100/60">
              <p>
                내 몸에 닿는 음료 하나도 꼼꼼하게 고르는 <strong>4050 부모님 세대</strong>부터, 지치기 쉬운 일상 속 가볍고 힙(Hip)한 웰니스 라이프를 갈망하는 <strong>2030 MZ 세대</strong>까지 세대를 뛰어넘어 모두를 매료시키는 맑은 명차를 선사합니다.
              </p>
              <p>
                찌는 듯한 더위 속에서도 타협할 수 없는 품격을 위해, 이제 얼음잔과 그린 소울 티 원액 하나만 준비하십시오. 찬물이나 가득 찬 얼음에도 닿는 순간 잔여물 없이 사르르 퍼지는 탁월한 고농축 가공 덕분에 언제 어디서나 바로 진한 향미를 만끽할 수 있습니다.
              </p>
              <p>
                귀찮게 차를 우리기 위해 기다릴 여유가 없어도, 찌꺼기 처리가 번거로워 미뤄두었던 다도 라이프가 단 몇 초 만에 현실이 됩니다. 대한민국 전통 수제차 명인 선엽스님이 자연의 기운만을 응축해 만든 단 한 병의 기적이 당신의 하루를 투명하고 가볍게 정화해 줄 것입니다.
              </p>
            </div>
          </section>

          {/* PRODUCT IMAGE SHOWCASE 1 */}
          <section className="py-12 bg-white px-6 text-center hover-zoom overflow-hidden">
            <img src="/images/greensoultea/product-1.jpg" alt="그린 소울 티 원액 1L 다도 연출컷" className="mx-auto rounded-3xl shadow-lg max-h-[600px] object-cover w-full md:w-5/6" />
            <p className="text-xs text-gray-400 mt-3">※ 명인의 손끝에서 탄생한 1L 프리미엄 그린 소울 티 대용량 보틀 패키지</p>
          </section>

          {/* SECTION 2. 명인의 철학과 정통성 */}
          <section className="py-16 bg-stone-50 px-6 sm:px-12 border-y border-stone-100">
            <div className="text-center mb-10">
              <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">The Craftsmanship</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-stone-900 mt-2">30년의 집념, 전통 다법(茶法) 연구에 바친 세월</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-2xl overflow-hidden shadow-md bg-white p-2">
                <img src="/images/greensoultea/process-1.png" alt="선엽스님 수제 법제 덖음 작업" className="w-full aspect-[4/3] object-cover rounded-xl" />
                <p className="text-xs text-stone-500 mt-2 text-center font-medium">전통 가마솥에서 고온 수제 덖음으로 맛과 자극을 다스리는 모습</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md bg-white p-2">
                <img src="/images/greensoultea/process-2.png" alt="차를 정성스럽게 우리는 선엽스님" className="w-full aspect-[4/3] object-cover rounded-xl" />
                <p className="text-xs text-stone-500 mt-2 text-center font-medium">엄격한 전통 처방 다법의 품격을 연구하는 과정</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center mb-10">
              <blockquote className="serif-font text-lg sm:text-xl italic text-emerald-900 font-medium mb-6">
                "차(茶)를 마신다는 것은 몸의 무거운 기운을 비우고,<br className="hidden sm:block" />
                자연 고유의 맑은 생기를 온전히 채우는 시간입니다."
              </blockquote>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-left">
                대한민국 수제차 명가 마음정원의 선엽스님은 바쁜 현대 사회 속에서 과도한 당류 음료와 차갑고 강한 카페인 자극에 무방비로 노출된 현대인의 상태를 끊임없이 염려해왔습니다. 
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-left mt-4">
                그 고민의 결실인 <strong>‘그린 소울 티(Green Soul Tea)’</strong>는 까다롭고 번거로운 다도 기구 없이도, 남녀노소 누구나 첫 공복 아침부터 한밤중 편안한 휴식까지 맑고 부드러운 순수 녹차의 힐링 기운을 그대로 경험할 수 있도록 현대적인 초간편 고농축 원액으로 빚어냈습니다.
              </p>
            </div>

            <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100 max-w-xl mx-auto hover-zoom overflow-hidden">
              <img src="/images/greensoultea/process-3.png" alt="선엽스님 다도 연구 및 품평회" className="rounded-2xl w-full object-cover" />
              <p className="text-xs text-stone-400 mt-2 text-center">차의 대중화와 올바른 현대적 음용법을 위해 끊임없이 연구·지도해온 행보</p>
            </div>
          </section>

          {/* SECTION 3. 글로벌 미식 기관이 인정한 맛의 균형 */}
          <section className="py-16 bg-white px-6 sm:px-12">
            <div className="text-center mb-10">
              <span className="text-amber-600 font-semibold tracking-widest text-xs uppercase">Global Credibility</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-gray-950 mt-2">글로벌 미식가가 인정한 부드럽고 품격 있는 균형감</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto mb-10 bg-gradient-to-r from-emerald-50/40 to-stone-50/40 p-6 sm:p-8 rounded-3xl border border-emerald-50">
              <div className="text-center md:text-left space-y-4">
                <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-md font-bold uppercase">ITI 2026 Award Winners</span>
                <h3 className="text-xl font-bold text-emerald-950 leading-snug">
                  미슐랭 스타 셰프 200인이 극찬한<br />명가 전통의 맛과 맑은 향
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  세계 최고 권위의 국제식음료품평원(ITI, 벨기에 브뤼셀)에서 선엽스님의 고유 제조 공법 가치가 적용된 제품군이 영예의 <strong>'Superior Taste Award 2 Stars (★★)'</strong>를 수상하였습니다.
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <img src="/images/greensoultea/award-star.png" alt="ITI Superior Taste Award 2026 2 Stars" className="h-32 sm:h-40 object-contain drop-shadow-md" />
                <img src="/images/greensoultea/award-logo.png" alt="Superior Taste Award Award text logo" className="h-24 sm:h-32 object-contain hidden sm:block" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-sm hover-zoom">
                <img src="/images/greensoultea/award-photo-1.jpg" alt="ITI 2026 글로벌 미식 품평회 현장 사진 1" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm hover-zoom">
                <img src="/images/greensoultea/award-photo-2.jpg" alt="ITI 2026 글로벌 미식 품평회 현장 사진 2" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center mt-8">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                전 세계 최고 소믈리에와 셰프 심사위원이 철저히 브랜드를 감춘 <strong>블라인드 테스트(Blind Test)</strong> 방식 하에 극찬한 풍미가 고스란히 담겨있습니다. 
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left mt-3">
                녹차 고유의 떫은 자극은 극적으로 다듬어 순하게 가라앉히고, 입안 가득 맑고 은은한 황금빛 균형을 지켜내는 선엽스님의 정밀한 고온 법제 기술력은 이제 집에서 물 한 잔만으로 가장 완벽하게 음미하실 수 있습니다.
              </p>
            </div>
          </section>

          {/* PRODUCT IMAGE SHOWCASE 2 */}
          <section className="py-12 bg-stone-50 px-6 text-center hover-zoom overflow-hidden">
            <img src="/images/greensoultea/product-2.jpg" alt="그린 소울 티 원액 1L 수직 정면 실물컷" className="mx-auto rounded-3xl shadow-lg max-h-[600px] object-cover w-full md:w-5/6" />
            <p className="text-xs text-gray-400 mt-3">※ 무착색, 무향료로 원물 고유의 신선함을 투명하게 담았습니다.</p>
          </section>

          {/* SECTION 4. 독점적 공법과 부드러움의 차이 */}
          <section className="py-16 bg-white px-6 sm:px-12">
            <div className="text-center mb-10">
              <span className="text-emerald-800 font-semibold tracking-widest text-xs uppercase">Product Premium Quality</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-gray-950 mt-2">차원이 다른 깊이, 무엇이 다를까요?</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-sm border border-stone-100">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-emerald-950 text-white text-xs sm:text-sm tracking-wide">
                    <th className="p-4 font-bold border-r border-emerald-900/40">비교 항목</th>
                    <th className="p-4 font-medium border-r border-emerald-900/40 bg-emerald-950/85">일반 우림형 녹차 (티백/잎차)</th>
                    <th className="p-4 font-extrabold bg-amber-600">선엽스님 그린 소울 티 (농축 원액)</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold bg-stone-50/40 border-r border-stone-100">핵심 제조 공법</td>
                    <td className="p-4 text-gray-600 border-r border-stone-100">단순 건조 및 잎 우림 가공</td>
                    <td className="p-4 text-emerald-900 font-bold bg-amber-50/40">전통 수제 증숙/덖음 및 고압 순환 추출</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold bg-stone-50/40 border-r border-stone-100">맛의 특징</td>
                    <td className="p-4 text-gray-600 border-r border-stone-100">오래 우려낼 시 떫은 탄닌으로 쓰고 거칠어짐</td>
                    <td className="p-4 text-emerald-900 font-bold bg-amber-50/40">떫고 쓴맛을 현저히 낮춘 정갈하고 맑은 풍미</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold bg-stone-50/40 border-r border-stone-100">음용 편의성</td>
                    <td className="p-4 text-gray-600 border-r border-stone-100">찬물에 잘 우러나지 않아 온수 필수, 공복 시 자극적임</td>
                    <td className="p-4 text-emerald-900 font-bold bg-amber-50/40">찬물과 얼음에도 즉시 녹아내리며 아침 첫잔도 편안한 목넘김</td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-4 font-bold bg-stone-50/40 border-r border-stone-100">취향 맞춤 조절</td>
                    <td className="p-4 text-gray-600 border-r border-stone-100">정밀 농도 조절 불가, 오래 방치하면 탁도 증가</td>
                    <td className="p-4 text-emerald-900 font-bold bg-amber-50/40">개인의 취향대로 연하고 진하게 미세 자율 조율 가능</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5. 6단계 안심 제조 공정 */}
          <section className="py-16 bg-stone-50 px-6 sm:px-12">
            <div className="text-center mb-10">
              <span className="text-stone-500 font-semibold tracking-widest text-xs uppercase">Process Reliability</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-stone-900 mt-2">정성으로 가공하고 엄격히 완성하는 6단계 공정</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-bold text-stone-100">01</span>
                <h4 className="font-bold text-emerald-950 mb-1 text-sm sm:text-base relative z-10">어린 찻잎 엄선</h4>
                <p className="text-xs text-stone-500 leading-normal">국내 청정 지역 하동·보성의 최상급 어린 녹차잎 수확</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-bold text-stone-100">02</span>
                <h4 className="font-bold text-emerald-950 mb-1 text-sm sm:text-base relative z-10">수제 덖음 증숙</h4>
                <p className="text-xs text-stone-500 leading-normal">명인의 손맛과 철학이 가득 담긴 특허 법제 가공</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-bold text-stone-100">03</span>
                <h4 className="font-bold text-emerald-950 mb-1 text-sm sm:text-base relative z-10">탄닌 자극 제어</h4>
                <p className="text-xs text-stone-500 leading-normal">거칠고 날카로운 탄닌과 강한 성질을 마일드하게 순화</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-bold text-stone-100">04</span>
                <h4 className="font-bold text-emerald-950 mb-1 text-sm sm:text-base relative z-10">정밀 순환 추출</h4>
                <p className="text-xs text-stone-500 leading-normal">HACCP 안전 가동 설비를 거친 깨끗한 고압 저온추출</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-bold text-stone-100">05</span>
                <h4 className="font-bold text-emerald-950 mb-1 text-sm sm:text-base relative z-10">고밀도 영양 농축</h4>
                <p className="text-xs text-stone-500 leading-normal">녹차 고유 유효 성분(폴리페놀 등)을 정밀 농축</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
                <span className="absolute top-2 right-3 text-3xl font-bold text-amber-100">06</span>
                <h4 className="font-bold text-emerald-950 mb-1 text-sm sm:text-base relative z-10">완벽 세이프 위생</h4>
                <p className="text-xs text-stone-500 leading-normal">3중 미세 여과와 철저한 정량 위생 병입 포장</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-stone-600 text-xs sm:text-sm bg-white p-6 rounded-2xl border border-stone-200/50 leading-relaxed shadow-sm">
              <span className="font-bold text-emerald-950 block mb-2">[HACCP 안심 위생 프로세스 스크립트]</span>
              그린 소울 티는 친환경 식약처 안전 기준을 완벽 통과한 HACCP 가공 설비 하에 투명하고 건강하게 제조됩니다. 일반 녹차의 거친 성질을 보완하여 첫 공복에도 속 쓰림 없이 부드럽게 마실 수 있도록 섬세한 덖음 덖고 찌는 처리를 고집했으며, 정밀 추출을 통하여 수백 잔을 희석할 수 있는 알찬 대용량 1L 고농축 원액을 깨끗하고 순수하게 맑은 물과 결합하여 안전하게 전달합니다.
            </div>
          </section>

          {/* SECTION 6. 온 가족 세대별 웰니스 라이프스타일 루틴 */}
          <section className="py-16 bg-white px-6 sm:px-12">
            <div className="text-center mb-10">
              <span className="text-emerald-800 font-semibold tracking-widest text-xs uppercase">Generation-Free Wellness</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-gray-950 mt-2">나이 불문, 취향 불문<br />내 몸에 완벽한 나만의 맑음 맞춤</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-50/50 to-emerald-100/10 p-6 sm:p-8 rounded-3xl border border-emerald-100/50">
                <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">4050 부모님 클래식 루틴</span>
                <h3 className="serif-font text-xl font-bold text-emerald-950 mt-2 mb-4">정갈하고 차분한 식후 명다(名茶)</h3>
                <p className="text-sm text-stone-700 leading-relaxed mb-6">
                  기름진 아침, 저녁 식사 직후 입안 가득 감도는 텁텁함을 맑게 비워줍니다. 따뜻한 물 한 잔에 <strong>그린 소울 티 원액을 본인의 입맛 농도에 맞게 톡톡 가볍게 떨어뜨려</strong> 깊고 부드러운 차의 고요함을 누려보세요. 떫지 않은 포근한 수분 공급이 매일 아침의 컨디션을 기분 좋게 가꾸어 드립니다.
                </p>
                <div className="border-t border-emerald-100/80 pt-4">
                  <span className="text-xs text-stone-500 font-bold block mb-1">💡 이런 분들께 강추!</span>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li>✔ 공복이나 한밤중에도 속 편안한 마무리를 찾으시는 분</li>
                    <li>✔ 커피의 자극과 카페인 부하를 편안하게 대체하고 싶으신 분</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/20 to-amber-100/10 p-6 sm:p-8 rounded-3xl border border-amber-100/30">
                <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest">2030 MZ 트렌디 웰니스</span>
                <h3 className="serif-font text-xl font-bold text-stone-900 mt-2 mb-4">당류 제로, 칼로리 제로 가벼운 아이스 루틴</h3>
                <p className="text-sm text-stone-700 leading-relaxed mb-6">
                  액상 시럽이 든 주스 대신 웰빙 트렌드를 선도할 힙한 얼음 콜드브루 스타일! 텀블러 얼음컵이나 청량한 탄산수 500ml에 <strong>나의 하루 컨디션에 적합한 농도로 원액을 시원하게 믹스</strong>해보세요. 운동 전후 수분 보충이나 야근 중 나른한 집중력이 필요할 때 완벽한 무가당 웰니스 티로 거듭납니다.
                </p>
                <div className="border-t border-amber-100/50 pt-4">
                  <span className="text-xs text-stone-500 font-bold block mb-1">💡 이런 분들께 강추!</span>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li>✔ 탄산음료나 액상과당 대신 가볍고 힙한 다이어트 워터를 찾는 분</li>
                    <li>✔ 외출 시 한 병으로 하루 수백 잔의 맑은 건강 물병을 유지할 분</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-stone-50 p-6 rounded-2xl border border-stone-200/60 text-center">
              <span className="font-extrabold text-emerald-950 text-sm sm:text-base block mb-2">🎯 [나만의 맞춤 농도 조절 가이드]</span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                그린 소울 티는 순수한 전통 수제 농축액으로, 획일화된 드롭 수가 필요하지 않습니다.<br />
                <strong>은은하고 가볍게 수분 보충용</strong>으로 마실 때는 연하게 톡 한 번,<br />
                <strong>식후 아주 깔끔하고 짙은 향미</strong>를 즐기고 싶을 때는 진하게 여러 번 톡톡 믹싱하여 최적의 취향을 찾아보세요!
              </p>
            </div>
          </section>

          {/* SECTION 4-Option. 프리미엄 보자기 포장 옵션 */}
          <section className="py-16 bg-stone-50 px-6 sm:px-12 border-y border-stone-100">
            <div className="text-center mb-10">
              <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">Premium Gifting Service</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-gray-950 mt-2">마음을 전하는 가장 격조 높은 품격<br />수제 보자기 포장 옵션</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-10">
              <blockquote className="serif-font text-base sm:text-lg italic text-emerald-950 font-bold mb-6">
                "소중한 분의 안녕과 맑은 하루를 기원하는 당신의 높은 안목을 보자기 한 폭에 담았습니다."
              </blockquote>
              <p className="text-stone-700 text-sm leading-relaxed max-w-2xl mx-auto">
                주는 이의 정중함과 받는 이의 정성 가득함을 아울러 드리기 위하여 최고급 포장 서비스를 제안합니다. 
                그린 소울 티만의 무겁고 화려한 가치를 실크 원단 공예 포장에 담아 선물해 보세요.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-sm border border-stone-200/80 max-w-3xl mx-auto bg-white mb-10">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-emerald-900 text-white text-xs sm:text-sm tracking-wide">
                    <th className="p-4 font-bold border-r border-emerald-800">구분 (Category)</th>
                    <th className="p-4 font-bold border-r border-emerald-800">세부 사양 (Specifications)</th>
                    <th className="p-4 font-bold">비즈니스 가치 및 소구점</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50">
                    <td className="p-4 font-bold bg-stone-50 border-r border-stone-100 min-w-[120px]">보자기 소재 및 색상</td>
                    <td className="p-4 text-stone-700 border-r border-stone-100">양면 실크 사틴(공단) 직물 사용, 외면은 녹차의 깊은 생명력을 상징하는 딥 에메랄드 그린, 내면은 ITI 2 Stars 수상의 품격을 상징하는 은은한 샴페인 골드 색상 구성</td>
                    <td className="p-4 text-emerald-900 font-bold bg-emerald-50/20">저가형 노방 보자기와 차별화되는 묵직한 광택감으로 첫인상에서 압도적인 프리미엄 가치 부여</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-4 font-bold bg-stone-50 border-r border-stone-100">전통 매듭 및 오브제</td>
                    <td className="p-4 text-stone-700 border-r border-stone-100">기원과 감사의 의미를 담은 매화 매듭 수제 연출 및 은은한 백옥 재질의 나비 노리개 결착</td>
                    <td className="p-4 text-emerald-900 font-bold bg-emerald-50/20">박스를 열기 전 오브제를 통해 받는 이의 기대감을 고조시키고 노리개는 인테리어 소품으로 재활용 가능</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-4 font-bold bg-stone-50 border-r border-stone-100">내부 인서트 고정재</td>
                    <td className="p-4 text-stone-700 border-r border-stone-100">친환경 크라프트 고밀도 압축 패드 및 상단 격자 한지 덮개 레이어 구성</td>
                    <td className="p-4 text-emerald-900 font-bold bg-emerald-50/20">1L 대용량 보틀의 흔들림을 방지하는 안전성 확보 및 개봉 시 전통 명가 특유의 정갈한 아름다움 선사</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-4 font-bold bg-stone-50 border-r border-stone-100">명인의 보증서</td>
                    <td className="p-4 text-stone-700 border-r border-stone-100">선엽스님의 인장과 친필 서명이 인쇄된 수제 두꺼운 한지 형태의 '명방 보증서' 동봉</td>
                    <td className="p-4 text-emerald-900 font-bold bg-emerald-50/20">제품을 일반 식품이 아닌 명인의 정수가 가득 찬 '문화적 자산'으로 간주하게 하여 품격 완성</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-xs text-stone-400">
              ※ 보자기 포장은 구매 시 별도의 '유료 옵션 패키지'를 통해 안전하고 단단한 택배 맞춤 완충 박스 배송 형태로 제공됩니다.
            </p>
          </section>

          {/* SECTION 7. 제품 상세 고시 및 안심 팩트 체크 */}
          <section className="py-16 bg-white px-6 sm:px-12">
            <div className="text-center mb-10">
              <span className="text-emerald-800 font-semibold tracking-widest text-xs uppercase">Fact Check & Spec</span>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-gray-950 mt-2">꼼꼼하게 드리는 투명한 정보</h2>
              <div className="w-12 h-0.5 bg-emerald-800 mx-auto mt-4"></div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 mb-12">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <h4 className="font-extrabold text-emerald-950 text-sm sm:text-base mb-2">Q. 원재료명에 있는 '소르빈산칼륨'은 안전한 성분인가요?</h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  <strong>A. 네, 안심하고 드셔도 좋습니다.</strong> 그린 소울 티는 가공 방부제 범벅의 타 음료와 달리 순수 추출 가공에 근접한 1L 대용량 무감미 원액입니다. 장기 보관하며 일상에서 소분 시 공기 접촉과 침샘, 미생물 혼입 변질을 철저하게 지켜내기 위한 국가 허용 최소 수준의 필수적인 신선 안전 보존 장치입니다. 기준치를 현격히 밑도는 극소량 조율로 맑은 녹차 고유 성분을 가장 건강하고 변함없이 보관해 드립니다.
                </p>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <h4 className="font-extrabold text-emerald-950 text-sm sm:text-base mb-2">Q. 보관은 어떻게 하면 되나요?</h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  <strong>A. 개봉 전에는 상온 보관이 가능합니다.</strong> 직사광선을 피해 서늘한 실온에 보관해 주십시오. 개봉 후에는 마지막 한 방울까지 갓 빚은 듯한 풍미를 지켜내기 위하여 가급적 냉장 보관을 권장하며 빠르게 음용해 주시기 바랍니다.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto border border-stone-200 rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
              <h3 className="font-bold text-emerald-950 mb-4 border-b border-stone-200 pb-2 text-sm sm:text-base">제품 상세 고시 정보</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                <div>
                  <span className="font-bold block text-stone-500 mb-1">제품명</span>
                  <p className="font-medium">녹차원액 (GREEN SOUL TEA)</p>
                </div>
                <div>
                  <span className="font-bold block text-stone-500 mb-1">식품의 유형</span>
                  <p className="font-medium">침출차/액상차</p>
                </div>
                <div>
                  <span className="font-bold block text-stone-500 mb-1">내용량</span>
                  <p className="font-medium">1L 대용량 원액</p>
                </div>
                <div>
                  <span className="font-bold block text-stone-500 mb-1">원재료명 및 함량</span>
                  <p className="font-medium">국내산 녹차잎, 정제수, 소르빈산칼륨(안심 보존제)</p>
                </div>
                <div>
                  <span className="font-bold block text-stone-500 mb-1">제조원</span>
                  <p className="font-medium">선엽스님의 자연을 마시는 힐링차 (경기도 고양시 덕양구 오금동)</p>
                </div>
                <div>
                  <span className="font-bold block text-stone-500 mb-1">보관방법</span>
                  <p className="font-medium">실온 및 서늘한 곳 보관 (개봉 후 반드시 밀봉 후 냉장보관)</p>
                </div>
              </div>
            </div>
          </section>

          {/* WIDGET: LEGAL DISCLAIMER BANNER */}
          <section className="max-w-2xl mx-auto px-6 mb-10">
            <div className="bg-amber-50/40 border border-amber-200/50 p-4 rounded-xl text-center">
              <p className="text-[10px] sm:text-xs text-amber-900/80 leading-relaxed font-medium">
                * 본 제품은 질병의 예방 및 치료를 위한 의약품이 아닌 일반 기호 식품(침출차/액상차)입니다. <br />
                * 원료 카테킨, 폴리페놀 등의 정보는 제품 자체의 효능이 아닌 자연 녹차 원료가 지닌 보편적인 유기적 성질에 대한 기본 사전 정보입니다.
              </p>
            </div>
          </section>

          {/* FOOTER BRAND SIGNATURE */}
          <footer className="text-center py-10 bg-emerald-950 text-stone-300 px-6 rounded-b-2xl">
            <img src="/images/greensoultea/logo.png" alt="마음정원 로고 화이트 필터" className="mx-auto h-12 mb-4 brightness-0 invert opacity-80" />
            <p className="serif-font italic text-amber-400 text-sm mb-2">My Own Green Soul Day, Sunyeop Tea</p>
            <p className="text-xs text-stone-400 leading-normal">
              &copy; 마음정원. All Rights Reserved. <br />
              본 페이지에 기재된 이미지, 카피, 텍스트 일체는 특허 및 상표 저작권법 보호를 받습니다. 무단 도용을 엄격히 금합니다.
            </p>
          </footer>

        </div>
      </div>
    </div>
  );
}