// src/services/movies/getBatmanMovies.ts
import api from '../api';
import type { Movie } from '@/lib/types';

export async function getBatmanMovies(page = 1): Promise<Movie[]> {
  try {
    const { data } = await api.get<{ results: Movie[] }>('/search/movie', {
      params: { query: 'Batman', page },
    });
    return data.results;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching Batman movies:', message);
    return [];
  }
}
