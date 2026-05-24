import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-han",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// [업데이트됨] SEO 및 소셜 미디어 공유(OG Tag)를 위한 메타데이터 고도화
export const metadata: Metadata = {
  metadataBase: new URL("https://sunyeop.aionlabs.kr"),
  title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
  description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
  
  // 카카오톡, Zalo, 페이스북, 링크드인 등 일반적인 SNS 공유용 설정
  openGraph: {
    title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
    description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
    url: "https://sunyeop.aionlabs.kr",
    siteName: "SUNYEOP WELLNESS",
    images: [
      {
        url: "/images/hero-bg.jpg", // 지정해주신 썸네일 이미지 적용
        width: 1200,
        height: 630,
        alt: "SUNYEOP WELLNESS - 동양 자연치유 웰니스 플랫폼",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  
  // 트위터(X), 슬랙, 텔레그램 등 큰 이미지 카드를 지원하는 플랫폼용 설정
  twitter: {
    card: "summary_large_image",
    title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
    description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, blackHanSans.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}