"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../lib/content";

interface Photo {
  id: number;
  orientation: "landscape" | "portrait";
  caption: string;
  alt: string;
}

interface PhotoWithBody extends Photo {
  bodyText?: string;
}

const photos: PhotoWithBody[] = [
  {
    id: 1,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Hero landscape photograph"
  },
  {
    id: 2,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Second landscape photograph"
  },
  {
    id: 3,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Third landscape photograph"
  },
  {
    id: 4,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Fourth landscape photograph"
  },
  {
    id: 5,
    orientation: "portrait",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "First portrait photograph"
  },
  {
    id: 6,
    orientation: "portrait",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Second portrait photograph"
  },
  {
    id: 7,
    orientation: "portrait",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Third portrait photograph"
  },
  {
    id: 8,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Fifth landscape photograph"
  },
  {
    id: 9,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Sixth landscape photograph"
  },
  {
    id: 10,
    orientation: "portrait",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Fourth portrait photograph"
  },
  {
    id: 11,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Sixth landscape photograph"
  },
  {
    id: 12,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Seventh landscape photograph"
  },
  {
    id: 13,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Eighth landscape photograph"
  },
  {
    id: 14,
    orientation: "landscape",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Ninth landscape photograph"
  },
  {
    id: 15,
    orientation: "portrait",
    caption: "Lili Hajnal Péntek, Kerala, August 2024",
    alt: "Final portrait photograph"
  }
];

export default function PhotoGallery() {
  const { currentLanguage } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const currentContent = content[currentLanguage] || content.en;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % photos.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + photos.length) % photos.length
    );
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center pt-12 pb-16">
        <div className="text-xs text-gray-600 uppercase tracking-wider mb-3 font-normal">
          {currentContent.header.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-normal mb-6 max-w-4xl mx-auto leading-tight text-black">
          {currentContent.header.title}
        </h1>
        <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto leading-6 font-normal">
          {currentContent.header.subtitle}
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <a 
            href="https://www.instagram.com/lilipentek/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com/@lilipentek" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors duration-200"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Gallery */}
      <div className="max-w-none pb-24 md:pb-32">
        {photos.map((photo, index) => (
          <div key={photo.id} className="mb-8 md:mb-12">
            {/* Image */}
            <div className={`
              relative mx-auto mb-1 cursor-pointer
              ${photo.id === 1 
                ? 'w-[92%] md:w-[57.6%]' // Hero image
                : 'w-[92%] md:w-[35%]'    // Standard images
              }
            `}>
              <Image
                src={`/images/${photo.id}.jpeg`}
                alt={photo.alt}
                width={photo.orientation === "landscape" ? 1200 : 800}
                height={photo.orientation === "landscape" ? 800 : 1200}
                className="w-full h-auto hover:opacity-95 transition-opacity duration-200"
                style={{ objectFit: 'contain' }}
                priority={photo.id === 1}
                onClick={() => openLightbox(index)}
              />
            </div>

            {/* Caption */}
            <div className={`
              text-left mb-6
              ${photo.id === 1 
                ? 'w-[92%] md:w-[57.6%]' 
                : 'w-[92%] md:w-[35%]'
              } mx-auto
            `}>
              <p className="text-xs text-gray-600 font-normal tracking-wide">
                {photo.caption}
              </p>
            </div>

            {/* Body Text */}
            {(photo.bodyText || currentContent.photos[photo.id]?.bodyText) && (
              <div className={`
                mx-auto mb-12 md:mb-16
                ${photo.id === 1 
                  ? 'w-[92%] md:w-[57.6%]' 
                  : 'w-[92%] md:w-[35%]'
                }
              `}>
                <p className="text-sm leading-6 text-gray-800 font-normal ml-4 md:ml-6">
                  {currentContent.photos[photo.id]?.bodyText || photo.bodyText}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        photos={photos}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </article>
  );
}
