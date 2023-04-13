import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MovieList/MoviesList';
import Message from 'components/Message/Message';

import useFetch from 'services/Hooks';

const Movies = () => {
  const { movies, fetchMoviesList, isLoading, setIsLoading } = useFetch();
  const { current: fetch } = useRef(fetchMoviesList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    fetch({
      controller,
      fetchParams: 'search/movie',
      query,
    });
    return () => {
      controller.abort();
    };
  }, [fetch, query]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {isLoading}
      {!!movies.length && (
        <MoviesList movies={movies} setIsLoading={setIsLoading} />
      )}
      <Message />
    </>
  );
};

export default Movies;
