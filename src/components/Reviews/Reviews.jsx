import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Message from 'components/Message/Message';
import useFetch from 'services/Hooks';

const Reviews = () => {
  const { reviews, fetcReviews } = useFetch();
  const { moviesId } = useParams();
  const { current: fetch } = useRef(fetcReviews);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}/reviews`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);
  return (
    <>
      {!!reviews.length && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      <Message />
    </>
  );
};

export default Reviews;
