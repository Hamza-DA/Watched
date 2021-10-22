import RatingComponent from './RatingComponent';
import { Link } from 'react-router-dom';
import MoviePosterSkeleton from './Skeleton/MoviePosterSkeleton';
import { useEffect, useState } from 'react';

function MoviePoster({ props, w_h }) {
  const [Props, setProps] = useState('');
  useEffect(() => {
    setProps(props);
  }, []);
  return (
    <>
      {Props !== undefined ? (
        <Link key={Props.id || Props.title} to={`/${Props.id}`}>
          <div
            className={`group mr-3 ${
              w_h ? w_h : 'sm:h-auto sm:w-96 w-60 h-auto'
            } flex-shrink-0 relative border-white border-4 border-opacity-0 transition-all duration-75 hover:border-opacity-100`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${Props.poster_path}`}
              alt={Props.title}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 flex-col p-5 overscroll-x-hidden w-full bg-black bg-opacity-60'>
              <h2 className='font-Display text-left text-2xl tracking-wide font-medium text-white w-5/6 mb-1'>
                {Props.title || Props.original_name}
              </h2>
              <RatingComponent ratingProps={Props.vote_average} />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={`group mr-3 ${
            w_h ? w_h : 'sm:h-auto sm:w-96 w-60 h-auto'
          } flex-shrink-0 relative border-white border-4 border-opacity-0 transition-all duration-75 hover:border-opacity-100`}
        >
          <MoviePosterSkeleton />
        </div>
      )}
    </>
  );
}

export default MoviePoster;
