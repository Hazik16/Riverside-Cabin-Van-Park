import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  contact,
  phoneHref,
  emailHref,
  whatsappHref,
  directionsHref,
} from "@/data/contact";

interface InquiryActionsProps {
  subject?: string;
  whatsappMessage?: string;
  variant?: "card" | "compact";
  className?: string;
  showPhone?: boolean;
  showEmail?: boolean;
  showWhatsApp?: boolean;
  showDirections?: boolean;
}

export function InquiryActions({
  subject,
  whatsappMessage,
  variant = "card",
  className = "",
  showPhone = false,
  showEmail = false,
  showWhatsApp = true,
  showDirections = false,
}: InquiryActionsProps) {
  const isWhatsAppActive = contact.whatsapp.isConfirmed && showWhatsApp;

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {isWhatsAppActive && (
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] text-xs font-medium tracking-wide text-[#FBFBF9] bg-[#1B1D1A] hover:bg-[#3D4A3E] rounded transition-colors duration-200"
            aria-label="Inquire on WhatsApp (opens in a new tab)"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#FBFBF9]" />
            <span>WhatsApp</span>
          </a>
        )}
        {showEmail && (
          <a
            href={emailHref(subject)}
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-xs font-medium tracking-wide text-[#1B1D1A] bg-[#F3EFEA] hover:bg-[#E5E2DA] border border-[#E5E2DA] rounded transition-colors duration-200"
            aria-label="Send email inquiry"
          >
            <Mail className="w-3.5 h-3.5 text-[#3D4A3E]" />
            <span>Email</span>
          </a>
        )}
        {showPhone && (
          <a
            href={phoneHref()}
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-xs font-medium tracking-wide text-[#1B1D1A] bg-[#F3EFEA] hover:bg-[#E5E2DA] border border-[#E5E2DA] rounded transition-colors duration-200"
            aria-label={`Call reception at ${contact.phone.display}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#3D4A3E]" />
            <span>Call</span>
          </a>
        )}
      </div>
    );
  }

  // Refined single elegant inquiry action per section with optional quiet email secondary
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {isWhatsAppActive ? (
        <a
          href={whatsappHref(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors duration-200"
          aria-label="Inquire via WhatsApp (opens in a new tab)"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#FBFBF9]" />
          <span>Inquire via WhatsApp</span>
        </a>
      ) : (
        <a
          href={emailHref(subject)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors duration-200"
          aria-label="Send email inquiry"
        >
          <Mail className="w-3.5 h-3.5 text-[#FBFBF9]" />
          <span>Email Inquiry</span>
        </a>
      )}

      {showEmail && isWhatsAppActive && (
        <a
          href={emailHref(subject)}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase text-[#5C6059] hover:text-[#1B1D1A] transition-colors duration-200"
          aria-label="Send email inquiry"
        >
          <Mail className="w-3.5 h-3.5 text-[#3D4A3E]" />
          <span>Or Email</span>
        </a>
      )}

      {showPhone && (
        <a
          href={phoneHref()}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase text-[#5C6059] hover:text-[#1B1D1A] transition-colors duration-200"
          aria-label={`Call reception at ${contact.phone.display}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#3D4A3E]" />
          <span>Call Reception</span>
        </a>
      )}

      {showDirections && (
        <a
          href={directionsHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase bg-[#F3EFEA] text-[#1B1D1A] hover:bg-[#E5E2DA] border border-[#E5E2DA] transition-colors duration-200"
          aria-label="Open Google Maps directions to 10 Mill Street"
        >
          <MapPin className="w-3.5 h-3.5 text-[#3D4A3E]" />
          <span>Get Directions</span>
        </a>
      )}
    </div>
  );
}
