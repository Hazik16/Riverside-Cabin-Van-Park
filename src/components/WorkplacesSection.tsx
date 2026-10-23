import React from "react";
import { Building2, Compass } from "lucide-react";
import { workplaces } from "@/data/workplaces";

export function WorkplacesSection() {
  return (
    <section id="workplaces" className="py-20 lg:py-24 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9E7B54] block mb-3">
            Regional Proximity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1D1A] tracking-tight">
            Nearby Industry & Workplaces
          </h2>
          <p className="mt-3 text-base text-[#5C6059]">
            Riverside Cabin and Van Park is ideally situated in Muswellbrook, providing practical base accommodation for personnel across major regional operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workplaces.map((place) => (
            <div
              key={place}
              className="p-5 bg-[#F3EFEA]/60 border border-[#E5E2DA] flex items-center gap-3.5 hover:bg-[#F3EFEA] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#3D4A3E]/10 flex items-center justify-center shrink-0 text-[#3D4A3E]">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-[#1B1D1A]">
                {place}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 bg-[#F3EFEA] border border-[#E5E2DA] flex items-center justify-center gap-2 text-xs text-[#5C6059] text-center">
          <Compass className="w-4 h-4 text-[#3D4A3E] shrink-0" />
          <span>
            Convenient base location on Mill Street offering quick arterial access throughout the Muswellbrook and Upper Hunter industrial corridors.
          </span>
        </div>
      </div>
    </section>
  );
}
