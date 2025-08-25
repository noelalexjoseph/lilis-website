import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl">
        {/* Large Project Card */}
        <Link href="/onam" className="block group cursor-pointer">
          <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
            {/* Hero Image */}
            <div className="relative aspect-[4/3] md:aspect-[5/3] w-full">
              <Image
                src="/images/1.jpeg"
                alt="Onam Photography Project"
                fill
                className="object-cover"
                priority
              />
              
              {/* Black Film Overlay on Hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out" />
              
              {/* Project Title Overlay - appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                  <h2 className="text-5xl md:text-7xl font-light mb-4">Onam</h2>
                  <p className="text-xl md:text-2xl font-light tracking-wide">Photography Project</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
