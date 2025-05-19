// src/services/movies/getMovieById.ts
import api from '@/services/api';
import type { MovieDetail } from '@/lib/types';

/**
 * Obtiene los datos completos de una película por su ID.
 * @param id - Identificador de la película en TMDB
 * @returns MovieDetail o null en caso de error
 */
export async function getMovieById(id: number): Promise<MovieDetail | null> {
  try {
    const { data } = await api.get<MovieDetail>(`/movie/${id}`);
    return data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching movie by id:', message);
    return null;
  }
}
