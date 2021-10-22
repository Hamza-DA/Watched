import HeroSection from '../Component/HeroSection';
import PopularMovies from '../Component/PopularForEachType';
import SelectGenres from '../Component/SelectGenres';
import GenerateMoviesByGenre from '../Component/GenerateMoviesByGenre';
import { useEffect, useState } from 'react';

function HomeComponent() {
  const [Genres, setGenres] = useState([]);
  useEffect(() => {
    // setTimeout(() => {
    setGenres(JSON.parse(localStorage.getItem('Genres')));
    // }, 2000);
  }, []);
  document.title = 'Home - Watched';
  return (
    <>
      <HeroSection />
      <SelectGenres />
      {JSON.parse(localStorage.getItem('Genres')) &&
        JSON.parse(localStorage.getItem('Genres')).map((e) => (
          <GenerateMoviesByGenre genre={e} />
        ))}
      <PopularMovies type={'movie/popular'} title={'Most popular'} />
      <PopularMovies type={'movie/upcoming'} title={'Upcoming'} />
    </>
  );
}

export default HomeComponent;
