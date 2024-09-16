export interface MovieCompany {
  id: string;
  name: string;
}

export interface Movie {
  id: string;
  reviews: number[];
  title: string;
  filmCompanyId: string;
  cost: number;
  releaseYear: number;
  reviewsAverage: number;
}

export interface ReviewResponse {
  message: string
}

export interface LoadingData {
  movies: Movie[];
  companies: MovieCompany[];
  error: Boolean;
}