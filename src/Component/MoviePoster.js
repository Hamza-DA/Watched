import RatingComponent from './RatingComponent';
import GenreRender from './Genre';
import { Link } from 'react-router-dom';
import user from '../resources/user.png';

function MoviePoster({ props, w_h }) {
  return (
    <>
      {props ? (
        <Link key={props.id || props.title} to={`/${props.id}`}>
          <div
            className={`group mr-3 ${
              w_h ? w_h : 'sm:h-auto sm:w-96 w-60 h-auto'
            } flex-shrink-0 relative border-white border-4 border-opacity-0 transition-all duration-75 hover:border-opacity-100`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
              alt={props.title}
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 flex-col p-5 overscroll-x-hidden w-full bg-gradient-to-t from-black to-transparent'>
              <h2 className='text-xl font-medium text-white w-5/6 mb-1'>
                {props.title || props.original_name ? (
                  props.title || props.original_name
                ) : (
                  <h1>loading ...</h1>
                )}
              </h2>
              <RatingComponent ratingProps={props.vote_average} />
            </div>
          </div>
        </Link>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
}

export default MoviePoster;
