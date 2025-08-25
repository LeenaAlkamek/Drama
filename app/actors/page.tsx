'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { actors } from '../../data/actors';

export default function ActorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedGenre, setSelectedGenre] = useState('all'); // الكل افتراضي
  const [currentPage, setCurrentPage] = useState(1); // صفحة البداية

  const itemsPerPage = 12; // 12 كارد (3 صفوف × 4 أعمدة)

  // استخراج الأنواع بدون تكرار
  const genres = [...new Set(actors.map(actor => actor.genre))];

  // الفلترة حسب البحث والنوع مع دعم "الكل"
  const filteredActors = actors.filter(actor =>
    (actor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      actor.nameEn.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedGenre === 'all' || actor.genre === selectedGenre)
  );

  // الترتيب
  const sortedActors = [...filteredActors].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'works':
        return b.worksCount - a.worksCount;
      default:
        return 0;
    }
  });

  // حساب عدد الصفحات
  const totalPages = Math.ceil(sortedActors.length / itemsPerPage);

  // تقطيع البيانات للصفحة الحالية
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentActors = sortedActors.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <div className="px-4 md:px-8 lg:px-16 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-center">الممثلون</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              اكتشف نجوم السينما والدراما العربية، تعرف على سيرهم الذاتية وأعمالهم المميزة
            </p>
          </div>

          {/* شريط البحث + الترتيب */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="ابحث عن ممثل..."
                className="bg-gray-800 text-white px-4 py-3 pr-12 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // رجع للصفحة الأولى عند البحث
                }}
              />
              <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
              <select
                className="bg-gray-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 pr-8"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1); // رجع للصفحة الأولى عند تغيير الترتيب
                }}
              >
                <option value="name">ترتيب حسب الاسم</option>
                <option value="rating">ترتيب حسب التقييم</option>
                <option value="works">ترتيب حسب عدد الأعمال</option>
              </select>
            </div>
          </div>

          {/* أزرار اختيار النوع + زر الكل */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => { setSelectedGenre('all'); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedGenre === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              الكل
            </button>

            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => { setSelectedGenre(genre); setCurrentPage(1); }}
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

          {/* عرض الممثلين */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
            {currentActors.map((actor) => (
              <Link key={actor.id} href={`/actorsprofile/${actor.id}`}>
                <div className="bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      <i className="ri-star-fill mr-1"></i>
                      {actor.rating}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-red-500 transition-colors">
                      {actor.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{actor.nameEn}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line"></i>
                        {actor.nationality}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-film-line"></i>
                        {actor.worksCount} عمل
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                      {actor.bio}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-700">
                      <span className="text-red-500 text-sm font-medium group-hover:underline whitespace-nowrap">
                        عرض الملف الشخصي
                        <i className="ri-arrow-left-line mr-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* الترقيم Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {/* <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
              >
                السابق
              </button> */}

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
              >
                التالي
              </button> */}
            </div>
          )}

          {/* في حال لا يوجد نتائج */}
          {sortedActors.length === 0 && (
            <div className="text-center py-20">
              <i className="ri-search-line text-6xl text-gray-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-400 mb-2">لم يتم العثور على نتائج</h3>
              <p className="text-gray-500">جرب البحث بكلمات أخرى أو تصفح جميع الممثلين</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
