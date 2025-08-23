import { series } from "../../../../data/series";
import { movies } from "../../../../data/movies";
import { kids } from "../../../../data/kids";
import { programs } from "../../../../data/programs";
import { podcasts } from "../../../../data/podcasts";
import { plays } from "../../../../data/plays";
import { Show } from "../../../../models/type";

import WatchClient from "./WatchClient";

interface WatchPageProps {
  params: Promise<{ type: string; id: string }>; // ✅ params أصبحت Promise
}

// تحديد جميع الصفحات التي سيتم إنشاؤها
export async function generateStaticParams() {
  return [
    ...series.map((item) => ({ type: "series", id: item.id.toString() })),
    ...movies.map((item) => ({ type: "movies", id: item.id.toString() })),
    ...kids.map((item) => ({ type: "kids", id: item.id.toString() })),
    ...programs.map((item) => ({ type: "programs", id: item.id.toString() })),
    ...podcasts.map((item) => ({ type: "podcasts", id: item.id.toString() })),
    ...plays.map((item) => ({ type: "plays", id: item.id.toString() })),
  ];
}

// الصفحة نفسها async
export default async function WatchPage({ params }: WatchPageProps) {
  const { type, id } = await params; // ✅ ننتظر الـ params

  let data: Show[] = [];

  if (type === "series") data = series;
  else if (type === "movies") data = movies;
  else if (type === "kids") data = kids;
  else if (type === "programs") data = programs;
  else if (type === "podcasts") data = podcasts;
  else if (type === "plays") data = plays;

  const show = data.find((item) => item.id.toString() === id);
  if (!show) return <p>المحتوى غير موجود</p>;

  return <WatchClient show={show} allData={data} type={type} />;
}
