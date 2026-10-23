import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { WorkplacesSection } from "@/components/WorkplacesSection";
import { LocationSection } from "@/components/LocationSection";
import { DirectInquirySection } from "@/components/DirectInquirySection";
import { InquiryActions } from "@/components/InquiryActions";
import { JsonLd } from "@/components/JsonLd";
import { accommodations, poweredSites } from "@/data/accommodations";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />

      <main id="main-content" className="flex-1">
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. Property Overview */}
        <section className="py-20 lg:py-24 bg-[#FBFBF9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-3">
              Muswellbrook Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1D1A] tracking-tight mb-6">
              A Quiet Base Along the River
            </h2>
            <p className="text-base sm:text-lg text-[#5C6059] leading-relaxed mb-8">
              Riverside Cabin and Van Park provides straightforward, clean, and
              comfortable accommodation at 10 Mill Street in Muswellbrook.
              Positioned on the edge of the Hunter River, our grounds offer a
              peaceful retreat after long work shifts or days on the road, with
              direct road connections across the Upper Hunter.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-[#1B1D1A] font-medium pt-4 border-t border-[#E5E2DA]">
              <span>Ensuite & Basic Cabins</span>
              <span className="text-[#9E7B54]">•</span>
              <span>Powered Caravan Sites</span>
              <span className="text-[#9E7B54]">•</span>
              <span>On-Site Laundromat</span>
              <span className="text-[#9E7B54]">•</span>
              <span>Housekeeping Available</span>
            </div>
          </div>
        </section>

        {/* 3. Accommodation Previews */}
        <section className="py-20 lg:py-24 bg-[#F3EFEA] border-t border-[#E5E2DA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-2">
                  Stay Options
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1A] tracking-tight">
                  Cabins & Caravan Sites
                </h2>
              </div>
              <Link
                href="/accommodation"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1B1D1A] hover:text-[#3D4A3E] group"
              >
                <span>View Full Accommodation Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Cabins Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {accommodations.map((cabin) => (
                <div
                  key={cabin.id}
                  className="bg-[#FBFBF9] border border-[#E5E2DA] overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Primary Image Preview */}
                    <div className="relative aspect-[16/10] w-full bg-[#E5E2DA] overflow-hidden">
                      <Image
                        src={cabin.images[0].src}
                        alt={cabin.images[0].alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-[#1B1D1A]/80 text-[#FBFBF9] text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 backdrop-blur-xs">
                        {cabin.name}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="font-serif text-2xl font-normal text-[#1B1D1A] mb-2">
                        {cabin.name}
                      </h3>
                      <p className="text-sm text-[#5C6059] leading-relaxed mb-6">
                        {cabin.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E7B54] block">
                          Included Specifications:
                        </span>
                        <ul className="grid grid-cols-2 gap-2 text-xs text-[#1B1D1A]">
                          {cabin.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#3D4A3E] shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-[#E5E2DA]/60 pt-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <InquiryActions
                        variant="card"
                        subject={cabin.inquirySubject}
                        whatsappMessage={cabin.inquiryWhatsApp}
                      />
                      <Link
                        href={`/accommodation#${cabin.id}`}
                        className="text-xs font-semibold uppercase tracking-wider text-[#5C6059] hover:text-[#1B1D1A] inline-flex items-center gap-1 self-center"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Powered Sites Banner */}
            <div className="bg-[#FBFBF9] border border-[#E5E2DA] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7B54]">
                  <span>Site Accommodation</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#1B1D1A]">
                  {poweredSites.name}
                </h3>
                <p className="text-sm text-[#5C6059] leading-relaxed">
                  {poweredSites.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-[#1B1D1A] font-medium bg-[#F3EFEA] px-3 py-1.5 border border-[#E5E2DA]">
                  <AlertCircle className="w-3.5 h-3.5 text-[#9E7B54]" />
                  <span>Important: {poweredSites.notice}</span>
                </div>
              </div>

              <InquiryActions
                variant="card"
                subject={poweredSites.inquirySubject}
                whatsappMessage={poweredSites.inquiryWhatsApp}
                className="shrink-0"
              />
            </div>
          </div>
        </section>

        {/* 4. Facilities Section */}
        <FacilitiesSection />

        {/* 5. Workplaces Section */}
        <WorkplacesSection />

        {/* 6. Location Section */}
        <LocationSection />

        {/* 7. Direct Inquiry Section */}
        <DirectInquirySection />
      </main>

      <Footer />
    </>
  );
}
