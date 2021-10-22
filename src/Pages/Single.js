import { useEffect, useState } from 'react';
import RatingComponent from '../Component/RatingComponent';
import GenreRender from '../Component/Genre';
import PopularMovies from '../Component/PopularForEachType';
import Trailer from '../Component/Trailer';
import Cast from '../Component/Cast';
import axios from 'axios';
import FamilyShield from '../Component/FamilyShield';
import Crew from '../Component/Crew';
import SaveForLater from '../Component/SaveForLater';
import MovieHeroSkeleton from '../Component/Skeleton/MovieHeroSkeleton';
import AddToWatched from '../Component/AddToWatched';

function Single({ match }) {
  useEffect(() => {
    getMovie();
    window.scrollTo(0, 0);
  }, [match.params.id]);
  const [Movie, setMovie] = useState([]);
  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (Movie.title !== undefined) {
    document.title = `${Movie.title} - Watched`;
  }

  return (
    <>
      {Movie.length === 0 ? (
        <MovieHeroSkeleton isSingle={true} />
      ) : (
        <section
          key={match.params.id}
          className='bg-primary sm:h-auto  py-8 relative'
        >
          <div className='flex flex-col sm:flex-row sm:px-12 lg:px-32 px-6 items-start h-auto sm:h-full sm:items-center z-20 relative'>
            <div className='h-auto w-auto sm:hidden md:block flex-shrink-0 relative overflow-hidden'>
              <div className='relative'>
                <FamilyShield adult={Movie.adult} />
                <img
                  src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                  alt={Movie.title}
                  className='object-cover w-96 h-auto'
                />
              </div>
            </div>
            <div className='flex-col md:ml-12 w-auto'>
              <h1 className='text-white font-Display mt-4  text-5xl sm:text-7xl font-medium leading-none w-full'>
                {Movie.title}
              </h1>
              <div className='flex-col items-center mb-1'>
                <div className='font-Display flex flex-col items-start mb-3 mt-2'>
                  <div className='flex mt-1'>
                    <RatingComponent ratingProps={Movie.vote_average} />
                    <span className='flex items-center px-1.5 mr-3 text-gray-200 uppercase text-lg'>
                      {Movie.original_language}
                    </span>
                    <span className='flex items-center px-1.5 mr-3 text-gray-200 uppercase text-lg'>
                      {Movie.release_date}
                    </span>
                    <GenreRender
                      genresProps={
                        Movie.genres !== undefined &&
                        Movie.genres.map((e) => e.id)
                      }
                    />
                  </div>
                </div>
              </div>
              <p className='text-gray-300 w-full lg:w-5/6 leading-relaxed text-lg tracking-wide font-normal'>
                {Movie.overview}
              </p>
              <div className='flex flex-col items-start sm:flex-row'>
                <SaveForLater props={Movie} />
                <AddToWatched props={Movie} />
              </div>
            </div>
          </div>
          <div className='absolute top-0 h-full'>
            <div className='absolute bg-black w-full h-full opacity-80'></div>
            <img
              src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
              alt={Movie.title}
              className='object-cover w-screen h-full z-0'
            />
          </div>
        </section>
      )}

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
