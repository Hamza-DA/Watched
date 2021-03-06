import { BookmarkIcon, TrashIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

export default function SaveForLater({ props }) {
  const [BookMarks, setBookMarks] = useState([]);
  const saveToLocalStorage = (movies) => {
    localStorage.setItem('BookMark', JSON.stringify(movies));
  };
  const deleteFromLocalStorage = () => {
    const newArray = BookMarks.filter((movie) => movie.id !== props.id);
    localStorage.setItem('BookMark', JSON.stringify(newArray));
    setBookMarks(newArray);
  };
  const addToBookmark = () => {
    const newBookMarkList = [...(BookMarks || ''), props];
    setBookMarks(newBookMarkList);
    saveToLocalStorage(newBookMarkList);
  };
  useEffect(() => {
    const retrieveFromLS = JSON.parse(localStorage.getItem('BookMark'));
    setBookMarks(retrieveFromLS);
  }, []);
  return (
    <>
      {(localStorage.getItem('BookMark') &&
        JSON.parse(localStorage.getItem('BookMark')).find(
          (e) => e.id == props.id
        ) !== undefined) ||
      null ? (
        <button
          onClick={() => deleteFromLocalStorage()}
          className='bg-red-500 mr-3 flex mt-4 items-center text-white rounded-xl text-lg font-medium px-5 py-3 '
        >
          <span className='flex items-center'>
            <TrashIcon className='h-6 w-6 mr-2 -ml-1' />
            Remove from saved
          </span>
        </button>
      ) : (
        <button
          onClick={() => addToBookmark()}
          className='hover:bg-gray-200 mr-3 flex mt-4 items-center bg-white text-gray-900 rounded-xl text-lg font-medium px-5 py-3 '
        >
          <span className='flex items-center'>
            <BookmarkIcon className='h-6 w-6 mr-2 text-gray-900 -ml-1' />
            Save to later
          </span>
        </button>
      )}
    </>
  );
}
