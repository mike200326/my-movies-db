// src/app/popular/page.tsx
import { getPopularMovies } from '@/services/movies/getPopularMovies';
import MovieCard from '@/components//MovieCard/MovieCard';
import type { Movie } from '@/lib/types'

export default async function PopularPage() {
  const movies = await getPopularMovies();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Películas Populares</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
