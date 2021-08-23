import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
export default function AddToWatched({ props }) {
  const [Lists, setLists] = useState([]);
  const saveToLocalStorage = (movies) => {
    localStorage.setItem('List', JSON.stringify(movies));
  };
  const deleteFromLocalStorage = () => {
    const newArray = Lists.filter((movie) => movie.id !== props.id);
    localStorage.setItem('List', JSON.stringify(newArray));
    setLists(newArray);
  };
  const addToList = () => {
    const newListList = [...(Lists || ''), props];
    setLists(newListList);
    saveToLocalStorage(newListList);
  };
  useEffect(() => {
    const retrieveFromLS = JSON.parse(localStorage.getItem('List'));
    setLists(retrieveFromLS);
  }, []);
  return (
    <>
      {(localStorage.getItem('List') &&
        JSON.parse(localStorage.getItem('List')).find(
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
