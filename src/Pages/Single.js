import { useEffect, useState } from 'react';
import RatingComponent from '../Component/RatingComponent';
import GenreRender from '../Component/Genre';
import PopularMovies from '../Component/PopularForEachType';
import { CheckCircleIcon } from '@heroicons/react/outline';
import Trailer from '../Component/Trailer';
import Cast from '../Component/Cast';
import axios from 'axios';
import FamilyShield from '../Component/FamilyShield';
import Crew from '../Component/Crew';
import AddBookmark from '../Component/AddBookmark';
import api_key from '../key.json';

function Single({ match }) {
  const [Match, setMatch] = useState(match.params.id);
  useEffect(() => {
    setMatch(match.params.id);
    getMovie();
  }, [match.params.id]);
  const [Movie, setMovie] = useState({});
  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key.key}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  document.title = `${Movie.title} - Watched`;
  return (
    <>
      <section
        key={match.params.id}
        className='bg-primary w-screen sm:h-auto py-4 relative'
      >
        <div className='flex flex-col sm:flex-row p-6 sm:p-0 sm:ml-32 items-center h-auto sm:h-full z-20 relative'>
          <div className='h-auto w-auto sm:w-2/6 flex-shrink-0 relative overflow-hidden'>
            <div className='relative'>
              <FamilyShield adult={Movie.adult} />
              <img
                src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                alt={Movie.title}
                className='object-cover w-full h-auto'
              />
            </div>
          </div>
          <div className='flex-col sm:ml-12 w-full sm:w-3/5'>
            <h1 className='text-white mt-4 sm:mb-6 text-5xl sm:text-7xl font-medium leading-tight w-full'>
              {Movie.title}
            </h1>
            <div className='flex-col items-center mb-1'>
              <div className='flex flex-col items-start mb-3 mt-2'>
                <GenreRender
                  genresProps={
                    Movie.genres != undefined && Movie.genres.map((e) => e.id)
                  }
                />
                <div className='flex mt-1'>
                  <span className='flex items-center px-1.5 mr-3 text-gray-200 uppercase text-sm'>
                    {Movie.original_language}
                  </span>
                  <span className='flex items-center px-1.5 mr-3 text-gray-200 uppercase text-sm'>
                    {Movie.release_date}
                  </span>
                  <RatingComponent ratingProps={Movie.vote_average} />
                </div>
              </div>
            </div>
            <p className='text-gray-300 w-full sm:w-5/6 leading-relaxed text-lg tracking-wide font-normal'>
              {Movie.overview}
            </p>
            <div className='flex flex-col items-start sm:flex-row'>
              <AddBookmark props={Movie} />

              <button className='mr-3 flex mt-4 items-center bg-transparent text-white rounded-xl text-lg font-medium px-5 py-3 '>
                <CheckCircleIcon className='h-6 w-6 mr-2 -ml-1' /> Add to
                watched
              </button>
            </div>
          </div>
        </div>
        <div className='absolute top-0 h-full'>
          <div className='absolute bg-black w-screen h-full opacity-80'></div>
          <img
            src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
            alt={Movie.title}
            className='object-cover w-screen h-full z-0'
          />
        </div>
      </section>
      <Cast id={match.params.id} />
      <Crew id={match.params.id} />
      <Trailer id={match.params.id} title={Movie.title} />
      <PopularMovies
        type={'movie'}
        title={'Similar titles'}
        movie_id={match.params.id}
        similar={true}
      />
    </>
  );
}

export default Single;