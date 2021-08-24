import PopularMovies from './PopularForEachType';
import axios from 'axios';
import api_key from './api_key.json';
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
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className=' bg-primary py-9' key={genre}>
        <H2 content={movieGenre.genres.find((e) => e.id == genre).name} />
        <div className='flex overflow-x-auto pl-32'>
          {/* <PopularMovies type={'movie/popular'} title={genre} /> */}
          {Data && Data.map((e) => <MoviePoster props={e} />)}
        </div>
      </div>
    </>
  );
}
