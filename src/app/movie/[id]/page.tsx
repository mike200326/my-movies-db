// src/app/movie/[id]/page.tsx
import type { MovieDetail } from '@/lib/types';
import { getMovieById } from '@/services/movies/getMovieById';
import { getRelatedMovies } from '@/services/movies/getRelatedMovies';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import MovieCard from '@/components/MovieCard/MovieCard';

interface PageProps {
  params: { id: string };
}

export default async function MovieDetailPage({ params }: PageProps) {
  const id = parseInt(params.id, 10);
  const movie: MovieDetail | null = await getMovieById(id);
  const related = movie ? await getRelatedMovies(id) : [];

  if (!movie) {
    return <p className="p-6 text-center">Película no encontrada.</p>;
  }

  // Usamos imageUrl en el <img> para que ESLint no lo marque como unused
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png';

  return (
    <main className="p-6">
      {/* Detalle principal */}
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
        {/* A) Imagen a la izquierda */}
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src={imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* B) Título, descripción y botón */}
        <div className="md:w-2/3 p-6 flex flex-col">
          <h1 className="text-3xl font-bold text-white mb-4">
            {movie.title}
          </h1>
          <p className="text-gray-200 mb-6 whitespace-pre-wrap flex-grow">
            {movie.overview}
          </p>
          {/* Botón de Favoritos (ahora sí usado) */}
          <FavoriteButton movieId={movie.id} />
        </div>
      </div>

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
