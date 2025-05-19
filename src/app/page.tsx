// src/app/page.tsx

import MovieCard from '@/components/MovieCard/MovieCard';
import { getMarvelMovies } from "@/services/movies/getMarvelMovies";
    
import type { Movie } from '@/lib/types'

export default async function HomePage() {
  const movies: Movie[] = await getMarvelMovies();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a My Movies</h1>

      <h1 className="text-3xl font-bold mb-4">Continue watching</h1>

      {/* Ejemplo de sección de películas, si ya la tienes */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((m: Movie) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </main>
  );
}
