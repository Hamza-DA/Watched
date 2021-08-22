import { useEffect, useState } from 'react';
import MoviePoster from './MoviePoster';
import H2 from './h2Title';
import axios from 'axios';
import api_key from './api_key.json';

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
        }?api_key=${api_key.key}&language=en-US&page=1`
      )
      .then((res) => {
        setPopular(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // const url = await fetch(
    //   `https://api.themoviedb.org/3/${type}?api_key=1925562cef1131735cd1028a38b06f84&language=en-US&page=1`
    // );
    // const response = await url.json();
    // setPopular(response.results);
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
        <H2 content={title} />
        <div className='relative overflow-visible'>
          {/* <div className='z-10 pointer-events-none absolute right-0 w-40 flex items-center justify-center bg-gradient-to-l h-full from-black to-transparent'>
            <ChevronRightIcon className='h-8 w-8 text-white' />
          </div> */}
          <div className='mx-6 sm:ml-32  flex relative overflow-x-auto overflow-visible'>
            {MoviesArray()}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularMovies;
