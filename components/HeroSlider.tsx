
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
}

interface HeroSliderProps {
  movies: Movie[];
}

export default function HeroSlider({ movies }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [movies.length]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % movies.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  // };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden mt-16">
      <div className="absolute inset-0">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              
              <div className="relative h-full flex items-center px-4 md:px-8 lg:px-16 ">
                <div className="max-w-2xl space-y-reverse space-y-6">
                  <div className="flex items-center space-x-reverse space-x-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      جديد
                    </span>
                    <span className="text-gray-300 text-sm">{movie.year}</span>
                    <span className="text-gray-300 text-sm">{movie.genre}</span>
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center mr-1"></i>
                      <span className="text-white text-sm">{movie.rating}</span>
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:pt-4">
                    {movie.title}
                  </h1>

                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                    {movie.description}
                  </p>

                  <div className="flex items-center space-x-reverse space-x-4">
                    <Link
                      href={`/watch/series/${movie.id}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-reverse space-x-2 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-play-fill w-5 h-5 flex items-center justify-center"></i>
                      <span>مشاهدة الآن</span>
                    </Link>
                    
                    <Link
                      href={`/movie/series/${movie.id}`}
                      className="bg-gray-800/80 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-reverse space-x-2 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-information-line w-5 h-5 flex items-center justify-center"></i>
                      <span>تفاصيل</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors z-10 w-12 h-12 flex items-center justify-center"
      >
        <i className="ri-arrow-left-s-line w-6 h-6 flex items-center justify-center"></i>
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors z-10 w-12 h-12 flex items-center justify-center"
      >
        <i className="ri-arrow-right-s-line w-6 h-6 flex items-center justify-center"></i>
      </button> */}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-reverse space-x-2 z-10">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? 'bg-red-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
