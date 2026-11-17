import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "../fonts/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/cormorant-garamond-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/cormorant-garamond-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/plus-jakarta-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBFBF9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Riverside Cabin and Van Park | Muswellbrook Accommodation NSW",
  description:
    "Clean cabins and powered caravan sites on Mill Street, Muswellbrook NSW. Close to Hunter Valley mining and power operations.",
  metadataBase: new URL("https://riversidecabinandvanpark.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "X0kK8Atngw076INZiTCG2tJsXGTuA1rhQSHH7nSg5_w",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Riverside Cabin and Van Park | Muswellbrook Accommodation NSW",
    description:
      "Clean cabins and powered caravan sites on Mill Street, Muswellbrook NSW. Serving contractors, workers, and travellers.",
    url: "https://riversidecabinandvanpark.com",
    siteName: "Riverside Cabin and Van Park",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FBFBF9] text-[#1B1D1A] antialiased selection:bg-[#3D4A3E]/15">
        {children}
      </body>
    </html>
  );
}
