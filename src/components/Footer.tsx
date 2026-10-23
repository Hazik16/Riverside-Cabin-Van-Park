import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { contact, phoneHref, emailHref, whatsappHref, directionsHref } from "@/data/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1D1A] text-[#FBFBF9] border-t border-[#3D4A3E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Col 1: Property Identity */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-normal tracking-wide text-white block">
              Riverside Cabin & Van Park
            </span>
            <p className="text-sm text-[#FBFBF9]/70 leading-relaxed max-w-sm">
              Providing quiet, practical cabin accommodation and powered caravan
              sites along the Hunter River in Muswellbrook. Supporting mining
              personnel, contractors, and regional travellers.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7B54] mb-4">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#FBFBF9]/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-[#FBFBF9]/70 hover:text-white transition-colors"
                >
                  Accommodation & Sites
                </Link>
              </li>
              <li>
                <Link
                  href="/#facilities"
                  className="text-[#FBFBF9]/70 hover:text-white transition-colors"
                >
                  Park Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/#workplaces"
                  className="text-[#FBFBF9]/70 hover:text-white transition-colors"
                >
                  Nearby Workplaces
                </Link>
              </li>
              <li>
                <Link
                  href="/#location"
                  className="text-[#FBFBF9]/70 hover:text-white transition-colors"
                >
                  Location & Directions
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-[#FBFBF9]/70 hover:text-white transition-colors"
                >
                  Direct Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7B54] mb-4">
              Direct Contact
            </h2>
            <address className="not-italic space-y-3 text-sm text-[#FBFBF9]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7B54] shrink-0 mt-0.5" />
                <a
                  href={directionsHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contact.address.full}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9E7B54] shrink-0" />
                <a
                  href={phoneHref()}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#9E7B54] shrink-0" />
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Chat on WhatsApp (opens in a new tab)"
                >
                  WhatsApp ({contact.phone.localDisplay})
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9E7B54] shrink-0" />
                <a
                  href={emailHref()}
                  className="hover:text-white transition-colors break-all"
                >
                  {contact.email.address}
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-[#FBFBF9]/50">
          <p>© {currentYear} Riverside Cabin and Van Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
