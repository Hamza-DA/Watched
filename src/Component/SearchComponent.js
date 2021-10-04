import { SearchIcon, XIcon } from '@heroicons/react/outline';
import axios from 'axios';
import MoviePoster from './MoviePoster';
import api_key from './api_key.json';
import { useState } from 'react';
function SearchComponent() {
  const [Search, setSearch] = useState([]);
  const [SearchTerm, setSearchTerm] = useState('');
  const searchQuerry = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key.key}&language=en-US&query=${e}&page=1&include_adult=false`
      )
      .then((res) => setSearch(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <label
        htmlFor='movie_search'
        className='bg-primary flex items-center px-4 w-1/2'
      >
        {SearchTerm === '' ? (
          <SearchIcon className='h-6 w-6 mr-2 text-gray-400' />
        ) : (
          <button
            className='h-6 w-6 mr-2 bg-transparent border-none '
            onClick={() => setSearchTerm('')}
          >
            <XIcon className='h-6 w-6 mr-2 text-gray-400' />
          </button>
        )}
        <input
          type='text'
          name='movie_search'
          className='bg-transparent border-none p-2 text-white font-medium w-full'
          placeholder='Search for TV series or Movies'
          value={SearchTerm}
          onInput={({ target }) => {
            setSearchTerm(target.value);
            target.value !== '' && searchQuerry(target.value);
          }}
        />
      </label>
      <div
        className={`${
          SearchTerm === '' ? 'hidden' : 'flex'
        } absolute top-14 left-0 w-screen pl-32  overflow-auto flex items-end bg-black bg-opacity-90 shadow-2xl`}
      >
        {console.log(SearchTerm === '')}
        {Search.map((e) => (
          <MoviePoster props={e} w_h='sm:h-80 sm:w-48' />
        ))}
      </div>
    </>
  );
}
export default SearchComponent;
