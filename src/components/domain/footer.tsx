import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#2C3E1A]">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-[#F9F6F0]/10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-[var(--font-cormorant)] text-3xl text-[#F9F6F0] mb-2">
              SUNYEOP <span className="italic font-light">Zen Retreat</span>
            </h3>
            <p className="text-[#F9F6F0]/50 text-sm">
              선엽 명상 치유센터 | K-MEDI NATURE SPA & TEA
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-[#F9F6F0]/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span>Ho Chi Minh City &amp; Thành phố Cần Thơ, Vietnam</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>+82 31 559 2327</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C5A880]" />
              <span>rarara0002@naver.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F9F6F0]/40 text-sm">
          <p>&copy; {new Date().getFullYear()} SUNYEOP Zen Retreat. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
