"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/contact";
import Image from "next/image";
import { FaFilm, FaPodcast, FaRegNewspaper, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* ====== HERO SECTION ====== */}
      <section className="relative bg-gradient-to-l from-gray-900  to-gray-800 py-16 text-center pt-28 ">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-red-500">من </span>نحن
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12">
          منصتنا هي البيت الأول لعشاق الدراما والأفلام اليمنية، حيث نقدم أحدث
          المسلسلات، الأفلام، البودكاست، وأخبار الممثلين بكل مصداقية وسرعة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center mb-4">
              <FaFilm className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg">الأفلام والمسلسلات</h3>
            <p className="text-gray-400 text-sm">
              مكتبة ضخمة من الإنتاجات اليمنية
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center mb-4">
              <FaPodcast className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg">البودكاست</h3>
            <p className="text-gray-400 text-sm">
              حلقات صوتية تروي قصص الفن والدراما
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center mb-4">
              <FaRegNewspaper className="text-2xl" />
            </div>
            <h3 className="font-bold text-lg">أخبار الدراما</h3>
            <p className="text-gray-400 text-sm">
              متابعة يومية لآخر أخبار الفنانين
            </p>
          </div>
        </div>
      </section>

      {/* ====== رسالتنا ====== */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* النص */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">رسالتنا</h2>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              رؤيتنا أن نكون المنصة الرقمية الأولى التي توثق وتنشر الدراما
              اليمنية وتدعم المواهب المحلية، لتصل إلى جمهور أوسع داخل وخارج
              اليمن.
            </p>
          </div>

          {/* الصورة */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src="/actors/مجيد.webp"
              alt=" logo"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ====== المؤسسون ====== */}
      <section className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 flex justify-center items-center gap-2">
            <FaUsers className="text-red-500" /> المؤسسون
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition">
              <Image
                src="/actors/مجيد.webp"
                alt="Founder"
                width={200}
                height={200}
                className="w-42 h-42 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">عبدالمجيد</h3>
              <p className="text-gray-400 text-sm">مؤسس منصة يمن دراما </p>
            </div>
          </div>
        </div>
      </section>

      {/* تواصل معنا */}
      <Contact />
      <Footer />
    </div>
  );
}
