import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-[#1B1D1A]">
      {/* Background Aerial Photograph with LCP priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/riverside-aerial-overview.png"
          alt="Aerial overview of Riverside Cabin and Van Park alongside the Hunter River in Muswellbrook"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle sophisticated gradient overlay ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D1A] via-[#1B1D1A]/70 to-[#1B1D1A]/80" />
      </div>

      {/* Central Content Container within Safe Zone */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Eyebrow context */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-xs font-medium tracking-[0.2em] uppercase text-[#FBFBF9]/80 bg-white/10 backdrop-blur-md rounded border border-white/15">
          <span>10 Mill Street • Muswellbrook NSW</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12] mb-6 max-w-3xl mx-auto">
          Accommodation Along the Hunter River
        </h1>

        {/* Subhead / Value proposition */}
        <p className="text-base sm:text-lg lg:text-xl text-[#FBFBF9]/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Quiet, comfortable stays serving mining personnel, power-station
          workers, contractors, long-term residents, and daily travellers in
          Muswellbrook.
        </p>

        {/* Exactly Two Actions: Primary and Quiet Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/accommodation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] text-xs font-semibold tracking-wider uppercase bg-[#FBFBF9] text-[#1B1D1A] hover:bg-[#F3EFEA] transition-colors duration-200"
          >
            <span>Explore Accommodation</span>
            <ArrowRight className="w-4 h-4 text-[#3D4A3E]" />
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 min-h-[48px] text-xs font-semibold tracking-wider uppercase bg-transparent text-[#FBFBF9] hover:bg-white/10 border border-white/40 hover:border-white transition-colors duration-200"
          >
            <span>Enquire</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
