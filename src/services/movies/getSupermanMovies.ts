// src/services/movies/getSupermanMovies.ts
import api from '../api';
import type { Movie } from '@/lib/types';

export async function getSupermanMovies(page = 1): Promise<Movie[]> {
  try {
    const { data } = await api.get<{ results: Movie[] }>('/search/movie', {
      params: { query: 'Superman', page },
    });
    return data.results;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching Superman movies:', message);
    return [];
  }
}
