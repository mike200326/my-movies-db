// src/services/movies/getNowPlayingMovies.ts
import api from '@/services/api';
import type { Movie } from '@/lib/types';

/**
 * Servicio para obtener las películas actualmente en cartelera.
 * @param page - número de página para paginación (default 1)
 * @returns Array de Movie
 */
export async function getNowPlayingMovies(page = 1): Promise<Movie[]> {
  try {
    const { data } = await api.get<{ results: Movie[] }>('/movie/now_playing', {
      params: { page },
    });
    return data.results;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching now playing movies:', message);
    return [];
  }
}

