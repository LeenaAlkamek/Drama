"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Show , Episode  } from "../../../../models/type";


interface WatchClientProps {
  show: Show;
  allData: Show[];
  type: string;
}


export default function WatchClient({ show, allData, type }: WatchClientProps) {
  const router = useRouter();

  // إذا فيه حلقات اختار الحلقة الأولى، وإذا ما فيه استخدم الفيديو الرئيسي للفيلم
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(
    show.episodes?.[0] || (show.videoEmbedUrl ? { id: 0, title: show.title, videoEmbedUrl: show.videoEmbedUrl } : null)
  );

  return (
    <main className="bg-gray-900 min-h-screen text-white mx-auto px-4 py-6">
      
      {/* مشغل الفيديو */}
      {currentEpisode ? (
        <section className="mb-6 relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={currentEpisode.videoEmbedUrl}
            title={currentEpisode.title}
            allowFullScreen
            className="w-full h-full"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 px-3 py-1 rounded text-sm">
            {currentEpisode.title}
          </div>
        </section>
      ) : (
        <p className="text-gray-300">الفيديو غير متاح</p>
      )}

      {/* صف المحتوى */}
      <section className="flex flex-col lg:flex-row gap-8">
        {/* معلومات المحتوى */}
        <article className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{show.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
            <span>⭐ {show.rating}</span>
            <span>🎬 {show.genre}</span>
            <span>📅 {show.year}</span>
            {type === "series" && show.seasons && <span>المواسم: {show.seasons}</span>}
          </div>
          <p className="text-gray-400 mb-12">{show.description}</p>

          {/* قائمة الحلقات (لو موجودة) */}
          {show.episodes && show.episodes.length > 0 && (
            <aside className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">الحلقات</h2>
              <ul className="space-y-3 max-h-[250px] overflow-y-auto">
                {show.episodes.map(ep => (
                  <li
                    key={ep.id}
                    onClick={() => setCurrentEpisode(ep)}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition
                      ${currentEpisode?.id === ep.id ? "bg-red-700" : "bg-gray-700 hover:bg-red-600"}`}
                  >
                    <img
                      src={ep.thumbnail || "/images/default-episode.jpg"}
                      alt={ep.title}
                      className="w-20 h-12 rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold">{ep.title}</h3>
                      <p className="text-xs text-gray-300">{ep.duration || "غير محددة"}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>

        {/* الأعمال المشابهة */}
        <div className="flex flex-col lg:w-[600px] gap-6">
          <aside className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {type === "movies" ? "أفلام أخرى" :
              type === "programs" ? "برامج أخرى" :
               type === "kids" ? "محتوى أطفال آخر" : "مسلسلات أخرى"}
            </h2>
            <ul className="space-y-3 max-h-[750px]">
              {allData.map(item => (
                <li
                  key={item.id}
                  onClick={() => router.push(`/watch/${type}/${item.id}`)}
                  className="flex items-center gap-3 p-3 rounded cursor-pointer transition bg-gray-700 hover:bg-red-600"
                >
                  <img
                    src={item.image || "/images/default-show.jpg"}
                    alt={item.title}
                    className="w-20 h-12 rounded object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-xs text-gray-300">{item.genre} • {item.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
