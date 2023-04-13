//вилучаємо лише потрібну інфо
export const normalMovies = movies =>
  //з кожного об'єкта фільму вилучаєми лише необхідну інформацію
  //title - назва фільму;
  //id - id фільму;
  //poster - зображення постера фільму
  //averageVote - середній рейтинг фільму
  movies.map(({ title, id, poster_path, vote_average }) => {
    // Якщо у фільму є зображення, то воно буде отримане з API,
    // Якщо зображення недоступне, то використовуємо  заглушку
    const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://placehold.co/500x750/png';

    //середня оцінка фільму, округлена до цілого числа
    const averageVote = vote_average && Math.round(vote_average * 10);
    return { title, id, poster, averageVote };
  });

//перетворює неструктуровані дані по фільму у структурований об'єкт
export const normalMovie = ({
  release_date,
  title,
  poster_path,
  popularity,
  backdrop_path,
  id,
  tagline,
  genres,
  overview,
}) => {
  //перевіряємо чи є дата релізу та повертаємо відповідну інфо
  const date = release_date
    ? release_date.split('-')[0]
    : 'No release information';

  // Якщо у фільму є зображення, то воно буде отримане з API,
  // Якщо зображення недоступне, то використовуємо  заглушку
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://placehold.co/500x750/png';

  const genreList = genres.map(genre => genre.name).join(' ');
  //в залежності від наявності жанрів,значення genre може містити список жанрів
  //або текстовий рядок інфо про відсутність жанрів
  const genre = genreList.length ? genreList : 'No genre information';

  return {
    date,
    title,
    tagline,
    id,
    poster,
    popularity: popularity + '',
    backdrop_path,
    genre,
    overview,
  };
};

//повертаємо нормалізований масив акторів з потрібними властивостями.
export const normalActors = cast =>
  cast.map(({ id, name, original_name, character, profile_path }) => ({
    id,
    name,
    original_name,
    character,
    profile_path,
  }));

//витягуємо з кожного об'єкту відгуку необхідну інформацію
export const normalReview = reviews =>
  reviews.map(({ author, content, id }) => ({ author, content, id }));
