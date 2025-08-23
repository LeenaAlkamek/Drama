
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SeriesCard from './SeriesCard';
import { series } from "../../data/series";
import { Show } from "../../models/type"; 

export default function Series() {
  const [selectedGenre, setSelectedGenre] = useState('الكل');
  const [sortBy, setSortBy] = useState('الأحدث');

  const genres = ['الكل', 'دراما', 'كوميديا', 'إثارة', 'خيال علمي', 'جريمة', 'رومانسي', 'تاريخي', 'وثائقي'];

  

  const filteredSeries = series.filter(show => 
    selectedGenre === 'الكل' || show.genre === selectedGenre
  );

  const sortedSeries = [...filteredSeries].sort((a, b) => {
    if (sortBy === 'الأحدث') return b.year - a.year;
    if (sortBy === 'التقييم') return b.rating - a.rating;
    if (sortBy === 'الاسم') return a.title.localeCompare(b.title, 'ar');
    return 0;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">مكتبة المسلسلات</h1>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    selectedGenre === genre
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <span className="text-gray-400 text-sm">ترتيب حسب:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 pr-8"
              >
                <option value="الأحدث">الأحدث</option>
                <option value="التقييم">التقييم</option>
                <option value="الاسم">الاسم</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 pb-16">
          {sortedSeries.map((show) => (
            <SeriesCard
              key={show.id}
              series={{
                ...show,
                image: show.image ?? '',
                crew: {
                  ...show.crew,
                  writer: typeof show.crew.writer === 'number' ? String(show.crew.writer) : show.crew.writer,
                  director: typeof show.crew.director === 'number' ? String(show.crew.director) : show.crew.director,
                  cast: Array.isArray(show.crew.cast)
                    ? show.crew.cast.map((c) => typeof c === 'number' ? String(c) : c)
                    : [],
                },
              }}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
