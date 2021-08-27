import movieGenres from './prototypeJSON/movieGenres.json';
import { PlusIcon, CheckIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import H2 from './h2Title';
export default function SelectGenres() {
  const [List, setList] = useState([]);
  const saveToLs = (genres) => {
    localStorage.setItem('Genres', JSON.stringify(genres));
  };
  const addToSelected = (genre) => {
    const newList = [...(List || ''), genre];
    // setList(newList);
    saveToLs(newList);
    return newList;
  };
  // console.log(addToSelected());

  const removeSelected = (genre) => {
    const newArray = List.filter((e) => e !== genre);
    // setList(newArray);
    // localStorage.setItem('Genres', JSON.stringify(newArray));
    saveToLs(newArray);
    return newArray;
  };
  useEffect(() => {
    const retrieveFromLS = JSON.parse(localStorage.getItem('Genres'));
    setList(retrieveFromLS);
    console.log(List);
  }, []);
  return (
    <>
      <section className='bg-primary sm:pr-32  py-9'>
        <H2 content='Select movie genre you like' />
        <div className='sm:ml-32 mx-6 flex flex-wrap'>
          {movieGenres.genres.map((genre) => {
            return (
              <button
                onClick={() =>
                  // ? removeSelected(genre.id)
                  // addToSelected(genre.id)
                  List && List.find((e) => e == genre.id)
                    ? setList(removeSelected(genre.id))
                    : setList(addToSelected(genre.id))
                }
                key={genre.id}
                className={`flex items-center py-2 px-3 mr-6 mb-4 text-white ${
                  List && List.find((e) => e == genre.id)
                    ? 'bg-white'
                    : 'bg-black'
                } bg-opacity-20`}
              >
                {List && List.find((e) => e == genre.id) ? (
                  <CheckIcon className='h-5 w-5 mr-2 -ml-1' />
                ) : (
                  <PlusIcon className='h-5 w-5 mr-2 -ml-1' />
                )}
                {genre.name}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
