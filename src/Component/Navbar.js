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
      <nav className='fixed left-0 flex justify-evenly z-10 h-screen w-16 pl-5 group hover:w-40 transition-all duration-75 bg-opacity-50 hover:bg-opacity-95 backdrop-blur bg-black items-start flex-col'>
        <img src={Logo} alt='Watched' />
        <ul className='text-gray-400 items-center justify-around'>
          <li className='mt-20 relative'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              to='/'
              exact
            >
              <HomeIcon className='h-6 w-6' />
              <p className='absolute left-11 top-0.5 opacity-0 group-hover:opacity-100 transition-all duration-75'>
                Home
              </p>
            </NavLink>
          </li>
          <li className='mt-20 relative'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              to='/search'
            >
              <SearchIcon className='h-6 w-6' />
              <p className='absolute left-11 top-0.5 opacity-0 group-hover:opacity-100 transition-all duration-75'>
                Search
              </p>
            </NavLink>
          </li>
          <li className='mt-20 relative'>
            <NavLink
              activeClassName='navLinkActive text-white flex items-center relative'
              to='/dashboard'
            >
              <UserCircleIcon className='h-6 w-6' />
              <p className='absolute left-11 top-0.5 opacity-0 group-hover:opacity-100 transition-all duration-75 whitespace-nowrap'>
                My Profile
              </p>
            </NavLink>
          </li>
          <li className='mt-20 relative'>
            <InformationCircleIcon className='h-6 w-6' />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
