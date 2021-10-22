import { SearchIcon, XIcon } from '@heroicons/react/outline';
import axios from 'axios';
import MoviePoster from './MoviePoster';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const [Search, setSearch] = useState([]);
  const [SearchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    if (SearchTerm !== '') {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US&query=${SearchTerm}&page=1&include_adult=false`
        )
        .then((res) => setSearch(res.data.results))
        .catch((err) => console.log(err));
    }
    // console.log(SearchTerm);
  }, [SearchTerm, Search]);
  const searchQuerry = (e) => {
    if (e !== undefined) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US&query=${e}&page=1&include_adult=false`
        )
        .then((res) => setSearch(res.data.results))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <label className='flex items-center text-white bg-gray-700 bg-opacity-40'>
        <button
          onClick={() => {
            SearchTerm !== '' && setSearchTerm('');
          }}
          className='p-1.5 mx-2'
        >
          {SearchTerm === '' ? (
            <SearchIcon className='w-7 h-7' />
          ) : (
            <XIcon className='w-7 h-7' />
          )}
        </button>
        <input
          onChange={({ target }) => {
            setSearchTerm(target.value);
          }}
          value={SearchTerm}
          type='text'
          className='w-full bg-transparent border-none '
        />
      </label>
      <div
        className={`${
          SearchTerm === '' ? 'hidden' : ''
        } sm:px-12 lg:px-32 px-6 overflow-x-auto flex absolute top-14 left-0 bg-black bg-opacity-90 w-screen`}
      >
        {Search !== undefined &&
          Search.map((e) => (
            <div
              onClick={() => {
                SearchTerm !== '' && setSearchTerm('');
              }}
              key={e.id}
            >
              <MoviePoster w_h='sm:h-auto sm:w-48 w-48 h-auto' props={e} />
            </div>
          ))}
      </div>
    </>
  );
}
export default SearchComponent;
