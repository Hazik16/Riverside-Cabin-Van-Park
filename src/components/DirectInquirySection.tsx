import React from "react";
import { Phone, Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  contact,
  phoneHref,
  emailHref,
  whatsappHref,
  directionsHref,
} from "@/data/contact";

export function DirectInquirySection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 lg:py-28 bg-[#FBFBF9] border-t border-[#E5E2DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-3">
            Direct Bookings & Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1D1A] tracking-tight">
            Contact Reception
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C6059] leading-relaxed">
            Speak or message directly with our on-site team to inquire about cabin rates, powered caravan site availability, or contractor roster arrangements.
          </p>
        </div>

        {/* 3 Primary Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Channel 1: Phone */}
          <div className="p-8 bg-[#F3EFEA] border border-[#E5E2DA] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-[#FBFBF9] text-[#3D4A3E] mb-6 border border-[#E5E2DA]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1B1D1A] mb-2">
                Call Reception
              </h3>
              <p className="text-sm text-[#5C6059] mb-4 leading-relaxed">
                Direct phone inquiries for real-time site availability and same-day arrivals.
              </p>
              <div className="text-base font-medium text-[#1B1D1A] mb-6">
                {contact.phone.display}
              </div>
            </div>
            <a
              href={phoneHref()}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors"
              aria-label={`Call reception at ${contact.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Channel 2: WhatsApp */}
          <div className="p-8 bg-[#F3EFEA] border border-[#E5E2DA] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-[#FBFBF9] text-[#3D4A3E] mb-6 border border-[#E5E2DA]">
                <WhatsAppIcon className="w-5 h-5 text-[#3D4A3E]" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1B1D1A] mb-2">
                WhatsApp Inquiry
              </h3>
              <p className="text-sm text-[#5C6059] mb-4 leading-relaxed">
                Fast messaging with our reception team for inquiries and cabin bookings.
              </p>
              <div className="text-base font-medium text-[#1B1D1A] mb-6">
                {contact.phone.display}
              </div>
            </div>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors"
              aria-label="Chat with reception on WhatsApp (opens in a new tab)"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#FBFBF9]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Channel 3: Email */}
          <div className="p-8 bg-[#F3EFEA] border border-[#E5E2DA] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-[#FBFBF9] text-[#3D4A3E] mb-6 border border-[#E5E2DA]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#1B1D1A] mb-2">
                Email Inquiry
              </h3>
              <p className="text-sm text-[#5C6059] mb-4 leading-relaxed">
                Send dates, workforce requirements, or written accommodation questions.
              </p>
              <div className="text-sm font-medium text-[#1B1D1A] mb-6 break-all">
                {contact.email.address}
              </div>
            </div>
            <a
              href={emailHref()}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors"
              aria-label="Send email inquiry"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Integrated Location & Google Maps Card */}
        <div className="p-6 sm:p-8 bg-[#F3EFEA] border border-[#E5E2DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 flex items-center justify-center bg-[#FBFBF9] text-[#3D4A3E] border border-[#E5E2DA] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1B1D1A] mb-1">
                Park Location
              </h4>
              <p className="text-sm text-[#5C6059]">
                {contact.address.full}
              </p>
            </div>
          </div>

          <a
            href={directionsHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#FBFBF9] text-[#1B1D1A] hover:bg-white border border-[#E5E2DA] transition-colors shrink-0"
            aria-label="Open location in Google Maps (opens in a new tab)"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5C6059]" />
          </a>
        </div>

        {/* Guest Support Context */}
        <div className="mt-8 p-6 bg-[#F3EFEA]/60 border border-[#E5E2DA] flex items-center gap-3 text-xs text-[#5C6059]">
          <Clock className="w-4 h-4 text-[#9E7B54] shrink-0" />
          <span>
            Supporting shift workers, FIFO mining personnel, power-station contractors, and regional travellers in Muswellbrook.
          </span>
        </div>
      </div>
    </section>
  );
}
