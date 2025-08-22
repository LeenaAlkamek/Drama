import ActorProfile from './ActorProfile';
import { series } from '../../../data/series';
import { movies } from "../../../data/movies";
// import { shows } from "../../../data/shows"; // لو عندك برامج
import { Show } from "../../../models/type";
import { actors } from '../../../data/actors';
import { Actor } from '../../../models/actortype';

export async function generateStaticParams() {
  return actors.map((actor: Actor) => ({
    id: actor.id.toString(),
  }));
}

export default function ActorPage({ params }: { params: { id: string } }) {
  const actor: Actor | undefined = actors.find(
    (a: Actor) => a.id.toString() === params.id
  );

  if (!actor) {
    return <div className="text-center text-white py-20">الممثل غير موجود</div>;
  }

  // 🔎 دمج كل الأعمال حسب النوع
  const allWorks: Show[] = [
    ...series.map((s) => ({ ...s, type: 'series' })),
    ...movies.map((m) => ({ ...m, type: 'movie' })),
    // ...(shows ? shows.map((sh) => ({ ...sh, type: 'show' })) : []),
  ];

  // 🔎 تصفية الأعمال التي شارك فيها الممثل
  const actorWorks = allWorks.filter((work: Show) =>
    actor.works.some(
      (w) => w.id === work.id && w.type === work.type // تطابق ID والنوع
    )
  );

  return <ActorProfile actor={actor} works={actorWorks} />;
}
