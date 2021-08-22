import { SearchIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState } from 'react';
import MoviePoster from '../Component/MoviePoster';
import movieGenres from '../Component/prototypeJSON/movieGenres.json';
import api_key from '../key.json';

function SearchPage() {
  const [Search, setSearch] = useState([]);
  const searchQuerry = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key.key}&language=en-US&query=${e}&page=1&include_adult=false`
      )
      .then((res) => setSearch(res.data))
      .catch((err) => console.log(err));
  };
  document.title = `Search - Watched`;
  const holdResults = () => {
    return (
      <>
        {Search.results !== undefined &&
          Search.results.slice(0, 10).map((e) => {
            return <MoviePoster props={e} w_h='h-80 w-52' />;
          })}
      </>
    );
  };
  const renderGenres = () => {
    return (
      <>
        {movieGenres.genres.slice(0, 10).map((e) => {
          return (
            <>
              <div key={e.id} className='flex items-center my-6 mr-14 w-auto'>
                <div className='bg-red-500 w-6 h-12'></div>
                <h3 className='-ml-4 text-4xl font-medium text-white w-full mb-1'>
                  {e.name}
                </h3>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className='bg-primary h-full'>
        <div className='pl-32 py-20 h-full flex-col w-screen min-h-screen'>
          <div className='w-full'>
            <h1 className='text-white text-7xl font-medium leading-tight w-auto mb-4 mr-5'>
              Search :
            </h1>
            <label
              htmlFor='search'
              className='flex items-center px-6 py-3 w-3/5 border-4 border-white'
            >
              <SearchIcon className='h-8 w-8 mr-6 text-gray-400' />
              <input
                type='text'
                name='search'
                placeholder='ex: Iron Man 2'
                className=' bg-primary w-full py-3 text-lg font-medium text-gray-400'
                onChange={(e) => {
                  searchQuerry(e.target.value);
                }}
              />
            </label>
          </div>
          <div className='flex overflow-x-auto mt-10'>{holdResults()}</div>
          <div className='flex-col mt-10'>
            <h2 className='uppercase text-2xl text-white font-medium flex items-center'>
              Search by genre:
            </h2>
            <div className='flex flex-wrap'>{renderGenres()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
