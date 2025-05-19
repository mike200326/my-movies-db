// src/app/movie/[id]/page.tsx
import Image from 'next/image';
import { getMovieById } from '@/services/movies/getMovieById';
import { getRelatedMovies } from '@/services/movies/getRelatedMovies';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import MovieCard from '@/components/MovieCard/MovieCard';
import type { MovieDetail } from '@/lib/types';

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 1) Esperamos el Promise de params
  const { id } = await params;                      
  const idNum = parseInt(id, 10);
  
  // 2) Fetch de datos
  const movie: MovieDetail | null = await getMovieById(idNum);
  const related = movie ? await getRelatedMovies(idNum) : [];

  if (!movie) {
    return <p className="p-6 text-center">Película no encontrada.</p>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png';

  return (
    <main className="p-6">
      {/* Detalle principal */}
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
        {/* A) Imagen (1/3 ancho en md+) */}
        <div className="md:w-1/3 flex-shrink-0 relative aspect-[2/3]">
          <Image
            src={imageUrl}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        {/* B) Texto y botón */}
        <div className="md:w-2/3 p-6 flex flex-col">
          <h1 className="text-3xl font-bold text-white mb-4">
            {movie.title}
          </h1>
          <p className="text-gray-200 mb-6 whitespace-pre-wrap flex-grow">
            {movie.overview}
          </p>
          <FavoriteButton movieId={movie.id} />
        </div>
      </div>

      {/* Sección “Related” */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((r) => (
              <MovieCard key={r.id} movie={r} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
