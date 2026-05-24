// src/app/actions.ts
'use server'

import { createClient } from '@supabase/supabase-js'

// 1. .env.local 환경 변수 안전하게 불러오기
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase 환경 변수가 설정되지 않았습니다.')
}

// 2. Supabase 클라이언트 초기화
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 리턴 타입 정의
export type InquiryResponse = {
  success: boolean;
  message: string;
}

// 3. 서버 액션 함수: submitInquiry
export async function submitInquiry(formData: FormData): Promise<InquiryResponse> {
  // [보완] formData.get()의 null 가능성을 방어하고, trim()으로 공백 입력을 제거합니다.
  const name = formData.get('name')?.toString().trim() || ''
  const phone = formData.get('phone')?.toString().trim() || ''
  const sector = formData.get('sector')?.toString().trim() || ''
  const company = formData.get('company')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  // 필수 값 서버사이드 검증 (공백만 입력된 경우도 여기서 차단됨)
  if (!name || !phone || !sector) {
    return { success: false, message: '성함, 연락처, 관심 분야는 필수 입력 항목입니다.' }
  }

  try {
    // Supabase business_inquiry 테이블에 안전하게 Insert
    const { error } = await supabase
      .from('business_inquiry')
      .insert([
        {
          name,
          phone,
          sector,
          company: company || null, // 빈 문자열 대신 null로 DB에 저장
          message: message || null, 
        }
      ])

    if (error) {
      console.error('Supabase Insert Error:', error)
      return { success: false, message: '데이터베이스 저장 중 오류가 발생했습니다.' }
    }

    return { success: true, message: '문의가 성공적으로 접수되었습니다. 담당자가 확인 후 신속히 연락드리겠습니다.' }
    
  } catch (err) {
    console.error('Server Action Error:', err)
    return { success: false, message: '서버 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' }
  }
}