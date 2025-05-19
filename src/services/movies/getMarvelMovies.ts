
import api from '../api'
import type { Movie } from '@/lib/types'

export async function getMarvelMovies(): Promise<Movie[]> {
  try {
    // Descubre películas producidas por Marvel Studios (company_id=420)
    const { data } = await api.get<{ results: Movie[] }>('/discover/movie', {
      params: {
        with_companies: 420,
        sort_by: 'popularity.desc',
        page: 1,
      },
    })

    // Devolvemos sólo las primeras 3
    return data.results.slice(0, 3)
  } catch (error: unknown) {
     const message = error instanceof Error ? error.message : String(error)
     console.error('Error fetching MCU movies:', message)
     return []
  }
}
