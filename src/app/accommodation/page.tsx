import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, AlertCircle, Phone, Mail, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CabinGallery } from "@/components/CabinGallery";
import { InquiryActions } from "@/components/InquiryActions";
import { DirectInquirySection } from "@/components/DirectInquirySection";
import { accommodations, poweredSites, sharedFacilities } from "@/data/accommodations";
import { phoneHref, emailHref, whatsappHref } from "@/data/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Cabins & Powered Sites | Riverside Cabin and Van Park Muswellbrook",
  description:
    "Clean cabins and powered caravan sites on Mill Street, Muswellbrook NSW. Close to Hunter Valley mining and power operations.",
  openGraph: {
    title: "Cabins & Powered Sites | Riverside Cabin and Van Park",
    description:
      "Explore Ensuite Cabins, Basic Cabins, and Powered Caravan Sites in Muswellbrook NSW. Direct bookings and inquiries.",
    url: "https://riversidecabinandvanpark.au/accommodation",
    siteName: "Riverside Cabin and Van Park",
    locale: "en_AU",
    type: "website",
  },
};

export default function AccommodationPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-[#1B1D1A] text-[#FBFBF9] py-16 sm:py-20 border-b border-[#3D4A3E]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7B54] hover:text-[#FBFBF9] mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-3">
                Property Portfolio
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-4">
                Accommodations & Sites
              </h1>
              <p className="text-base sm:text-lg text-[#FBFBF9]/80 leading-relaxed font-light">
                Explore our range of clean ensuite cabins, basic cabins, and
                powered caravan sites along the Hunter River in Muswellbrook.
                Designed for practical daily living, shift workers, and long-term
                stays.
              </p>
            </div>
          </div>
        </section>

        {/* Accommodation Sections */}
        <section className="py-20 bg-[#FBFBF9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {accommodations.map((cabin, index) => (
              <div
                key={cabin.id}
                id={cabin.id}
                className="scroll-mt-28 border border-[#E5E2DA] bg-[#FBFBF9] p-6 sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Specs & Copy */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-2">
                        Option 0{index + 1}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1A]">
                        {cabin.name}
                      </h2>
                      <p className="text-sm font-medium text-[#3D4A3E] mt-1">
                        {cabin.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#5C6059] leading-relaxed">
                      {cabin.description}
                    </p>

                    {/* Features List */}
                    <div className="p-5 bg-[#F3EFEA] border border-[#E5E2DA] space-y-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1B1D1A] block">
                        Included Features
                      </span>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#1B1D1A]">
                        {cabin.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5">
                            <Check className="w-4 h-4 text-[#3D4A3E] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Direct Inquiry Bar */}
                    <div className="pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6059] block mb-3">
                        Direct Inquiry for {cabin.name}:
                      </span>
                      <InquiryActions
                        variant="card"
                        subject={cabin.inquirySubject}
                        whatsappMessage={cabin.inquiryWhatsApp}
                        showEmail={true}
                      />
                    </div>
                  </div>

                  {/* Right Image Gallery */}
                  <div className="lg:col-span-7">
                    <CabinGallery images={cabin.images} title={cabin.name} />
                  </div>
                </div>
              </div>
            ))}

            {/* Powered Caravan Sites Detailed Section */}
            <div
              id="powered-sites"
              className="scroll-mt-28 border border-[#E5E2DA] bg-[#F3EFEA] p-6 sm:p-10 lg:p-12"
            >
              <div className="max-w-3xl space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-2">
                    Caravan Accommodation
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1A]">
                    {poweredSites.name}
                  </h2>
                  <p className="text-sm font-medium text-[#3D4A3E] mt-1">
                    {poweredSites.tagline}
                  </p>
                </div>

                <p className="text-base text-[#5C6059] leading-relaxed">
                  {poweredSites.description}
                </p>

                {/* Important Notice Callout */}
                <div className="p-5 bg-[#FBFBF9] border-l-4 border-[#9E7B54] border border-[#E5E2DA] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#1B1D1A]">
                    <AlertCircle className="w-4 h-4 text-[#9E7B54]" />
                    <span>Strict Park Policy</span>
                  </div>
                  <p className="text-sm text-[#5C6059]">
                    {poweredSites.notice} All powered sites are designated exclusively for caravans.
                  </p>
                </div>

                {/* Inquiries */}
                <div className="pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6059] block mb-3">
                    Inquire for Powered Sites:
                  </span>
                  <InquiryActions
                    variant="card"
                    subject={poweredSites.inquirySubject}
                    whatsappMessage={poweredSites.inquiryWhatsApp}
                    showEmail={true}
                  />
                </div>
              </div>
            </div>

            {/* Shared Facilities & Stay Support */}
            <div className="border border-[#E5E2DA] bg-[#FBFBF9] p-6 sm:p-10">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-2">
                  Shared Amenities & Stays
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1B1D1A]">
                  Park Amenities & Long-Term Arrangements
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {sharedFacilities.map((facility) => (
                  <div
                    key={facility}
                    className="p-5 bg-[#F3EFEA] border border-[#E5E2DA] flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-[#3D4A3E] shrink-0" />
                    <span className="text-sm font-medium text-[#1B1D1A]">
                      {facility}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#F3EFEA] border border-[#E5E2DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1B1D1A]">
                    Contractor & Roster Bookings
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C6059]">
                    Daily stays and extended arrangements supported for industry personnel and contractors.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={whatsappHref("Hello Riverside Cabin and Van Park, I would like to inquire about contractor and roster accommodation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1B1D1A] text-white hover:bg-[#3D4A3E] transition-colors"
                    aria-label="Inquire about contractor stays on WhatsApp (opens in a new tab)"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={phoneHref()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#FBFBF9] text-[#1B1D1A] hover:bg-white border border-[#E5E2DA] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#3D4A3E]" />
                    <span>Call</span>
                  </a>
                  <a
                    href={emailHref("Contractor Stay Inquiry")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#FBFBF9] text-[#1B1D1A] hover:bg-white border border-[#E5E2DA] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#3D4A3E]" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Base Direct Inquiry Suite */}
        <DirectInquirySection />
      </main>

      <Footer />
    </>
  );
}
