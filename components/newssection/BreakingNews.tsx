"use client";

import Image from "next/image";
import Link from "next/link";

export default function BreakingNews() {
  return (
    <section className="bg-black py-10 px-4 md:px-16">
        <h3 className="text-2xl font-bold mb-6 text-white">آخـر الأخبـــار</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* بطاقة الخبر الرئيسي */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/images/main-news.jpg"
            alt="الخبر الرئيسي"
            width={800}
            height={500}
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-4 right-4 text-white">
            <span className="bg-red-600 text-sm px-3 py-1 rounded-full">
              عاجل
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              <Link href="/news/1" className="hover:text-red-400">
                مسلسل جديد للنجم الكبير يثير ضجة على السوشيال ميديا
              </Link>
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              تم الإعلان رسمياً عن مسلسل جديد سيعرض في رمضان القادم، بطولة
              أبرز نجوم الدراما العربية...
            </p>
          </div>
        </div>

        {/* الأخبار المميزة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              id: 2,
              title: "إشادة جماهيرية بأداء ممثل شاب في آخر أعماله",
              img: "/images/news1.jpg",
            },
            {
              id: 3,
              title: "إلغاء عرض مسرحية بعد نفاد التذاكر مبكراً",
              img: "/images/news2.jpg",
            },
            {
              id: 4,
              title: "مخرج عالمي يعلن عن تعاون جديد مع نجوم عرب",
              img: "/images/news3.jpg",
            },
            {
              id: 5,
              title: "تكريم فنانة مشهورة بجائزة تقديرية في مهرجان دولي",
              img: "/images/news4.jpg",
            },
          ].map((news) => (
            <div
              key={news.id}
              className="relative rounded-xl overflow-hidden shadow group"
            >
              <Image
                src={news.img}
                alt={news.title}
                width={400}
                height={250}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-2 right-2 text-white">
                <h3 className="text-base font-semibold leading-snug">
                  <Link href={`/news/${news.id}`} className="hover:text-red-400">
                    {news.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
