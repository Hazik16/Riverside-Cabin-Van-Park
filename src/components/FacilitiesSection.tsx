import React from "react";
import { Sparkles, Car, WashingMachine } from "lucide-react";

export function FacilitiesSection() {
  const facilities = [
    {
      title: "On-Site Laundromat",
      description:
        "Dedicated on-site laundry facilities available to all guests, providing practical convenience for work stays and longer visits.",
      icon: WashingMachine,
    },
    {
      title: "Housekeeping Available",
      description:
        "Housekeeping services available for resident and contractor stays to maintain a clean and restful accommodation environment.",
      icon: Sparkles,
    },
    {
      title: "Dedicated Vehicle Parking",
      description:
        "Convenient vehicle parking allocated per accommodation booking, ensuring straightforward access to your cabin or site.",
      icon: Car,
    },
  ];

  return (
    <section id="facilities" className="py-20 lg:py-24 bg-[#F3EFEA] border-y border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-3">
            Guest Conveniences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1A] tracking-tight">
            Essential Park Facilities
          </h2>
          <p className="mt-3 text-base text-[#5C6059]">
            Functional amenities designed to support working shifts, everyday routines, and independent regional stays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac) => {
            const IconComponent = fac.icon;
            return (
              <div
                key={fac.title}
                className="bg-[#FBFBF9] p-8 border border-[#E5E2DA] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center bg-[#F3EFEA] text-[#3D4A3E] mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1B1D1A] mb-3">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-[#5C6059] leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
