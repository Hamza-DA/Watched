import MoviePoster from '../Component/MoviePoster';
import { useEffect, useState } from 'react';
import H2 from '../Component/h2Title';

export default function UserPage() {
  const [Name, setName] = useState('');

  const [BookMarks, setBookMarks] = useState([]);
  const [Watched, setWatched] = useState([]);
  useEffect(() => {
    setBookMarks(JSON.parse(localStorage.getItem('BookMark')));
    setWatched(JSON.parse(localStorage.getItem('WatchedMovies')));
    document.title = 'Profile - WATCHED';
  }, []);
  return (
    <>
      <div className='bg-primary h-full pt-9'>
        <div className='w-screen min-h-screen'>
          {/* <div className='w-full flex mb-12 mx-6 sm:ml-32'>
              <h1 className='text-white text-7xl font-medium leading-tight w-auto mr-5'>
                Hello,
              </h1>
              <input
                onChange={(e) => setUserName(e)}
                value={localStorage.getItem('userName')}
                type='text'
                placeholder='Your name'
                className='border-0 bg-transparent outline-none text-white text-7xl font-medium leading-tight'
              />
            </div> */}
          {BookMarks && (
            <>
              <div className='mb-10'>
                <div className='sm:px-12 lg:px-32 px-6'>
                  <H2 content='You saved' />
                </div>
                <div className='pl-6 sm:pl-32 flex overflow-x-auto'>
                  {BookMarks.length !== 1 ? (
                    BookMarks.map((e) => {
                      return <MoviePoster props={e} />;
                    })
                  ) : (
                    <MoviePoster props={BookMarks[0]} />
                  )}
                </div>
              </div>
            </>
          )}
          {Watched && (
            <>
              <div>
                <div className='sm:px-12 lg:px-32 px-6'>
                  <H2 content='You watched' />
                </div>
                <div className='sm:px-12 lg:px-32 px-6 flex overflow-x-auto'>
                  {Watched.length !== 1 ? (
                    Watched.map((e) => {
                      return <MoviePoster props={e} />;
                    })
                  ) : (
                    <MoviePoster props={BookMarks[0]} />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
