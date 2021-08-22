import { useEffect, useState } from 'react';
import CastCard from './CastCard';
import H2 from './h2Title';
import axios from 'axios';
import api_key from './api_key.json';
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
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key.key}&language=en-US`
      )
      .then((res) => {
        setCastArray(res.data.cast);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* {console.log('the id is ' + id)} */}
      <div className='bg-primary py-9'>
        <H2 content='Cast' />
        <div className='flex mx-6 sm:ml-32 overflow-x-auto'>
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
// function Cast({ id }) {
//   useEffect(() => {
//     getCast();
//   }, []);
//   const [CastArray, setCastArray] = useState({});
//   const getCast = async () => {
//     const url = await fetch(
//       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1925562cef1131735cd1028a38b06f84&language=en-US`
//     );
//     const response = await url.json();
//     setCastArray(response);
//   };
//   const handleCast = () => {
//     return (
//       <>
//         {CastArray.cast
//           ? CastArray.cast.slice(0, 10).map((e) => {
//               return <CastCard key={e.name} props={e} />;
//             })
//           : console.log('err')}
//       </>
//     );
//   };
//   return (
//     <>
//       <div className='bg-primary py-9'>
//         <H2 content='Cast' />
//         <div className='flex ml-32 overflow-x-auto'>{handleCast()}</div>
//       </div>
//     </>
//   );
// }

export default Cast;
