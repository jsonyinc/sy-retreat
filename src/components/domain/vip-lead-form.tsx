"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send } from "lucide-react"

export function VipLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Server Action으로 교체 예정 (2_tech_stack.md 보안 규칙 준수)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="vip-form" className="py-24 md:py-32 px-6 bg-[#EDE9E0]">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-[#C5A880] text-sm tracking-[0.3em] uppercase mb-4 block">
            VIP 프라이빗 사전 초대
          </span>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#2C3E1A] mb-4">
            VIP 리트릿 사전 초대 신청
          </h2>
          <p className="text-[#5A6B4A] text-lg">
            선별된 VIP 고객에게만 열리는 선엽 리트릿의 문
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-[#2C3E1A]/5 border border-[#D4CFC5] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          {isSubmitted ? (
            <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-7 h-7 text-[#C5A880]" />
              </div>
              <h3 className="font-[var(--font-cormorant)] text-2xl text-[#2C3E1A] mb-3">
                신청이 완료되었습니다
              </h3>
              <p className="text-[#5A6B4A]">
                담당 컨시어지가 24시간 이내에 연락드려 맞춤형 웰니스 여정을 함께 설계해 드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2C3E1A] font-medium">
                  성함
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="성함을 입력해 주세요"
                  className="h-12 bg-[#F9F6F0] border-[#D4CFC5] focus:border-[#C5A880] focus:ring-[#C5A880]/20 placeholder:text-[#5A6B4A]/40"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#2C3E1A] font-medium">
                  연락처
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+82 또는 +84 연락처를 입력해 주세요"
                  className="h-12 bg-[#F9F6F0] border-[#D4CFC5] focus:border-[#C5A880] focus:ring-[#C5A880]/20 placeholder:text-[#5A6B4A]/40"
                />
              </div>

              {/* Preferred Sanctuary */}
              <div className="space-y-2">
                <Label htmlFor="sector" className="text-[#2C3E1A] font-medium">
                  관심 프로그램
                </Label>
                <Select required>
                  <SelectTrigger className="h-12 bg-[#F9F6F0] border-[#D4CFC5] focus:border-[#C5A880] focus:ring-[#C5A880]/20 text-[#2C3E1A]">
                    <SelectValue placeholder="관심 공간을 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#D4CFC5]">
                    <SelectItem value="tea-lounge" className="focus:bg-[#F9F6F0]">한국 약차 다실</SelectItem>
                    <SelectItem value="agarwood" className="focus:bg-[#F9F6F0]">침향 아로마 스파</SelectItem>
                    <SelectItem value="botanica" className="focus:bg-[#F9F6F0]">피부 자연요법 센터</SelectItem>
                    <SelectItem value="detox" className="focus:bg-[#F9F6F0]">한국형 디톡스 룸</SelectItem>
                    <SelectItem value="full-journey" className="focus:bg-[#F9F6F0]">전체 웰니스 여정 (Full Journey)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#C5A880] hover:bg-[#B39770] text-[#2C3E1A] font-medium text-base tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A880]/20 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#2C3E1A]/30 border-t-[#2C3E1A] rounded-full animate-spin" />
                    신청 중...
                  </span>
                ) : (
                  "VIP 프라이빗 리트릿 사전 초대 신청"
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-center text-xs text-[#5A6B4A]/60 pt-2">
                입력하신 정보는 안전하게 보호되며, 제3자에게 공유되지 않습니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
