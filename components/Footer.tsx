'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-red-600 text-3xl font-bold font-[Pacifico] mb-4 block">
               YemenDrama
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              منصة البث الأولى في الوطن العربي لمشاهدة أحدث الأفلام والمسلسلات بجودة عالية ومحتوى متنوع يناسب جميع الأذواق.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-youtube-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-red-500 transition-colors">
                  الأفلام
                </Link>
              </li>
              <li>
                <Link href="/series" className="text-gray-400 hover:text-red-500 transition-colors">
                  المسلسلات
                </Link>
              </li>
              <li>
                <Link href="/actors" className="text-gray-400 hover:text-red-500 transition-colors">
                  الممثلين
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-gray-400 hover:text-red-500 transition-colors">
                  المفضلة
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">التصنيفات</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/movies?genre=action" className="text-gray-400 hover:text-red-500 transition-colors">
                  أفلام أكشن
                </Link>
              </li>
              <li>
                <Link href="/movies?genre=drama" className="text-gray-400 hover:text-red-500 transition-colors">
                  أفلام دراما
                </Link>
              </li>
              <li>
                <Link href="/movies?genre=comedy" className="text-gray-400 hover:text-red-500 transition-colors">
                  أفلام كوميديا
                </Link>
              </li>
              <li>
                <Link href="/movies?genre=thriller" className="text-gray-400 hover:text-red-500 transition-colors">
                  أفلام إثارة
                </Link>
              </li>
              <li>
                <Link href="/movies?genre=romance" className="text-gray-400 hover:text-red-500 transition-colors">
                  أفلام رومانسية
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">الدعم والمساعدة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-red-500 transition-colors">
                  مركز المساعدة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-red-500 transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-red-500 transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-red-500 transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4 text-white">اشترك في نشرتنا الإخبارية</h3>
            <p className="text-gray-400 mb-6">
              احصل على آخر الأخبار حول الأفلام والمسلسلات الجديدة مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>

        {/* App Download */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2 text-white">حمل التطبيق الآن</h3>
              <p className="text-gray-400 text-sm">
                استمتع بمشاهدة المحتوى المفضل لديك في أي مكان وزمان
              </p>
            </div>
            <div className="flex space-x-reverse space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center space-x-3"
              >
                <i className="ri-google-play-fill w-6 h-6 flex items-center justify-center"></i>
                <div className="text-right">
                  <div className="text-xs text-gray-400">متاح على</div>
                  <div className="text-white font-medium">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center space-x-3"
              >
                <i className="ri-app-store-fill w-6 h-6 flex items-center justify-center"></i>
                <div className="text-right">
                  <div className="text-xs text-gray-400">تحميل من</div>
                  <div className="text-white font-medium">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 YemenDrama. جميع الحقوق محفوظة.
            </p>
            {/* <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-xs">صُنع بـ</span>
              <i className="ri-heart-fill text-red-500 w-4 h-4 flex items-center justify-center"></i>
              <span className="text-gray-400 text-xs">في الوطن العربي</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}