"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-800">
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-8">
            <Link
              href="/"
              className="text-red-600 text-2xl font-bold font-[Pacifico]"
            >
              YemenMedia
            </Link>

            <nav className="hidden md:flex items-center space-x-reverse space-x-6">
              <Link
                href="/"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                الرئيسية
              </Link>

              <Link
                href="/series"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                المسلسلات
              </Link>

              <Link
                href="/movies"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                الأفلام
              </Link>

              

              <Link
                href="/programs"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                البرامج
              </Link>

              <Link
                href="/podcasts"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                البودكاست
              </Link>

               <Link
                href="/plays"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                المسرحيات
              </Link>

              <Link
                href="/kids"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                الاطفال
              </Link>

              <Link
                href="/actors"
                className="text-white hover:text-red-500 transition-colors whitespace-nowrap"
              >
                الممثلين
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-reverse space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="بحث في الأفلام والمسلسلات..."
                className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
            </div>

            <Link
              href="/favorites"
              className="text-white hover:text-red-500 transition-colors w-6 h-6 flex items-center justify-center"
            >
              <i className="ri-heart-line w-5 h-5 flex items-center justify-center"></i>
            </Link>

            <Link
              href="/auth"
              className="text-white hover:text-red-500 transition-colors w-6 h-6 flex items-center justify-center"
            >
              <i className="ri-user-line w-5 h-5 flex items-center justify-center"></i>
            </Link>

            <button
              className="md:hidden text-white hover:text-red-500 transition-colors w-6 h-6 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`${
                  isMenuOpen ? "ri-close-line" : "ri-menu-line"
                } w-5 h-5 flex items-center justify-center`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="بحث..."
                className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white hover:text-red-500 transition-colors"
              >
                الرئيسية
              </Link>

              <Link
                href="/series"
                className="text-white hover:text-red-500 transition-colors"
              >
                المسلسلات
              </Link>

              <Link
                href="/movies"
                className="text-white hover:text-red-500 transition-colors"
              >
                الأفلام
              </Link>
              
              <Link
                href="/programs"
                className="text-white hover:text-red-500 transition-colors"
              >
                البرامج
              </Link>

              <Link
                href="podcasts"
                className="text-white hover:text-red-500 transition-colors"
              >
                البودكاست
              </Link>

              <Link
                href="plays"
                className="text-white hover:text-red-500 transition-colors"
              >
                المسرحيات
              </Link>

              <Link
                href="kids"
                className="text-white hover:text-red-500 transition-colors"
              >
                الاطفال
              </Link>

              <Link
                href="/actors"
                className="text-white hover:text-red-500 transition-colors"
              >
                الممثلين
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
