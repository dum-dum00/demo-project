import React, { useState, useEffect } from 'react';
// import Link from './Link';
import logo from '../assets/logo.png';
import { useLocation, Link } from 'react-router-dom';
import {
  PATH_CUSTOMERS,
  PATH_PROJECT_TYPE,
  PATH_PROJECT_STATUS,
  PATH_TECH_STACK,
  PATH_DEPARTMENTS,
  PATH_STAFFS,
  PATH_PROJECTS,
} from '../constants/path';

const SideNav = () => {
  const [focus, setFocus] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pathArr = location.pathname.split('/');
    const currentPath = pathArr[1] ? pathArr[1] : 'projectType';
    setFocus(currentPath);
  }, [location.pathname]);

  return (
    <div className='lg:w-48 sm:w-1/4 flex'>
      <nav className='flex flex-col bg-white w-full px-4 pt-4 pb-6 h-screen mx-3 rounded-lg mt-0'>
        <img
          src={logo}
          className=' object-scale-down h-20 mx-1 object-center  bg-indigo-200 p-2 rounded-xl inline-block '
          alt='VMO'
        />
        <br></br>

        <div className='overflow-y-auto w-full'>
          <label className='font-bold text-md w-full border-b-2 border-blue-800 float-right text-right text-gray-600 my-3 pr-4'>
            Category
          </label>
          <div>
            <ul className='mt-2 w-40'>
              <li className='mt-2'>
                <Link to={PATH_PROJECT_TYPE} className='navBtn '>
                  Project Type
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={PATH_PROJECT_STATUS} className='navBtn'>
                  Project Status
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={PATH_TECH_STACK} className='navBtn'>
                  Tech Stack
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={PATH_CUSTOMERS} className='navBtn'>
                  Customers
                </Link>
              </li>
            </ul>
          </div>
          <label className='font-bold text-md w-full border-b-2 border-blue-800 float-right text-right text-gray-600 my-3 pr-4'>
            Manager
          </label>
          <div>
            <ul className='mt-2'>
              <li className='mt-2'>
                <Link to={PATH_DEPARTMENTS} className='navBtn'>
                  Departments
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={PATH_STAFFS} className='navBtn'>
                  Staffs
                </Link>
              </li>
              <li className='mt-2'>
                <Link to={PATH_PROJECTS} className='navBtn'>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
