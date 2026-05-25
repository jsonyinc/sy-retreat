import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

export default async function middleware(request: NextRequest) {
  let dynamicDefaultLocale = 'en'; // 기본값은 글로벌(영어)

  // 1차 감지: 사용자의 브라우저 기본 언어 설정 확인 (어떤 서버든 작동)
  const acceptLanguage = request.headers.get('accept-language') || '';
  if (acceptLanguage.includes('ko')) dynamicDefaultLocale = 'ko';
  else if (acceptLanguage.includes('vi')) dynamicDefaultLocale = 'vi';

  // 2차 감지: Vercel 서버일 경우, 접속 국가 IP를 확인하여 덮어쓰기 (더 정확함)
  const country = request.headers.get('x-vercel-ip-country');
  if (country === 'KR') dynamicDefaultLocale = 'ko';
  else if (country === 'VN') dynamicDefaultLocale = 'vi';

  const handleI18nRouting = createMiddleware({
    ...routing,
    defaultLocale: dynamicDefaultLocale as any,
  });
  return handleI18nRouting(request);
}

export const config = {
  // api, _next/static, _next/image, favicon.ico, images 폴더 등 
  // 시스템 및 정적 파일 경로를 엄격히 제외(Exclude)하여 무한 루프를 차단합니다.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)']
};