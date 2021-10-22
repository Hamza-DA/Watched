import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviePoster from './MoviePoster';
import H2 from './h2Title';
import movieGenre from './prototypeJSON/movieGenres.json';
export default function GenerateMoviesByGenre({ genre }) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [genre]);
  const fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='bg-primary pb-8' key={genre}>
        <div className='sm:px-12 lg:px-32 px-6'>
          <H2 content={movieGenre.genres.find((e) => e.id === genre).name} />
        </div>
        <div className='flex items-end relative px-6 sm:px-12 lg:px-32 overflow-auto'>
          {Data && Data.map((e) => <MoviePoster props={e} />)}
        </div>
      </div>
    </>
  );
}
