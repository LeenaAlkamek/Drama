"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import MovieCard from "../components/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// import { featuredMovies } from "../data/moviesData";
import { series } from "../data/series";
import { movies } from "../data/movies";
import { kids } from "../data/kids";
import { programs } from "../data/programs";
import { podcasts } from "../data/podcasts";
import { plays } from "../data/plays";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <HeroSlider movies={series} />

      <div className="px-4 md:px-8 lg:px-16 py-12 space-y-16">
        {/* دالة مشتركة ترندر أي قسم */}
        {renderSection("المسلسلات", "/series", series, "series")}
        {renderSection("الأفلام", "/movies", movies, "movies")}
        {renderSection("البرامج", "/programs", programs, "programs")}
        {renderSection("البودكاست", "/podcasts", podcasts, "podcasts")}
        {renderSection("المسرحيات", "/plays", plays, "plays")}
        {renderSection("الأطفال", "/kids", kids, "kids")}
      </div>

      <Footer />
    </div>
  );
}

// 🔹 مكون يعرض كل قسم كسلايدر
function renderSection(title: string, link: string, data: any[], type: string) {
  return (
    <section>
      <div className="flex items-center mb-8 justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <Link
          href={link}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-s font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1"
        >
          <span>عرض الكل</span>
        </Link>
      </div>

      {/* 🔥 سلايدر Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        // navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // يوقف عند مرور الماوس
        }}
        grabCursor={true} // سحب بالماوس
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard movie={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
