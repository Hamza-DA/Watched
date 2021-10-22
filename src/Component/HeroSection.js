import { useEffect, useState } from 'react';
import GenreRender from './Genre';
import RatingComponent from './RatingComponent';
import MovieHeroSkeleton from './Skeleton/MovieHeroSkeleton';

function HeroSection() {
  useEffect(() => {
    FetchHero();
  }, []);
  const [Trend, setTrend] = useState([]);
  let FetchHero = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_WATCHED_API_KEY}`
    );
    const response = await api.json();
    setTrend(response.results[0]);
  };
  return (
    <>
      {Trend.length === 0 ? (
        <MovieHeroSkeleton isSingle={false} />
      ) : (
        <section className='relative h-screen py-32 sm:h-auto overflow-hidden flex items-start justify-center flex-col'>
          <img
            className='absolute object-cover h-full w-screen'
            src={`https://image.tmdb.org/t/p/original${Trend.backdrop_path}`}
            alt={Trend.title}
          />
          <div className='flex-col w-auto sm:px-12 lg:w-3/4 z-20 lg:pl-32 px-6'>
            <h1 className='text-white font-Display mt-4 text-5xl sm:text-7xl font-medium leading-none w-full'>
              {Trend.title}
            </h1>
            <div className='flex-col items-center mb-1'>
              <div className='flex flex-col items-start mb-3 mt-2'>
                <div className='flex mt-1 font-Display'>
                  <RatingComponent ratingProps={Trend.vote_average} />
                  <span className='flex items-center px-1.5 mr-3 text-gray-200 uppercase text-lg'>
                    {Trend.original_language}
                  </span>
                  <span className='flex items-center px-1.5 mr-3 text-gray-200 uppercase text-lg'>
                    {Trend.release_date}
                  </span>
                  <GenreRender
                    genresProps={
                      Trend.genres !== undefined &&
                      Trend.genres.map((e) => e.id)
                    }
                  />
                </div>
              </div>
            </div>
            <p className='text-gray-300 w-full sm:w-3/4  leading-relaxed text-base sm:text-lg tracking-wide font-normal'>
              {Trend.overview}
            </p>
          </div>
          <div className='absolute h-full w-screen bg-opacity-60 bg-black'></div>
        </section>
      )}
    </>
  );
}

export default HeroSection;
