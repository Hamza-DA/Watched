import Logo from '../resources/logo.png';
import { HomeIcon } from '@heroicons/react/outline';
import SearchComponent from './SearchComponent';
import HomeComponent from '../Pages/HomeComponent';
import UserPage from '../Pages/UserPage';
import user from '../resources/user.png';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className='z-50 sticky top-0 flex items-center h-14 sm:w-screen w-screen sm:px-32 px-6 group backdrop-blur bg-black bg-opacity-90'>
        <div className='w-full flex justify-between'>
          <SearchComponent />
          <ul className='text-gray-400 sm:flex-row flex items-center justify-between'>
            <li className=' mx-4 relative flex'>
              <NavLink
                activeClassName='text-white font-medium flex items-center relative'
                to='/'
                className='flex flex-col items-center justify-center '
                exact
              >
                <HomeIcon className='w-6 h-6' />
              </NavLink>
            </li>
            <li className=' mx-4 relative flex'>
              <NavLink
                activeClassName='text-white font-medium flex items-center relative'
                to='/dashboard'
                className='flex flex-col items-center justify-center'
                exact
              >
                <img src={user} alt='user' className='w-10 h-10 rounded-full' />
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <img src={Logo} alt='Watched' className='hidden sm:block' /> */}
        {/* <ul className='text-gray-400  h-full sm:flex-row flex items-center justify-between'>
          <li className='sm:mt-20 mx-4 relative flex'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              to='/'
              className='flex flex-col items-center justify-center'
              exact
            >
              <HomeIcon className='h-6 w-6 mb-1' />
              <p className='sm:absolute sm:left-11 sm:top-0.5 sm:opacity-0 group-hover:opacity-100 transition-all duration-75'>
                Home
              </p>
            </NavLink>
          </li>
          <li className='sm:mt-20 mx-4 relative'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              to='/search'
              className='flex flex-col items-center justify-center'
            >
              <SearchIcon className='h-6 w-6 mb-1' />
              <p className='sm:absolute sm:left-11 sm:top-0.5 sm:opacity-0 group-hover:opacity-100 transition-all duration-75'>
                Search
              </p>
            </NavLink>
          </li>
          <li className='sm:mt-20 mx-4 relative'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              to='/dashboard'
              className='flex flex-col items-center justify-center'
            >
              <UserCircleIcon className='h-6 w-6 mb-1' />
              <p className='sm:absolute sm:left-11 sm:top-0.5 sm:opacity-0 group-hover:opacity-100 transition-all duration-75 whitespace-nowrap'>
                My Profile
              </p>
            </NavLink>
          </li>
          <li className='sm:mt-20 mx-4 relative'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              className='flex flex-col items-center justify-center'
              to='/about'
            >
              <InformationCircleIcon className='h-6 w-6 mb-1' />
              <p className='sm:absolute sm:left-11 sm:top-0.5 sm:opacity-0 group-hover:opacity-100 transition-all duration-75 whitespace-nowrap'>
                About
              </p>
            </NavLink>
          </li>
        </ul> */}
      </nav>
    </>
  );
}

export default Navbar;
