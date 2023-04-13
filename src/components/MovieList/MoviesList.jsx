import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';

import { List, Item, ImageWrapper, NavLink } from './MovieList.styled';

const MoviesList = ({ movies, setIsLoading }) => {
  const location = useLocation();
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  //викликаємо при успішному завантаженні зображення
  const handleImageLoad = () => {
    setLoadedImageCount(loadedImageCount + 1);
  };

  //якщо кількість завантажених зображень дорівнює загальній кількості фільмів,
  //встановлюємо isLoading в false, щоб скрити індикатор завантаження.
  useEffect(() => {
    if (loadedImageCount === movies.length) {
      setIsLoading(false);
    }
  }, [loadedImageCount, movies.length, setIsLoading]);

  return (
    <List>
      {movies.map(({ title, id, poster }) => (
        <Item key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <ImageWrapper>
              <img
                src={poster}
                alt={title}
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </ImageWrapper>
            <h2>{title}</h2>
          </NavLink>
        </Item>
      ))}
    </List>
  );
};
MoviesList.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      averageVote: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
