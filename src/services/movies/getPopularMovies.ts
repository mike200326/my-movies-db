
import api from '../api'
import type { Movie } from '@/lib/types'

export async function getPopularMovies( page = 1 ): Promise<Movie[]> {
  try {
    const { data } = await api.get<{ results: Movie[] }>('/movie/popular', {
      params: { page }
    })
    return data.results
  } catch (e) {
    console.error(e)
    return []
  }
}
