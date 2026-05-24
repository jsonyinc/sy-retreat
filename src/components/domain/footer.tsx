import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-primary">
      {/* 1. 컨테이너 너비 확장 (6xl -> 7xl) */}
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        {/* 2. 데스크탑(lg) 기준 양쪽 끝 정렬, 세로 중앙 정렬 */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 pb-12 border-b border-background/10">
          
          {/* Brand & Logo Section */}
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            {/* 로고 찌그러짐 방지 (shrink-0) */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-background shrink-0 shadow-lg shadow-black/20">
              <Image 
                src="/images/logo.png" 
                alt="SUNYEOP ZEN Retreat Logo" 
                fill
                sizes="(max-width: 768px) 56px, 64px"
                className="object-cover"
              />
            </div>
            
            <div>
              {/* 3. 텍스트 줄바꿈 방지 (whitespace-nowrap) */}
              <h3 className="font-[var(--font-cormorant)] text-3xl text-background mb-1 tracking-wide whitespace-nowrap">
                SUNYEOP <span className="italic font-light text-accent">Zen Retreat</span>
              </h3>
              <p className="text-background/60 text-sm font-serif tracking-widest whitespace-nowrap">
                선엽 명상 치유센터 | K-MEDI NATURE SPA & TEA
              </p>
            </div>
          </div>

          {/* Contact Info */}
          {/* 4. 연락처 정보를 세로로 깔끔하게 나열하고 우측 정렬 */}
          <div className="flex flex-col gap-4 text-background/70 text-sm font-sans lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="whitespace-nowrap">Ho Chi Minh City &amp; Thành phố Cần Thơ, Vietnam</span>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span className="whitespace-nowrap">+82 31 559 2327</span>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="whitespace-nowrap">rarara0002@naver.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background/40 text-sm font-sans tracking-wide">
          <p className="whitespace-nowrap">&copy; {new Date().getFullYear()} SUNYEOP Zen Retreat. All rights reserved.</p>
          <div className="flex gap-6 whitespace-nowrap">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}



// import { MapPin, Phone, Mail } from "lucide-react"

// export function Footer() {
//   return (
//     <footer className="py-16 px-6 bg-[#2C3E1A]">
//       <div className="max-w-6xl mx-auto">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-[#F9F6F0]/10">
//           {/* Brand */}
//           <div className="text-center md:text-left">
//             <h3 className="font-[var(--font-cormorant)] text-3xl text-[#F9F6F0] mb-2">
//               SUNYEOP <span className="italic font-light">Zen Retreat</span>
//             </h3>
//             <p className="text-[#F9F6F0]/50 text-sm">
//               선엽 명상 치유센터 | K-MEDI NATURE SPA & TEA
//             </p>
//           </div>

//           {/* Contact Info */}
//           <div className="flex flex-col sm:flex-row gap-6 text-[#F9F6F0]/70 text-sm">
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-[#C5A880]" />
//               <span>Ho Chi Minh City &amp; Thành phố Cần Thơ, Vietnam</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4 text-[#C5A880]" />
//               <span>+82 31 559 2327</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4 text-[#C5A880]" />
//               <span>rarara0002@naver.com</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F9F6F0]/40 text-sm">
//           <p>&copy; {new Date().getFullYear()} SUNYEOP Zen Retreat. All rights reserved.</p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
