import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

export default async function MovieDetail({ params }) {
  const { id } = await params;
  return (
    <h1>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </h1>
  );
}
