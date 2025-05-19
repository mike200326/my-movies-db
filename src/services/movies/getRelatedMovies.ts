// src/services/movies/getRelatedMovies.ts
import api from '../api';
import type { Movie } from '@/lib/types';

/**
 * Obtiene películas relacionadas (similares) a una dada.
 * @param movieId - ID de la película base
 * @param page - número de página para paginación (default 1)
 * @returns Array de Movie[]
 */
export async function getRelatedMovies(
  movieId: number,
  page: number = 1
): Promise<Movie[]> {
  try {
    const { data } = await api.get<{ results: Movie[] }>(
      `/movie/${movieId}/similar`,
      {
        params: { page },
      }
    );
    return data.results;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching related movies:', message);
    return [];
  }
}
