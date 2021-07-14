import { useEffect, useState } from 'react';
import GenreRender from './Genre';
import RatingComponent from './RatingComponent';

function HeroSection() {
  useEffect(() => {
    FetchHero();
  }, []);
  const [Trend, setTrend] = useState([]);
  let FetchHero = async () => {
    const api = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=1925562cef1131735cd1028a38b06f84'
    );
    const response = await api.json();
    setTrend(response.results[3]);
  };
  return (
    <>
      <section className='h-screen w-screen flex items-start justify-center flex-col'>
        <img
          className='absolute object-cover h-screen w-screen'
          src={`https://image.tmdb.org/t/p/original${Trend.backdrop_path}`}
          alt={Trend.title}
        />
        <div className='flex'>
          <div className='Info z-10 ml-40'>
            <h1 className='text-white text-7xl font-medium leading-tight w-1/2'>
              {Trend.title}
            </h1>
            <div className='flex items-center mb-6'>
              <GenreRender genresProps={Trend.genre_ids} />
              <RatingComponent ratingProps={Trend.vote_average} />

              <span className='border-2 border-gray-300 px-1.5 py-0.5 -mb-0.5 text-gray-300 uppercase text-sm'>
                {Trend.original_language}
              </span>
            </div>
            <p className='text-gray-300 w-1/2 leading-relaxed text-lg tracking-wide font-normal'>
              {Trend.overview}
            </p>
          </div>
        </div>
        <div className='absolute h-screen w-screen bg-gradient-to-r from-black to-transparent'></div>
      </section>
    </>
  );
}

export default HeroSection;
