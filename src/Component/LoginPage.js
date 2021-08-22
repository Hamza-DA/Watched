import { useEffect, useState } from 'react';
import axios from 'axios';
import api_key from './prototypeJSON/api_key.json';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import api_key from './api_key.json';

function Login(props) {
  const history = useHistory();
  useEffect(() => {
    FetchImages();
    if (localStorage.getItem('session_id')) {
      history.push('/home');
    } else {
      getRequestGuestSession();
    }
  }, []);
  const [Trend, setTrend] = useState([]);
  const FetchImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key.key}`
      )
      .then((res) => {
        setTrend(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [GuestSession, setGuestSession] = useState('');
  const getRequestGuestSession = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${api_key.key}`
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('session_id', res.data.guest_session_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [UserName, setUserName] = useState('');
  const handleUserName = async (e) => {
    setUserName(e.target.value);
    console.log(UserName);
  };
  //   const [PassWord, setPassWord] = useState('');
  //   const handlePassword = async (e) => {
  //     setPassWord(e.target.value);
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/home');
    // console.log(`local storage ${localStorage.getItem('session_id')}`);
  };

  //   let bodyFormData = new FormData();
  //   bodyFormData.append(UserName, PassWord);
  //   const redirectTo = () => {
  //   };
  return (
    <>
      <section className='min-h-screen relative flex items-center'>
        <div className='flex-col ml-32 relative w-full'>
          <h1 className='z-10 text-white text-7xl font-medium leading-tight relative mb-10 w-3/4'>
            Movies and TV shows. <br /> Any time, Any where
          </h1>
          <form
            className='z-10 relative flex-col items-start flex'
            onSubmit={handleSubmit}
          >
            <label htmlFor='username' className='flex-col flex mb-5 w-full'>
              <h2 className='mb-2 text-xl text-white font-medium'>
                Your name :
              </h2>
              <input
                type='text'
                name='username'
                className=' bg-primary bg-opacity-50 pl-4 w-3/6 py-3 text-lg font-medium text-gray-400 border-4 border-white'
                onChange={handleUserName}
              />
            </label>
            {/* <label htmlFor='password' className='flex-col flex mb-5 w-full'>
              <h2 className='mb-2 text-xl text-white font-medium'>Password</h2>
              <input
                type='password'
                name='passsword'
                className=' bg-black bg-opacity-50 pl-4 w-3/6 py-3 text-lg font-medium text-gray-400 border-4 border-white'
                onChange={handlePassword}
              />
            </label> */}
            <input
              type='submit'
              value='Log in *'
              className='bg-red-500 text-xl text-white font-medium py-2 px-5 cursor-pointer'
            />
            <p className='text-xs text-gray-300 w-1/2 mt-2 tracking-wide leading-5'>
              * Log in as guest. In case of deleting the app or clearing the
              website's cache, your data, such as wishlist, watch later,
              favourite films and TV shows may be gone forever.
            </p>
          </form>
        </div>
        <div className='absolute top-0 flex flex-wrap h-full'>
          {Trend.slice(0, 12).map((e) => {
            return (
              <>
                <img
                  className='object-fill h-1/2 w-1/6'
                  src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                  alt={e.title}
                />
              </>
            );
          })}
        </div>
        <div className='absolute top-0 bg-black w-screen h-screen opacity-80'></div>
      </section>
    </>
  );
}

export default withRouter(Login);
