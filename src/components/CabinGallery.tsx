"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AccommodationImage } from "@/data/accommodations";

interface CabinGalleryProps {
  images: AccommodationImage[];
  title: string;
}

export function CabinGallery({ images, title }: CabinGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard events for modal navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <div className="space-y-3">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[4/3] w-full overflow-hidden bg-[#F3EFEA] border border-[#E5E2DA] focus-visible:outline-2 focus-visible:outline-[#3D4A3E] text-left cursor-pointer"
            aria-label={`View enlarged photo: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-2 rounded-full backdrop-blur-xs">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Accessible Fullscreen Modal */}
      {selectedIndex !== null && images[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} Image Viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null
                    ? prev === 0
                      ? images.length - 1
                      : prev - 1
                    : null
                );
              }}
              className="absolute left-4 z-50 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs text-white/70">
              <span>{images[selectedIndex].alt}</span>
              <span className="mx-2">•</span>
              <span>
                {selectedIndex + 1} of {images.length}
              </span>
            </div>
          </div>

          {/* Navigation Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null
                    ? prev === images.length - 1
                      ? 0
                      : prev + 1
                    : null
                );
              }}
              className="absolute right-4 z-50 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
