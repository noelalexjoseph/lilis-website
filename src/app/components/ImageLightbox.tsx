"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Photo {
  id: number;
  orientation: "landscape" | "portrait";
  caption: string;
  alt: string;
}

interface ImageLightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: ImageLightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];
  
  // Calculate next and previous indices for preloading
  const nextIndex = (currentIndex + 1) % photos.length;
  const prevIndex = (currentIndex - 1 + photos.length) % photos.length;

  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-75 backdrop-blur-sm flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-gray-700 hover:text-black hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
        aria-label="Close gallery"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black hover:bg-white hover:bg-opacity-20 rounded-full p-3 transition-all duration-200 z-10"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black hover:bg-white hover:bg-opacity-20 rounded-full p-3 transition-all duration-200 z-10"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <Image
          src={`/images/${currentPhoto.id}.jpeg`}
          alt={currentPhoto.alt}
          width={currentPhoto.orientation === "landscape" ? 1200 : 800}
          height={currentPhoto.orientation === "landscape" ? 800 : 1200}
          className="max-w-full max-h-full object-contain"
          priority
        />
      </div>

      {/* Preload Next and Previous Images */}
      <div className="hidden">
        <Image
          src={`/images/${photos[nextIndex].id}.jpeg`}
          alt="Next image"
          width={photos[nextIndex].orientation === "landscape" ? 1200 : 800}
          height={photos[nextIndex].orientation === "landscape" ? 800 : 1200}
          priority={false}
        />
        <Image
          src={`/images/${photos[prevIndex].id}.jpeg`}
          alt="Previous image"
          width={photos[prevIndex].orientation === "landscape" ? 1200 : 800}
          height={photos[prevIndex].orientation === "landscape" ? 800 : 1200}
          priority={false}
        />
      </div>

      {/* Image Info */}
      <div className="absolute bottom-6 left-6 right-6 text-center">
        <p className="text-gray-800 text-sm mb-2 bg-white bg-opacity-80 rounded px-3 py-1 inline-block">
          {currentPhoto.caption}
        </p>
        <p className="text-gray-600 text-xs bg-white bg-opacity-60 rounded px-2 py-1 inline-block">
          {currentIndex + 1} of {photos.length}
        </p>
      </div>

      {/* Background Click to Close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
        aria-label="Close gallery"
      />
    </div>
  );
}
