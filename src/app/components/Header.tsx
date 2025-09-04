"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", display: "EN" },
    { code: "hu", name: "Hungarian", display: "HU" },
    { code: "de", name: "German", display: "DE" }
  ];

  const handleLanguageChange = (languageCode: "en" | "hu" | "de") => {
    setLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  const currentLangDisplay = languages.find(lang => lang.code === currentLanguage)?.display || "EN";

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-xl font-normal text-black tracking-normal" style={{ fontFamily: 'Garamond, "Adobe Garamond Pro", "EB Garamond", serif' }}>
              Lili Hajnal Péntek
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200 font-normal text-sm"
              >
                <span>{currentLangDisplay}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code as "en" | "hu" | "de")}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                        currentLanguage === language.code
                          ? 'bg-gray-50 text-black font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isLanguageDropdownOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </header>
  );
}
