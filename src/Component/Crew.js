import axios from 'axios';
import { useEffect, useState } from 'react';
import CastCard from './CastCard';
import H2 from './h2Title';
import user from '../project resources/user.png';
import api_key from './api_key.json';

export default function Crew({ id }) {
  useEffect(() => {
    getCrew();
  }, [id]);
  const [Crew, setCrew] = useState([]);
  const getCrew = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key.key}&language=en-US`
      )
      .then((res) => {
        setCrew(res.data.cast);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const crewFiltering = () => {
    return Crew.filter((a) => a.known_for_department !== 'Acting').map((e) => {
      return (
        <>
          <div key={e.name} className='flex items-center flex-shrink-0'>
            <img
              className='w-16 h-16 object-cover rounded-full mr-4 hidden sm:block'
              src={
                e.profile_path == undefined || null
                  ? user
                  : `https://image.tmdb.org/t/p/original${e.profile_path}`
              }
              alt={e.name}
            />
            <div className='flex flex-col'>
              <h3 className='text-lg sm:text-xl font-medium text-white w-full mb-1'>
                {e.original_name}
              </h3>
              <h4 className='text-sm font-normal text-gray-300 w-full mb-1'>
                {e.character}
              </h4>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className='bg-primary py-9'>
        <H2 content='Crew' />
        <div className='grid grid-flow-col sm:grid-cols-3 grid-col-1 auto-rows-auto gap-y-4 sm:gap-y-8 mx-6 sm:ml-32 overflow-x-auto'>
          {crewFiltering()}
        </div>
      </div>
    </>
  );
}
