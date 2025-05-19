// src/app/top-rated/page.tsx
import React from 'react';
import type { Movie } from '@/lib/types';
import { getTopRatedMovies } from '@/services/movies/getTopRatedMovies';
import MovieCard from '@/components/MovieCard/MovieCard';

export default async function TopRatedPage(): Promise<React.JSX.Element> {
  const movies: Movie[] = await getTopRatedMovies();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mejor Valoradas</h1>
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No se encontraron películas mejor valoradas.</p>
      )}
    </main>
  );
}
