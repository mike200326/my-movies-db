import api from '../api';
import type { Movie } from '@/lib/types';

export async function getTopRatedMovies(page = 1): Promise<Movie[]> {
  try {
    const { data } = await api.get<{ results: Movie[] }>('/movie/top_rated', {
      params: { page },
    });
    return data.results;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching top-rated movies:', message);
    return [];
  }
}
