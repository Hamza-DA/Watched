import HeroSection from '../Component/HeroSection';
import PopularMovies from '../Component/PopularForEachType';
import SelectGenres from '../Component/SelectGenres';
import GenerateMoviesByGenre from '../Component/GenerateMoviesByGenre';
import { useEffect, useRef, useState } from 'react';

function HomeComponent() {
  const [Genres, setGenres] = useState([]);
  const handleChange = () => {
    let array = localStorage.getItem('Genres');
    return array;
    // console.log(array);
  };

  // useEffect(() => {
  //   // window.addEventListener('storage', () => {
  //   //   setGenres(JSON.parse(localStorage.getItem('Genres')));
  //   // });
  //   // if (localStorage.getItem('Genres')) {
  //   // array.current = JSON.parse(localStorage.getItem('Genres'));
  //   // setGenres(JSON.parse(localStorage.getItem('Genres')));
  //   // }
  //   console.log(Garray);
  // }, [Genres]);
  const Garray = localStorage.getItem('Genres');
  useEffect(() => {
    setTimeout(() => {
      setGenres(JSON.parse(localStorage.getItem('Genres')));
    }, 2000);
  }, [Genres]);
  return (
    <>
      <HeroSection />
      <SelectGenres />
      {JSON.parse(localStorage.getItem('Genres')) &&
        JSON.parse(localStorage.getItem('Genres')).map((e) => (
          <GenerateMoviesByGenre genre={e} />
          // console.log(e);
        ))}
      <PopularMovies type={'movie/popular'} title={'Most popular'} />
      <PopularMovies type={'movie/upcoming'} title={'Upcoming'} />
    </>
  );
}

export default HomeComponent;
