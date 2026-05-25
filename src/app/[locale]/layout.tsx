// src/app/[locale]/layout.tsx
import { Geist, Geist_Mono, Inter, Black_Han_Sans } from "next/font/google";
// [수정됨] 파일 위치가 [locale] 안으로 들어왔으므로 경로에 ../ 추가
import "../globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

// [추가됨] 다국어(i18n) 관련 패키지 불러오기
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

// ── 기존 폰트 설정 완벽 유지 ──
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

// ── [업데이트됨] 다국어 확장을 고려한 동적 메타데이터 생성 ──
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sunyeop.aionlabs.kr";

  return {
    metadataBase: new URL(baseUrl),
    title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
    description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
    
    openGraph: {
      title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
      description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
      url: baseUrl,
      siteName: "SUNYEOP WELLNESS",
      images: [
        {
          url: `${baseUrl}/images/hero-bg.jpg`,
          width: 1200,
          height: 630,
          alt: "SUNYEOP WELLNESS - 동양 자연치유 웰니스 플랫폼",
        },
      ],
      // 접속 언어에 따라 OG Tag의 locale 정보도 동적으로 변경
      locale: locale === 'ko' ? 'ko_KR' : locale === 'vi' ? 'vi_VN' : 'en_US',
      type: "website",
    },
    
    twitter: {
      card: "summary_large_image",
      title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
      description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
      images: [`${baseUrl}/images/hero-bg.jpg`],
    },
  };
}

// ── [추가됨] SSG 최적화 (빌드 시점에 정적 페이지 생성) ──
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ── 메인 레이아웃 컴포넌트 ──
export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // 지원하지 않는 언어 경로로 접속 시 404 에러 처리
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 정적 렌더링 활성화 및 번역 메시지 불러오기
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale} // [수정됨] "ko" 고정에서 접속한 언어(locale)로 동적 변경
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, blackHanSans.variable)}
    >
      <body className="min-h-full flex flex-col">
        {/* [추가됨] 하위 컴포넌트들이 번역 기능을 쓸 수 있도록 Provider로 감싸기 */}
        <NextIntlClientProvider messages={messages}>
          {children}
          {/* 기존 Analytics 완벽 유지 */}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}









// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter, Black_Han_Sans } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// // [추가됨] Vercel Analytics 불러오기
// import { Analytics } from "@vercel/analytics/react";

// const inter = Inter({subsets:['latin'],variable:'--font-sans'});

// const blackHanSans = Black_Han_Sans({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-black-han",
//   display: "swap",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // [업데이트됨] SEO 및 소셜 미디어 공유(OG Tag)를 위한 메타데이터 고도화
// export const metadata: Metadata = {
//   metadataBase: new URL("https://sunyeop.aionlabs.kr"),
//   title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
//   description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
  
//   // 카카오톡, Zalo, 페이스북, 링크드인 등 일반적인 SNS 공유용 설정
//   openGraph: {
//     title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
//     description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
//     url: "https://sunyeop.aionlabs.kr",
//     siteName: "SUNYEOP WELLNESS",
//     images: [
//       {
//         url: "/images/hero-bg.jpg", // 지정해주신 썸네일 이미지 적용
//         width: 1200,
//         height: 630,
//         alt: "SUNYEOP WELLNESS - 동양 자연치유 웰니스 플랫폼",
//       },
//     ],
//     locale: "ko_KR",
//     type: "website",
//   },
  
//   // 트위터(X), 슬랙, 텔레그램 등 큰 이미지 카드를 지원하는 플랫폼용 설정
//   twitter: {
//     card: "summary_large_image",
//     title: "SUNYEOP WELLNESS | 동양 자연치유 웰니스 플랫폼",
//     description: "미슐랭 셰프 200인이 인정한 세계적인 프리미엄 명차. 선엽스님의 자연치유 철학과 베트남의 대자연이 만나는 K-Zen 웰니스 비즈니스 제안서입니다.",
//     images: ["/images/hero-bg.jpg"],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="ko"
//       className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, blackHanSans.variable)}
//     >
//       <body className="min-h-full flex flex-col">
//         {children}
//         {/* [추가됨] 웹사이트 전체에 분석기 작동 */}
//         <Analytics />
//       </body>
//     </html>
//   );
// }