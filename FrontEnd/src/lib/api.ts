import { LoadingData, Movie } from "./types";

const API_ENDPOINT = "http://localhost:5000";

export const postMovieReview = async (reviewText: string) => {
  const response = await fetch(`${API_ENDPOINT}/submitReview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      review: reviewText,
    }),
  });

  const reviewResponse = await response.json();

  return reviewResponse;
}

export const getMovies = async () => {
  const response = await fetch(`${API_ENDPOINT}/movies`, {
    method: "GET"
  });

  const movies = await response.json();

  return movies;
}

export const getMovieCompanies = async () => {
  const response = await fetch(`${API_ENDPOINT}/movieCompanies`, {
    method: "GET"
  });

  const movieCompanies = await response.json();

  return movieCompanies;
}

export const getMoviesAndCompanies = async () => {
  const loadingData: LoadingData = { movies: [], companies: [], error: false };

  const moviesData = await getMovies().catch(() => {
    loadingData.error = true;
    return loadingData;
  });

  const companiesData = await getMovieCompanies().catch(() => {
    loadingData.error = true;
    return loadingData;
  });

  loadingData.movies = moviesData;
  loadingData.companies = companiesData;

  return loadingData;
}
