'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Actor } from '../../../models/actortype';
import { Show } from '../../../models/type';

interface ActorProfileProps {
  actor: Actor;
  works: Show[]; // ✅ الأعمال تجي من ملف series
}

export default function ActorProfile({ actor, works }: ActorProfileProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'works' | 'awards'>('about');

  if (!actor) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">الممثل غير موجود</h1>
          <Link href="/actors" className="text-red-500 hover:underline">
            العودة لصفحة الممثلين
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div >
        {/* صورة الغلاف */}
        <div className="relative">
          <div className="h-96 relative overflow-hidden">
            <img
              src={actor.coverImage || '/default-cover.jpg'}
              alt={actor.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* معلومات الممثل */}
          <div className="relative px-4 md:px-8 lg:px-16 -mt-32">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* صورة البروفايل */}
              <div className="relative">
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-64 h-80 object-cover object-top rounded-xl shadow-2xl border-4 border-red-600"
                />
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 py-2 rounded-full font-bold text-lg flex items-center">
                  <i className="ri-star-fill mr-1"></i>
                  {actor.rating}
                </div>
              </div>

              {/* التفاصيل */}
              <div className="flex-1 pt-8">
                <h1 className="text-5xl font-bold mb-2">{actor.name}</h1>
                <h2 className="text-2xl text-gray-300 mb-4">{actor.nameEn}</h2>

                {/* الإحصائيات */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <StatBox label="العمر" value={actor.age} />
                  <StatBox label="الأعمال" value={works.length} /> {/* ✅ عدد الأعمال من series */}
                  <StatBox label="المتابعون" value={actor.followers} />
                  <StatBox label="الجنسية" value={actor.nationality} />
                </div>

                {/* الأزرار */}
                <div className="flex gap-4 mb-6">
                  <Button color="red" icon="ri-heart-line">متابعة</Button>
                  <Button color="gray" icon="ri-share-line">مشاركة</Button>
                </div>

                {/* السوشيال ميديا */}
                <div className="flex gap-4">
                  {actor.socialMedia.instagram && <SocialIcon icon="ri-instagram-line" />}
                  {actor.socialMedia.twitter && <SocialIcon icon="ri-twitter-line" />}
                  {actor.socialMedia.facebook && <SocialIcon icon="ri-facebook-line" />}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* التبويبات */}
        <div className="px-4 md:px-8 lg:px-16 py-12">
          <div className="flex gap-8 border-b border-gray-700 mb-8">
            <TabButton active={activeTab === 'about'} onClick={() => setActiveTab('about')}>نبذة شخصية</TabButton>
            <TabButton active={activeTab === 'works'} onClick={() => setActiveTab('works')}>الأعمال</TabButton>
            <TabButton active={activeTab === 'awards'} onClick={() => setActiveTab('awards')}>الجوائز</TabButton>
          </div>

          {/* محتوى التبويبات */}
          {activeTab === 'about' && (
            <section>
              <h3 className="text-2xl font-bold mb-4">نبذة شخصية</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{actor.bio}</p>
            </section>
          )}

          {activeTab === 'works' && (
            <section>
              <h3 className="text-2xl font-bold mb-6">الأعمال</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {works.map((work) => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </div>
            </section>
          )}

          {activeTab === 'awards' && (
            <section>
              <h3 className="text-2xl font-bold mb-6">الجوائز والتكريمات</h3>
              <div className="space-y-4">
                {actor.awards && actor.awards.map((award, index) => (
                  <AwardCard key={index} award={award} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ✅ المكونات المساعدة
function StatBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-red-500">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

function Button({ children, color, icon }: { children: React.ReactNode; color: 'red' | 'gray'; icon: string }) {
  const base = color === 'red'
    ? 'bg-red-600 hover:bg-red-700'
    : 'bg-gray-800 hover:bg-gray-700';
  return (
    <button className={`${base} text-white px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap flex items-center`}>
      <i className={`${icon} ml-2`}></i>
      {children}
    </button>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center">
      <i className={`${icon} w-6 h-6`}></i>
    </a>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      className={`pb-4 px-2 font-bold transition-colors whitespace-nowrap ${
        active ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ✅ WorkCard يستخدم بيانات من Show بدلاً من ActorWork
function WorkCard({ work }: { work: Show }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={work.cardimg}
          alt={work.title}
          className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center">
          <i className="ri-star-fill mr-1"></i>
          {work.rating}
        </div>
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {work.genre}
        </div>
      </div>
      <h4 className="font-bold mb-1 group-hover:text-red-500 transition-colors">{work.title}</h4>
      <p className="text-gray-400 text-sm">{work.year}</p>
    </div>
  );
}

function AwardCard({ award }: { award: string }) {
  return (
    <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg">
      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
        <i className="ri-trophy-line text-white w-6 h-6"></i>
      </div>
      <p className="font-bold">{award}</p>
    </div>
  );
}
