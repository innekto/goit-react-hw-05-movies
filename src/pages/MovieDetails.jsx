import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Message from 'components/Message/Message';

import useFetch from 'services/Hooks';
import Loader from '../components/Loader/Loader';

const MovieDetails = () => {
  const { movie, fetchMovie, isLoading, setIsLoading } = useFetch();
  const { current: fetch } = useRef(fetchMovie);
  const { moviesId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  return (
    <>
      {isLoading && <Loader />}
      {movie && <MovieInfo movie={movie} setIsLoading={setIsLoading} />}
      <Message />
    </>
  );
};

export default MovieDetails;
