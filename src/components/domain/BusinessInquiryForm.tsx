'use client'

import { useState } from 'react'
import { submitInquiry } from '@/app/actions'

export function BusinessInquiryForm() {
  const [isPending, setIsPending] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    setResult(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await submitInquiry(formData)
      setResult(response)
      
      if (response.success) {
        form.reset()
      }
    } catch (err) {
      setResult({ success: false, message: '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.' })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className="bg-[#2C3E1A] text-[#F9F6F0] py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs md:text-sm tracking-[0.3em] text-[#C5A880] uppercase mb-4">Business Inquiry</h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-6 font-light tracking-wide">사업 제휴 및 문의</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group">
              <label htmlFor="company" className="block text-xs uppercase tracking-widest text-[#8FBC8F] mb-2">소속 기업 / 기관명</label>
              <input type="text" id="company" name="company" required disabled={isPending} 
                     className="w-full bg-transparent border-b border-[#8FBC8F]/40 py-3 text-[#F9F6F0] focus:outline-none focus:border-[#C5A880] transition-colors disabled:opacity-50" />
            </div>
            <div className="relative group">
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#8FBC8F] mb-2">담당자 성함</label>
              <input type="text" id="name" name="name" required disabled={isPending} 
                     className="w-full bg-transparent border-b border-[#8FBC8F]/40 py-3 text-[#F9F6F0] focus:outline-none focus:border-[#C5A880] transition-colors disabled:opacity-50" />
            </div>
          </div>
          
          <div className="relative group">
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#8FBC8F] mb-2">연락처</label>
            <input type="tel" id="phone" name="phone" required disabled={isPending} 
                   className="w-full bg-transparent border-b border-[#8FBC8F]/40 py-3 text-[#F9F6F0] focus:outline-none focus:border-[#C5A880] transition-colors disabled:opacity-50" />
          </div>
          
          {/* [수정됨] defaultValue="" 를 select 태그에 적용하고 option의 selected 제거 */}
          <div className="relative group">
            <label htmlFor="sector" className="block text-xs uppercase tracking-widest text-[#8FBC8F] mb-2">문의 분야 (Sector)</label>
            <select id="sector" name="sector" required disabled={isPending} defaultValue=""
                    className="w-full bg-transparent border-b border-[#8FBC8F]/40 py-3 text-[#F9F6F0] focus:outline-none focus:border-[#C5A880] transition-colors appearance-none disabled:opacity-50 cursor-pointer">
              <option value="" disabled className="text-gray-500">문의하실 분야를 선택해 주십시오</option>
              <option value="partnership" className="text-[#2C3E1A]">글로벌 파트너십 (Partnership)</option>
              <option value="investment" className="text-[#2C3E1A]">투자 및 재무 (Investment)</option>
              <option value="program" className="text-[#2C3E1A]">리트릿 프로그램 도입 (Program)</option>
              <option value="other" className="text-[#2C3E1A]">기타 문의 (Other)</option>
            </select>
          </div>

          <div className="relative group">
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#8FBC8F] mb-2">상세 문의 내용</label>
            <textarea id="message" name="message" rows={4} required disabled={isPending} 
                      className="w-full bg-transparent border-b border-[#8FBC8F]/40 py-3 text-[#F9F6F0] focus:outline-none focus:border-[#C5A880] transition-colors resize-none disabled:opacity-50"></textarea>
          </div>
          
          {result && (
            <div className={`p-4 text-sm text-center transition-all duration-300 ${result.success ? 'text-[#2C3E1A] bg-[#C5A880]/90 font-bold' : 'text-red-200 bg-red-900/50 border border-red-500'}`}>
              {result.message}
            </div>
          )}

          <div className="pt-8 text-center">
            <button 
              type="submit" 
              disabled={isPending}
              className="inline-block bg-[#C5A880] text-[#2C3E1A] px-14 py-5 text-sm tracking-[0.2em] font-bold uppercase hover:bg-[#F9F6F0] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative group"
            >
              <span className="relative z-10">{isPending ? 'Requesting...' : '문의 접수하기'}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}