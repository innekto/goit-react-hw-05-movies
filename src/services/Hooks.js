import { useState } from 'react';
import { fetchMovies } from './API';
import {
  normalMovies,
  normalMovie,
  normalActors,
  normalReview,
} from './Normalisation';
import toast from 'react-hot-toast';

const useFetch = () => {
  // масив що зберігає список фільмів, які будуть відображені на сторінці
  //та метод що оновлює стан
  const [movies, setMovies] = useState([]);
  //прапорець для відображення індикатора завантаження під час завантаження даних.
  const [isLoading, setIsLoading] = useState(false);
  // об'єкт фільму та функція, що дозволяє змінювати стан
  const [movie, setMovie] = useState(null);
  //масив акторів, які беруть участь у фільмі
  const [cast, setCast] = useState([]);
  //масив рецензій на фільми
  const [reviews, setReviews] = useState([]);

  //виконуємо запит на сервер
  const fetchMoviesList = params => {
    setIsLoading(true);
    fetchMovies(params)
      .then(response => {
        //якщо нічого не знайшло то виводимо помилку
        if (!response.results.length) {
          setIsLoading(false);
          toast.error('Nothing found!');
        }
        const movies = normalMovies(response.results);

        setMovies(movies);
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  // отримуємо інформацію про конкретний фільм.
  const fetchMovie = params => {
    setIsLoading(true);
    fetchMovies(params)
      .then(response => {
        setMovie(normalMovie(response));
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  //отримуємо акторів, які зіграли у фільмі
  const fetchCast = params => {
    setIsLoading(true);
    fetchMovies(params)
      .then(response => {
        setCast(normalActors(response.cast));
        if (!response.cast.length)
          toast.error("We don't have a cast for this film");
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      });
  };
  //отримуємо рецензіїv
  const fetcReviews = params => {
    fetchMovies(params)
      .then(response => {
        setReviews(normalReview(response.results));
        if (!response.results.length) toast.error('No reviews for this film');
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      });
  };

  return {
    movies,
    fetchMoviesList,
    movie,
    fetchMovie,
    cast,
    fetchCast,
    reviews,
    fetcReviews,
    isLoading,
    setIsLoading,
  };
};

export default useFetch;
