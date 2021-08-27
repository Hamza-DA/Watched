import Logo from '../resources/logo.png';
import {
  HomeIcon,
  UserCircleIcon,
  BookmarkIcon,
  InformationCircleIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import HomeComponent from '../Pages/HomeComponent';
import UserPage from '../Pages/UserPage';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className='z-50 fixed bottom-0 left-0 right-0 flex justify-evenly h-20 sm:h-screen w-screen sm:w-16  sm:pl-5 px-6 group sm:hover:w-40 transition-all duration-75 sm:bg-opacity-50 hover:bg-opacity-95 backdrop-blur bg-black items-start sm:flex-col'>
        <img src={Logo} alt='Watched' className='hidden sm:block' />
        <ul className='text-gray-400 w-full h-full sm:flex-col flex items-center justify-between'>
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
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
