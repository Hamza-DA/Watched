import react, { useEffect, useState } from 'react';

function Popular(Props) {
  useEffect(() => {
    getPopular();
  }, []);
  const [PopularFilms, setPopularFilms] = useState([]);

  const getPopular = async () => {
    const url = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=1925562cef1131735cd1028a38b06f84&language=en-US&page=1'
    );
    const response = await url.json();
    setPopularFilms(response.results);
  };
  const MoviesArray = () => {
    let MovieArray = [];
    for (let i = 0; i < PopularFilms.length; i++) {
      MovieArray.push(PopularFilms[i]);
    }
    return (
      <>
        <a href='#' className='ml-3 w-1/4 h-2-5'></a>
      </>
    );
  };

  return <>{MoviesArray()}</>;
}

export default Popular;
