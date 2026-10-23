import React from "react";
import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";
import { contact, directionsHref } from "@/data/contact";

export function LocationSection() {
  return (
    <section id="location" className="py-20 lg:py-24 bg-[#F3EFEA] border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-3">
                Hunter River Setting
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1A] tracking-tight">
                Quiet & Convenient Location
              </h2>
            </div>

            <p className="text-base text-[#5C6059] leading-relaxed">
              Positioned on Mill Street alongside the Hunter River, Riverside Cabin and Van Park offers a calm, natural setting with immediate connectivity to Muswellbrook township and regional transport corridors.
            </p>

            <div className="p-6 bg-[#FBFBF9] border border-[#E5E2DA] space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3D4A3E] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1B1D1A] uppercase tracking-wider mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-[#5C6059]">
                    10 Mill Street, Muswellbrook NSW 2333, Australia
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E2DA] flex flex-wrap gap-3">
                <a
                  href={directionsHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] bg-[#1B1D1A] border border-[#E5E2DA] p-8 sm:p-10 flex flex-col justify-between text-[#FBFBF9]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-widest text-[#9E7B54] bg-white/5 border border-white/10">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Muswellbrook NSW 2333</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Riverside Living on Mill Street
                </h3>
                <p className="text-sm text-[#FBFBF9]/70 leading-relaxed max-w-md">
                  Enjoy the peaceful pace of riverside accommodation, whether returning from a mining shift or exploring the Upper Hunter region.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#FBFBF9]/50 block">
                    Phone Reception
                  </span>
                  <span className="text-sm font-medium text-white">
                    {contact.phone.display}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#FBFBF9]/50 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-medium text-white">
                    {contact.email.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
