// src/app/page.tsx
import MovieCard from '@/components/MovieCard/MovieCard';
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';
import { getMarvelMovies } from '@/services/movies/getMarvelMovies';
import { getBatmanMovies } from '@/services/movies/getBatmanMovies';
import { getSupermanMovies } from '@/services/movies/getSupermanMovies';

export default async function HomePage() {
  const [marvel, batman, superman] = await Promise.all([
    getMarvelMovies(),
    getBatmanMovies(),
    getSupermanMovies(),
  ]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a My Movies</h1>

      {/* Sección Marvel en grid normal */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Continue Watching</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {marvel.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </section>

      {/* Carruseles */}
      <MovieCarousel title="Películas de Batman" movies={batman} />
      <MovieCarousel title="Películas de Superman" movies={superman} />
    </main>
  );
}
