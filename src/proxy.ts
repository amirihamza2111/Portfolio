import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "fr"];

// French when the browser prefers it over English, English otherwise.
function preferredLocale(header: string | null) {
  const ranked = (header ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().slice(0, 2), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((r) => locales.includes(r.lang))?.lang ?? "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  request.nextUrl.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any file with an extension (images, videos, CVs…).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
