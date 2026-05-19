"use client"

import { useState } from "react"

export function BusinessInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Server Action으로 교체 예정
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Autofill override styles */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
          -webkit-text-fill-color: #2C3E1A !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        textarea::-webkit-scrollbar { width: 6px; }
        textarea::-webkit-scrollbar-thumb { background-color: #C5A880; border-radius: 3px; }
        .inquiry-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(44,62,26,0.2);
          padding: 12px 0;
          color: #2C3E1A;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .inquiry-input::placeholder { color: rgba(90,107,74,0.35); font-size: 0.875rem; }
        .inquiry-input:focus { border-bottom-color: #C5A880; }
        .inquiry-select {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(44,62,26,0.2);
          padding: 12px 0;
          color: #2C3E1A;
          font-size: 1rem;
          outline: none;
          appearance: none;
          cursor: pointer;
          transition: border-color 0.3s;
        }
        .inquiry-select:focus { border-bottom-color: #C5A880; }
        .inquiry-select option { background-color: #ffffff; color: #2C3E1A; }
        .inquiry-label {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #5A6B4A;
          margin-bottom: 6px;
          transition: color 0.3s;
        }
        .inquiry-group:focus-within .inquiry-label { color: #C5A880; }
      `}</style>

      <section id="business-inquiry" className="bg-white text-[#2C3E1A] py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm tracking-[0.3em] text-[#C5A880] uppercase mb-4 block">
              Business Inquiry
            </span>
            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light tracking-wide mb-6 text-[#2C3E1A]">
              사업 제휴 및 문의
            </h2>
            <p className="text-[#5A6B4A] font-light text-sm md:text-base">
              선엽 리트릿과 함께 동양 자연치유 웰니스의 새로운 비전을 만들어갈 파트너를 모십니다.
            </p>
          </div>

          {/* Form / Success state */}
          {isSubmitted ? (
            <div className="text-center py-16 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full border-2 border-[#C5A880]/50 flex items-center justify-center mx-auto mb-8 text-[#C5A880]">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-[var(--font-cormorant)] text-3xl text-[#2C3E1A] mb-4">
                문의가 접수되었습니다
              </h3>
              <p className="text-[#5A6B4A] font-light leading-relaxed">
                제출하신 비즈니스 정보는 기밀로 유지되며,<br />
                영업일 기준 48시간 이내에 회신해 드립니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Row 1: 소속 기업 + 담당자 성함 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="inquiry-group">
                  <label htmlFor="company" className="inquiry-label">
                    소속 기업 / 기관명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="inquiry-input"
                    placeholder="기업명 또는 기관명을 입력해 주세요"
                    required
                  />
                </div>
                <div className="inquiry-group">
                  <label htmlFor="person" className="inquiry-label">
                    담당자 성함
                  </label>
                  <input
                    type="text"
                    id="person"
                    name="person"
                    className="inquiry-input"
                    placeholder="성함을 입력해 주세요"
                    required
                  />
                </div>
              </div>

              {/* Row 2: 연락처 또는 이메일 */}
              <div className="inquiry-group">
                <label htmlFor="contact" className="inquiry-label">
                  회신받으실 연락처 또는 이메일
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="inquiry-input"
                  placeholder="이메일 주소 또는 전화번호를 입력해 주세요"
                  required
                />
              </div>

              {/* Row 3: 문의 유형 select */}
              <div className="inquiry-group relative">
                <label htmlFor="inquiry_type" className="inquiry-label">
                  문의 유형
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  className="inquiry-select"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>문의하실 분야를 선택해 주세요</option>
                  <option value="partnership">마스터 프랜차이즈 및 공간 제휴 (Partnership)</option>
                  <option value="investment">자본 투자 및 조인트 벤처 (Investment)</option>
                  <option value="program">웰니스 프로그램 및 약차 도입 (B2B Supply)</option>
                  <option value="other">기타 문의 (Others)</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 bottom-3 pointer-events-none text-[#C5A880]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              {/* Row 4: 상세 문의 내용 */}
              <div className="inquiry-group">
                <label htmlFor="message" className="inquiry-label">
                  상세 문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="inquiry-input resize-none"
                  placeholder="제안하시고자 하는 내용이나 궁금하신 점을 상세히 적어주세요."
                  required
                />
              </div>

              {/* Submit */}
              <div className="pt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block bg-[#C5A880] text-[#2C3E1A] px-14 py-5 text-sm tracking-[0.2em] font-medium uppercase hover:bg-[#F9F6F0] transition-colors duration-300 w-full md:w-auto disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="w-4 h-4 border-2 border-[#2C3E1A]/30 border-t-[#2C3E1A] rounded-full animate-spin" />
                      접수 중...
                    </span>
                  ) : (
                    "문의 접수하기"
                  )}
                </button>
                <p className="mt-6 text-xs text-[#5A6B4A]/60 font-light tracking-wide">
                  제출하신 비즈니스 정보는 기밀로 유지되며, 영업일 기준 48시간 이내에 회신해 드립니다.
                </p>
              </div>

            </form>
          )}
        </div>
      </section>
    </>
  )
}
