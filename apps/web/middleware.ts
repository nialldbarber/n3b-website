import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "lv"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
