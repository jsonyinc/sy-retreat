// src/components/ui/fade-in-up.tsx
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInUpProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
  return (
    <motion.div
      // 시작 상태: 투명하고 아래로 40px 내려가 있음
      initial={{ opacity: 0, y: 40 }}
      // 화면에 보일 때 상태: 100% 보이고 원래 위치로
      whileInView={{ opacity: 1, y: 0 }}
      // 뷰포트 설정: 한 번만 실행되고, 요소가 화면에 10% 정도 보일 때 작동 시작
      viewport={{ once: true, margin: "-10%" }}
      // 트랜지션: 1초 동안, 애플(Apple) 스타일의 부드러운 감속 곡선 적용
      transition={{ 
        duration: 1, 
        delay: delay, 
        ease: [0.22, 1, 0.36, 1] // 하이엔드 럭셔리 특유의 부드러운 감속(Ease-out)
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}