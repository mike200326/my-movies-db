
export interface Movie {
  id:           number;
  title:        string;
  poster_path:  string | null;
  overview?:    string;
}


export interface MovieDetail extends Movie {
  backdrop_path:    string | null;
  release_date:     string;
  runtime:          number;
  genres:           { id: number; name: string }[];
  vote_average:     number;
  vote_count:       number;
  status:           string;
  tagline:          string;
  homepage:         string | null;
}
