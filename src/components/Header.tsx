"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { contact, phoneHref, emailHref, whatsappHref } from "@/data/contact";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Three primary links as required
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Accommodation", href: "/accommodation" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E5E2DA] shadow-xs"
          : "bg-[#FBFBF9] border-b border-[#E5E2DA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-2 focus-visible:outline-[#3D4A3E]"
          >
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#1B1D1A] group-hover:text-[#3D4A3E] transition-colors">
              Riverside Cabin & Van Park
            </span>
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#5C6059]">
              Muswellbrook • NSW
            </span>
          </Link>

          {/* Desktop Navigation — Exactly 3 links, no competing buttons */}
          <nav
            className="hidden md:flex items-center gap-9"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isPageActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href === "/accommodation"
                  ? pathname === "/accommodation"
                  : false;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors py-1.5 relative ${
                    isPageActive
                      ? "text-[#1B1D1A] font-medium"
                      : "text-[#5C6059] hover:text-[#1B1D1A]"
                  }`}
                >
                  {link.label}
                  {isPageActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#3D4A3E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1B1D1A] hover:bg-[#F3EFEA] rounded border border-[#E5E2DA]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-50 bg-[#FBFBF9] border-t border-[#E5E2DA] flex flex-col justify-between p-6 animate-fadeIn">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isPageActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href === "/accommodation"
                  ? pathname === "/accommodation"
                  : false;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-serif py-3 border-b border-[#E5E2DA]/60 flex items-center justify-between ${
                    isPageActive
                      ? "text-[#1B1D1A] font-medium"
                      : "text-[#5C6059] hover:text-[#1B1D1A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isPageActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D4A3E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Discreet Mobile Contact Actions */}
          <div className="pt-6 border-t border-[#E5E2DA] space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#5C6059] block mb-1">
              Direct Contact
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold tracking-wider uppercase bg-[#1B1D1A] text-[#FBFBF9] hover:bg-[#3D4A3E] transition-colors text-center"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#FBFBF9]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={phoneHref()}
                className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold tracking-wider uppercase bg-[#F3EFEA] text-[#1B1D1A] border border-[#E5E2DA] hover:bg-[#E5E2DA] transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#3D4A3E]" />
                <span>Call</span>
              </a>
            </div>
            <a
              href={emailHref()}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-[#5C6059] hover:text-[#1B1D1A] transition-colors text-center"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email: {contact.email.address}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
