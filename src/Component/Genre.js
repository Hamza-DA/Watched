// import { useEffect, useState } from 'react';
import movieGenres from './movieGenres.json';

function GenreRender({ genresProps }) {
  const Reders = () => {
    let arrayOfGenres = [];

    for (let i = 0; i < genresProps.length; i++) {
      arrayOfGenres.push(
        movieGenres.genres.map((a) => a).find((e) => e.id === genresProps[i])
          .name
      );
    }

    return (
      <>
        {arrayOfGenres.map((e) => {
          return (
            <span className='mb-2 mr-2 p-1 sm:mr-1 sm:py-1 sm:px-2 bg-black bg-opacity-60'>
              {e}
            </span>
          );
        })}
      </>
    );
  };
  return (
    <>
      {console.log(movieGenres)}
      {genresProps != undefined ? (
        <span className='text-gray-100 text-base font-normal tracking-wide mr-2 flex-shrink-0 flex flex-wrap'>
          {/* {Reders()} */}
        </span>
      ) : (
        console.log('genresProps is undefined')
      )}
    </>
  );
}
// function GenreRender({ genresProps }) {
//   useEffect(() => {
//     LoadGenres();
//   }, []);
//   const [GenresAPI, setGenresAPI] = useState([]);
//   const LoadGenres = async () => {
//     const url = await fetch(
//       'https://api.themoviedb.org/3/genre/movie/list?api_key=1925562cef1131735cd1028a38b06f84&language=en-US'
//     );
//     const res = await url.json();
//     setGenresAPI(res.genres);
//   };
//   const Reders = () => {
//     let arrayOfGenres = [];

//     for (let i = 0; i < genresProps.length; i++) {
//       arrayOfGenres.push(
//         GenresAPI.map((a) => a).find((e) => e.id === genresProps[i]).name
//       );
//     }

//     return (
//       <>
//         {arrayOfGenres.map((e) => {
//           return <span className='mr-1'>{e},</span>;
//         })}
//       </>
//     );
//   };

//   return (
//     <>
//       {genresProps != undefined ? (
//         <span className='text-gray-300 text-base font-medium mr-2'>
//           {Reders()}
//         </span>
//       ) : (
//         console.log('genresProps is undefined')
//       )}
//     </>
//   );
// }

export default GenreRender;
