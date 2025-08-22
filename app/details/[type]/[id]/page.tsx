import { series } from "../../../../data/series";
import { movies } from "../../../../data/movies";
import { kids } from "../../../../data/kids";
import { programs } from "../../../../data/programs";
import { podcasts } from "../../../../data/podcasts";
import { plays } from "../../../../data/plays";
import { Show } from "../../../../models/type";
import { actors } from "../../../../data/actors";
import { Actor } from "../../../../models/actortype";

import DetailsClient from "./DetailsClient";

interface DetailsPageProps {
  params: { type: string; id: string };
}

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

export default function DetailsPage({ params }: DetailsPageProps) {
  const { type, id } = params;

  let allData: Show[] = [];
  if (type === "series") allData = series;
  else if (type === "movies") allData = movies;
  else if (type === "kids") allData = kids;
  else if (type === "programs") allData = programs;
  else if (type === "podcasts") allData = podcasts;
  else if (type === "plays") allData = plays;

  const show = allData.find((item) => item.id.toString() === id);
  if (!show) return <p>المحتوى غير موجود</p>;

  // أعمال مشابهة
  const similarWorks = allData.filter(
    (item) => item.genre === show.genre && item.id !== show.id
  );

  // جلب طاقم العمل كامل
  const cast: Actor[] =
    show.crew?.cast
      ?.map((actorId) => actors.find((a) => a.id === actorId))
      .filter((a): a is Actor => Boolean(a)) || [];

  return (
    <DetailsClient
      show={show}
      type={type}
      similarWorks={similarWorks}
      cast={cast}
      producer={show.crew?.producer} // الممثلين
    />
  );
}
