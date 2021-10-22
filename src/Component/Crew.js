import axios from 'axios';
import { useEffect, useState } from 'react';
import CastCard from './CastCard';
import H2 from './h2Title';

export default function Crew({ id }) {
  useEffect(() => {
    getCrew();
  }, [id]);
  const [Crew, setCrew] = useState([]);
  const getCrew = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US`
      )
      .then((res) => {
        setCrew(
          res.data.cast.filter((a) => a.known_for_department !== 'Acting')
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const crewFiltering = () => {
    return Crew.map((e) => {
      return (
        <>
          <CastCard props={e} />
        </>
      );
    });
  };
  return (
    <>
      {console.log(Crew)}
      {Crew.length !== 0 && (
        <div className='bg-primary py-9'>
          <div className='sm:px-12 lg:px-32 px-6'>
            <H2 content='Crew' />
          </div>
          <div className='sm:px-12 lg:px-32 px-6 flex overflow-auto'>
            {crewFiltering()}
          </div>
        </div>
      )}
    </>
  );
}
