import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
export default function AddToWatched({ props }) {
  const [WatchedMovie, setWatchedMovie] = useState([]);
  const saveToLocalStorage = (movies) => {
    localStorage.setItem('WatchedMovies', JSON.stringify(movies));
  };
  const deleteFromLocalStorage = () => {
    const newArray = WatchedMovie.filter((movie) => movie.id !== props.id);
    localStorage.setItem('WatchedMovies', JSON.stringify(newArray));
    setWatchedMovie(newArray);
  };
  const addToList = () => {
    const newList = [...(WatchedMovie || ''), props];
    setWatchedMovie(newList);
    saveToLocalStorage(newList);
  };
  useEffect(() => {
    const retrieveFromLS = JSON.parse(localStorage.getItem('WatchedMovies'));
    setWatchedMovie(retrieveFromLS);
  }, []);
  return (
    <>
      {(localStorage.getItem('WatchedMovies') &&
        JSON.parse(localStorage.getItem('WatchedMovies')).find(
          (e) => e.id == props.id
        ) !== undefined) ||
      null ? (
        <button
          onClick={() => deleteFromLocalStorage()}
          className='mr-3 flex mt-4 items-center text-red-500 rounded-xl text-lg font-medium px-5 py-3 '
        >
          <span className='flex items-center'>
            <XCircleIcon className='h-6 w-6 mr-2 -ml-1' />
            Remove from watched
          </span>
        </button>
      ) : (
        <button
          onClick={() => addToList()}
          className='mr-3 flex mt-4 items-center text-white rounded-xl text-lg font-medium px-5 py-3 '
        >
          <span className='flex items-center'>
            <CheckCircleIcon className='h-6 w-6 mr-2 -ml-1' />
            Add to watched
          </span>
        </button>
      )}
    </>
  );
}
