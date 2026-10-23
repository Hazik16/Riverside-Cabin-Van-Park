import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Production-ready Content Security Policy tailored for Next.js App Router static prerendering:
 * - default-src 'self': Restrict all unspecified resource types to same origin.
 * - script-src 'self' 'unsafe-inline': Required for Next.js static prerendering hydration payloads
 *   (self.__next_f) without dynamic per-request nonces. In dev mode only, 'unsafe-eval' is allowed
 *   for HMR/Webpack source-mapping.
 * - script-src-attr 'none': Disallow inline event attributes (onclick, onload, onerror) to close
 *   the most common HTML-injection attack vectors without breaking hydration.
 * - style-src 'self' 'unsafe-inline': Required for Tailwind CSS and Next.js critical CSS inlining.
 * - img-src 'self' data: blob:: Support local images, Next.js image optimization, and data URIs.
 * - font-src 'self' data:: Support locally hosted WOFF2 fonts and fallback data font descriptors.
 * - connect-src 'self': Restrict network requests and client-side prefetching to same origin.
 * - media-src 'self': Restrict media resources to same origin.
 * - object-src 'none': Completely disallow legacy browser plugins (Flash, Java, ActiveX).
 * - base-uri 'self': Prevent DOM-based base tag hijacking of relative URLs.
 * - form-action 'self' https://wa.me mailto: tel:: Restrict form submissions to trusted targets.
 * - frame-ancestors 'none': Prevent clickjacking by disallowing embedding in iframes.
 * - upgrade-insecure-requests: Automatically upgrade any insecure HTTP resource requests to HTTPS.
 */
const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://wa.me mailto: tel:",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspDirectives,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    // Standard 1-year HSTS without 'preload' or 'includeSubDomains' until
    // all production subdomains and DNS configurations are explicitly verified.
    value: "max-age=31536000",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), screen-wake-lock=(), accelerometer=(), gyroscope=(), magnetometer=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {
  // Disable identifying technology header to minimize server fingerprinting
  poweredByHeader: false,
  // Enable React strict mode for improved runtime checks
  reactStrictMode: true,
  // Ensure production source maps are not inadvertently generated or exposed
  productionBrowserSourceMaps: false,
  // Centralized security headers across all environments without Netlify duplication
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
