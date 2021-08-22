import { useEffect, useState } from 'react';
import GenreRender from './Genre';
import RatingComponent from './RatingComponent';
import api_key from './api_key.json';

function HeroSection() {
  useEffect(() => {
    FetchHero();
  }, []);
  const [Trend, setTrend] = useState([]);
  let FetchHero = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key.key}`
    );
    const response = await api.json();
    setTrend(response.results[0]);
  };
  return (
    <>
      <section className='h-screen py-16 sm:h-screen overflow-hidden w-screen flex items-start justify-center flex-col'>
        <img
          className='absolute object-cover h-screen w-screen'
          src={`https://image.tmdb.org/t/p/original${Trend.backdrop_path}`}
          alt={Trend.title}
        />
        <div className='flex'>
          <div className='Info z-10 mx-6 sm:ml-32'>
            <h1 className='text-white text-6xl sm:text-7xl font-medium leading-tight w-1/2'>
              {Trend.title}
            </h1>
            <div className='flex flex-col items-start mb-4'>
              <GenreRender genresProps={Trend.genre_ids} />
              <span className='flex mt-4'>
                <RatingComponent ratingProps={Trend.vote_average} />

                <span className='border-2 border-gray-300 px-1.5 py-0.5 -mb-0.5 text-gray-300 uppercase text-sm'>
                  {Trend.original_language}
                </span>
              </span>
            </div>
            <p className='text-gray-300 w-auto sm:w-1/2 leading-relaxed text-lg tracking-wide font-normal'>
              {Trend.overview}
            </p>
          </div>
        </div>
        <div className='absolute h-full w-screen bg-gradient-to-r from-black to-transparent'></div>
      </section>
    </>
  );
}

export default HeroSection;
