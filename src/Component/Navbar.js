import { SearchIcon } from '@heroicons/react/outline';
import SearchComponent from './SearchComponent';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
  const [SearchBar, setSearchBar] = useState(false);
  return (
    <>
      <header className='flex flex-col z-50 sticky top-0'>
        <nav className='2xl:container 2xl:mx-auto z-20 flex flex-col items-center h-14 md:w-screen w-screen sm:px-12 lg:px-32 px-6 backdrop-blur bg-black bg-opacity-90'>
          <div className='w-full h-full flex justify-between items-center'>
            <NavLink
              activeClassName='text-white font-medium flex items-center relative'
              to='/'
              className='flex flex-col items-center justify-center '
              exact
            >
              <svg
                className='w-24 h-auto'
                width='518'
                height='147'
                viewBox='0 0 518 147'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M157.754 1.75951L180.709 145.229H157.959L154.065 119.199H126.395L122.501 145.229H101.801L124.756 1.75951L157.754 1.75951ZM139.923 27.174L129.265 99.7284H150.99L140.332 27.174H139.923Z'
                  fill='white'
                />
                <path
                  d='M166.88 22.2551V1.75951L236.565 1.75951V22.2551L212.995 22.2551V145.229H190.45V22.2551L166.88 22.2551Z'
                  fill='white'
                />
                <path
                  d='M280.597 91.7351H301.912V110.796C301.912 122.41 299.043 131.36 293.304 137.645C287.565 143.794 279.23 146.868 268.299 146.868C257.368 146.868 249.034 143.794 243.295 137.645C237.556 131.36 234.687 122.41 234.687 110.796V36.1921C234.687 24.5779 237.556 15.6965 243.295 9.54783C249.034 3.26252 257.368 0.119873 268.299 0.119873C279.23 0.119873 287.565 3.26252 293.304 9.54783C299.043 15.6965 301.912 24.5779 301.912 36.1921V50.1291H280.597V34.7574C280.597 25.3294 276.703 20.6154 268.914 20.6154C261.126 20.6154 257.232 25.3294 257.232 34.7574V112.231C257.232 121.522 261.126 126.168 268.914 126.168C276.703 126.168 280.597 121.522 280.597 112.231V91.7351Z'
                  fill='white'
                />
                <path
                  d='M328.173 83.7418V145.229L305.628 145.229V1.75951L328.173 1.75951V63.2463H353.793V1.75951L376.748 1.75951V145.229H353.793V83.7418H328.173Z'
                  fill='white'
                />
                <path
                  d='M405.677 22.2551V62.2215H436.625V82.7171L405.677 82.7171V124.733L444.618 124.733V145.229H383.132V1.75951L444.618 1.75951V22.2551H405.677Z'
                  fill='white'
                />
                <path
                  d='M448.626 145.229V1.75951L484.288 1.75951C506.697 1.75951 517.901 13.5786 517.901 37.2169V109.771C517.901 133.409 506.697 145.229 484.288 145.229H448.626ZM483.878 22.2551H471.171V124.733H483.878C491.53 124.733 495.356 120.087 495.356 110.796V36.1921C495.356 26.9008 491.53 22.2551 483.878 22.2551Z'
                  fill='white'
                />
                <path
                  d='M63.43 145.228L55.4367 68.7798H55.0268L47.0335 145.228H16.0852L0.0986328 1.75928L22.0289 1.75928L33.9163 114.895H34.3263L44.984 1.75928L66.7093 1.75928L77.7769 115.715H78.1868L89.6643 1.75928L109.34 1.75928L93.3535 145.228H63.43Z'
                  fill='#DD3E3E'
                />
              </svg>
            </NavLink>
            <div className='hidden md:block w-3/4'>
              <SearchComponent />
            </div>
            <ul className='text-white md:flex-row flex items-center justify-between'>
              <li className='flex md:hidden ml-4 relative'>
                <button onClick={() => setSearchBar(!SearchBar)}>
                  <SearchIcon className='w-6' />
                </button>
              </li>
              <li className=' ml-4 relative flex'>
                <NavLink
                  to='/dashboard'
                  className='flex flex-col items-center text-white justify-center'
                  exact
                >
                  <img
                    src='https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg'
                    alt='user avatar'
                    className='w-7 h-7 sm:w-8 sm:h-8 rounded-full'
                  />
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7 stroke-current'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg> */}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`duration-100 transform ${
            SearchBar === false
              ? '-translate-y-full opacity-0'
              : 'translate-y-0 opacity-100'
          } z-0 px-6 py-2 sm-block bg-black bg-opacity-90 absolute left-0 right-0 top-14`}
        >
          <SearchComponent />
        </div>
      </header>
    </>
  );
}

export default Navbar;
