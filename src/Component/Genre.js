import react, { useEffect, useState } from 'react';

function GenreRender({ genresProps }) {
  useEffect(() => {
    LoadGenres();
  }, []);
  const [GenresAPI, setGenresAPI] = useState([]);
  const LoadGenres = async () => {
    const url = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=1925562cef1131735cd1028a38b06f84&language=en-US'
    );
    const res = await url.json();
    setGenresAPI(res.genres);
  };

  return (
    <>
      {genresProps == undefined ? (
        console.log('genres is undefied')
      ) : (
        <span className='text-gray-300 text-base font-medium mr-3'>
          {`${
            GenresAPI.map((a) => a).find((e) => e.id === genresProps[0]).name
          }, ${
            GenresAPI.map((a) => a).find((e) => e.id === genresProps[1]).name
          }`}
        </span>
      )}

      {/* {console.log(GenresAPI.map(a => a.id).find(e => e === genresProps[0]))} */}
      {/* {console.log(genresProps)} */}
      {/* {console.log(genres.map(a => a.find(z => z === GenresAPI.map(e => e.id))))} */}
    </>
  );
}

export default GenreRender;
