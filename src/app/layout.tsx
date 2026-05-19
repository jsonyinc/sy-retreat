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

export const metadata: Metadata = {
  title: "SUNYEOP ZEN RETREAT | 선엽 리트릿",
  description: "한국 사찰약차와 자연치유 철학, 베트남의 침향과 약초가 만나는 동양 자연치유 웰니스 플랫폼",
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
