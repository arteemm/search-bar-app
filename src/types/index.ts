type Film = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type ResponseFilms = {
  Search: Film[];
  totalResults: string;
  Response: string;
};

type SearchParam = {
  value: string;
  year?: string;
  type: string;
  numberPage: number;
};

export type { ResponseFilms, SearchParam, Film };
