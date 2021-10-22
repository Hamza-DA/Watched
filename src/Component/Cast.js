import { useEffect, useState } from 'react';
import CastCard from './CastCard';
import H2 from './h2Title';
import axios from 'axios';

function Cast({ id }) {
  useEffect(() => {
    if (id !== undefined) {
      getCasts();
    } else {
      console.log(id);
    }
  }, [id]);
  const [CastArray, setCastArray] = useState([]);
  const getCasts = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_WATCHED_API_KEY}&language=en-US`
      )
      .then((res) => {
        setCastArray(res.data.cast);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='bg-primary py-9'>
        <div className='sm:px-12 lg:px-32 px-6'>
          <H2 content='Cast' />
        </div>
        <div className='flex sm:px-12 lg:px-32 px-6 overflow-x-auto'>
          {CastArray
            ? CastArray.slice(0, 10).map((e) => {
                return <CastCard key={e.name} props={e} />;
              })
            : console.log('err')}
        </div>
      </div>
    </>
  );
}
export default Cast;
