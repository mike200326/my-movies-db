'use client';

import { useEffect, useState } from 'react';
import type { MovieDetail } from '@/lib/types';
import {getFavouriteMovies } from '@/services/movies/getFavouriteMovies';
import MovieCard from '@/components/MovieCard/MovieCard';

export default function MyFavoritesPage() {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      const favs = await getFavouriteMovies();
      setMovies(favs);
      setLoading(false);
    }
    fetchFavorites();
  }, []);

  if (loading) {
    return <p className="p-6 text-center text-white">Cargando favoritos...</p>;
  }
  if (movies.length === 0) {
    return <p className="p-6 text-center text-white">No tienes películas favoritas.</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Mis Favoritas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}