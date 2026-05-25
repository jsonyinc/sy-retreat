import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// 1. next-intl 플러그인 생성 (단어장 배달부인 request.ts의 경로를 연결합니다)
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// 2. 기존 Next.js 기본 설정 객체 (향후 다른 설정이 필요하면 이 안에 추가합니다)
const nextConfig: NextConfig = {
  /* config options here */
};

// 3. 기본 설정 객체에 다국어 플러그인을 감싸서(Wrapping) 내보냅니다.
export default withNextIntl(nextConfig);




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
