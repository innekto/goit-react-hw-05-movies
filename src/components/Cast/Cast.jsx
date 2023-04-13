import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import useFetch from 'services/Hooks';
import Message from 'components/Message/Message';

import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  //повертаємо об'єкт з потрібними значеннями з хука useFetch(),
  const { cast, fetchCast, isLoading, setIsLoading } = useFetch();
  //ми отримуємо параметр id фільму щоб
  //відобразити інформацію про фільм з відповідним id
  const { moviesId } = useParams();
  // зберігаємо функцію fetchCast
  const { current: fetch } = useRef(fetchCast);
  // посилання на змінну, яка зберігає кількість виконаних запитів на завантаження зображень акторів
  const completedCount = useRef(0);

  //виконуємо запит про акторів
  //та відміняємо його якщо після запиту компонент вже не потрібен
  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}/credits`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  //відстежуємо кількість завантажених зображень та встановлюємо
  //"isLoading" на "false", коли всі зображення завантажені.
  const handleImageLoad = () => {
    completedCount.current += 1;
    if (completedCount.current === cast.length) {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!!cast.length && (
        <CastList className={!isLoading && 'loaded'}>
          {cast.map(({ id, name, original_name, character, profile_path }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://placehold.co/180x250/png'
                }
                alt={name}
                width="180"
                height="250"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </CastItem>
          ))}
        </CastList>
      )}
      <Message />
    </>
  );
};

export default Cast;
