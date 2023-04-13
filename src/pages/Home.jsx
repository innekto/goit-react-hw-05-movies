import { useEffect, useRef } from 'react';
import MoviesList from 'components/MovieList/MoviesList';

import Message from 'components/Message/Message';
import useFetch from 'services/Hooks';
// import Loader from 'components/Loader/Loader';

const Home = () => {
  const { movies, isLoading, setIsLoading, fetchMoviesList } = useFetch();
  const { current: fetch } = useRef(fetchMoviesList);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: 'trending/movie/week', controller });
    return () => {
      controller.abort();
    };
  }, [fetch]);

  return (
    <>
      {isLoading}
      {!!movies.length && (
        <MoviesList
          movies={movies}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
      <Message />
    </>
  );
};

export default Home;
