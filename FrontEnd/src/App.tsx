import { useState, useEffect, useCallback } from 'react';
import { LoadingData, Movie } from "./lib/types";
import { Container, Button } from '@mui/material';
import { MovieReviewsTable } from './components/MovieReviewsTable';
import { ReviewForm } from './components/ReviewForm';
import { getMoviesAndCompanies } from './lib/api';
import { arraysAreEqual } from './lib/common-functions';
import { ReviewFormContainer } from './components/ReviewFormContainer';

const defaultLoadData: LoadingData = { movies: [], companies: [], error: false };

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [loadData, setLoadData] = useState<LoadingData>(defaultLoadData);

  const fetchData = async () => {
    const allData = await getMoviesAndCompanies();
    const { movies, companies, error } = allData;

    if (!arraysAreEqual(loadData.movies, movies)
      || !arraysAreEqual(loadData.companies, companies)
      || loadData.error !== error
    ) {
      setLoadData(allData);
    }
  };

  const handleSetSelectedMovie = useCallback((value: Movie) => {
    setSelectedMovie(value)
  }, []);

  useEffect(() => {
    if (isLoading) {
      fetchData();
      setIsLoading(false)
    }
  }, [isLoading]);

  useEffect(() => {
    setSelectedMovie(undefined)
  }, [loadData]);

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <h2>Loading...</h2>
      </Container>
    );
  }

  return (
    <Container maxWidth='md'>
      <h2>Welcome to Movie database!</h2>
      <Button
        variant="contained"
        onClick={fetchData}
      >
        Refresh
      </Button>
      <br />
      {loadData.error ?
        <h2>Error while Fetching Data, try again Later</h2> :
        <>
          <p>Total movies displayed {loadData.movies.length}</p>
          <MovieReviewsTable
            moviesData={loadData.movies}
            selectedMovie={selectedMovie}
            setSelectedMovie={handleSetSelectedMovie}
            movieCompanyData={loadData.companies}
          />
          <br />
          <ReviewFormContainer>
            <ReviewForm
              movie={selectedMovie}
            />
          </ReviewFormContainer>
        </>
      }
    </Container>
  );
}