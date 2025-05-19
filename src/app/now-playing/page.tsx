// src/app/now-playing/page.tsx
import React from 'react';
import type { JSX } from 'react';
import MovieCard from '@/components/MovieCard/MovieCard';
import { getNowPlayingMovies } from '@/services/movies/getNowPlayingMovies';
import type { Movie } from '@/lib/types';

export default async function NowPlayingPage(): Promise<JSX.Element> {
  const movies: Movie[] = await getNowPlayingMovies();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Estrenos en Cartelera</h1>
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No hay estrenos disponibles.</p>
      )}
    </main>
  );
}
