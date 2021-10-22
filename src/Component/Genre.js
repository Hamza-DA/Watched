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
        {arrayOfGenres.map((e, index) => {
          return (
            <span
              key={index}
              className=' mr-2 p-1 sm:mr-1 sm:py-1 sm:px-2 text-lg'
            >
              {e}
            </span>
          );
        })}
      </>
    );
  };
  return (
    <>
      {genresProps !== undefined ? (
        <span className='text-gray-100 text-base font-normal tracking-wide mr-2 flex-shrink-0 flex flex-wrap'>
          {Reders()}
        </span>
      ) : (
        console.log('genresProps is undefined')
      )}
    </>
  );
}
export default GenreRender;
