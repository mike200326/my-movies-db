
const API_KEY       = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
const BEARER_TOKEN  = process.env.TMDB_BEARER_TOKEN!;
const BASE_URL      = 'https://api.themoviedb.org/3';

const config = {
  apiKey:       API_KEY,
  bearerToken:  BEARER_TOKEN,
  baseUrl:      BASE_URL,
};

export default config;

