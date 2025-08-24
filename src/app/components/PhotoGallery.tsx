import Image from "next/image";

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
    caption: "photographer • place • year",
    alt: "Hero landscape photograph",
    bodyText: "Body text directly after the hero image. This is the main introductory text that sets the tone for the entire gallery and provides context for the photographic journey ahead."
  },
  {
    id: 2,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Second landscape photograph"
  },
  {
    id: 3,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Third landscape photograph",
    bodyText: "Shared body text that covers images #2-#3. This section discusses the connection between these two landscape photographs and their significance in the overall narrative."
  },
  {
    id: 4,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Fourth landscape photograph"
  },
  {
    id: 5,
    orientation: "portrait",
    caption: "photographer • place • year",
    alt: "First portrait photograph",
    bodyText: "Shared body text that covers images #4-#5. This section explores the transition from landscape to portrait orientation and the artistic choices behind this shift."
  },
  {
    id: 6,
    orientation: "portrait",
    caption: "photographer • place • year",
    alt: "Second portrait photograph",
    bodyText: "Body text specific to image #6. This portrait stands alone with its own narrative and artistic interpretation."
  },
  {
    id: 7,
    orientation: "portrait",
    caption: "photographer • place • year",
    alt: "Third portrait photograph",
    bodyText: "Body text specific to image #7. Another individual portrait with its unique story and visual impact."
  },
  {
    id: 8,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Fifth landscape photograph"
  },
  {
    id: 9,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Sixth landscape photograph",
    bodyText: "Shared body text that covers images #8-#9. These landscape images work together to create a cohesive visual statement."
  },
  {
    id: 10,
    orientation: "portrait",
    caption: "photographer • place • year",
    alt: "Fourth portrait photograph",
    bodyText: "Body text specific to image #10. This portrait marks a significant moment in the photographic sequence."
  },
  // Note: #11 is missing from the photos directory
  {
    id: 12,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Seventh landscape photograph"
  },
  {
    id: 13,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Eighth landscape photograph",
    bodyText: "Single shared body text that covers images #12-#13. These final landscape images provide a sense of closure to this section."
  },
  {
    id: 14,
    orientation: "landscape",
    caption: "photographer • place • year",
    alt: "Ninth landscape photograph"
  },
  {
    id: 15,
    orientation: "portrait",
    caption: "photographer • place • year",
    alt: "Final portrait photograph",
    bodyText: "Single shared body text that covers images #14-#15. The final pairing brings together landscape and portrait to conclude the visual narrative."
  }
];

export default function PhotoGallery() {
  return (
    <article className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center pt-8 pb-12">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
          Photography
        </div>
        <h1 className="text-4xl md:text-5xl font-light mb-4 max-w-4xl mx-auto leading-tight">
          Gallery Title Goes Here
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          A compelling subheading that captures the essence of this photographic journey in approximately sixty characters per line
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a 
            href="#" 
            className="text-gray-600 hover:text-black transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-black transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-black transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Gallery */}
      <div className="max-w-none">
        {photos.map((photo) => (
          <div key={photo.id} className="mb-8 md:mb-12">
            {/* Image */}
            <div className={`
              relative mx-auto mb-2
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
                className={`
                  w-full h-auto object-cover
                  ${photo.orientation === "portrait" ? "max-h-[80vh]" : ""}
                `}
                priority={photo.id === 1}
              />
            </div>

            {/* Caption */}
            <div className={`
              text-left mb-3
              ${photo.id === 1 
                ? 'max-w-[57.6%]' 
                : 'max-w-[35%]'
              } mx-auto
            `}>
              <p className="text-sm text-gray-500">
                {photo.caption}
              </p>
            </div>

            {/* Body Text */}
            {photo.bodyText && (
              <div className={`
                mx-auto mb-8 md:mb-10
                ${photo.id === 1 
                  ? 'max-w-[57.6%]' 
                  : 'max-w-[35%]'
                } 
                w-[92%] md:w-auto
              `}>
                <p className="text-base leading-relaxed text-gray-800">
                  {photo.bodyText}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
