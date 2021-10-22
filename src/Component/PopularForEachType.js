import { useEffect, useState } from 'react';
import MoviePoster from './MoviePoster';
import H2 from './h2Title';
import axios from 'axios';

function PopularMovies({ type, title, similar, movie_id }) {
  const [Value, setValue] = useState(movie_id);
  useEffect(() => {
    setValue(movie_id);
    getPopular();
  }, [movie_id]);
  const [Popular, setPopular] = useState([]);

  const getPopular = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}${
          similar && movie_id ? `/${movie_id}/similar` : ''
        }?api_key=${
          process.env.REACT_APP_WATCHED_API_KEY
        }&language=en-US&page=1`
      )
      .then((res) => {
        setPopular(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const MoviesArray = () => {
    if (Popular !== undefined) {
      let Array = [];
      for (let i = 0; i < Popular.length / 2; i++) {
        Array.push(Popular[i]);
      }
      return Array.map((e) => {
        return (
          <>
            <MoviePoster props={e} />
          </>
        );
      });
    }
  };

  return (
    <>
      <div
        key={movie_id}
        className='flex flex-col relative bg-primary w-auto h-full py-5 overflow-visible'
      >
        <div className='sm:px-12 lg:px-32 px-6'>
          <H2 content={title} />
        </div>
        <div className='relative overflow-visible'>
          <div className='sm:px-12 lg:px-32 px-6 relative overflow-x-auto overflow-visible flex items-end'>
            {MoviesArray()}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularMovies;
