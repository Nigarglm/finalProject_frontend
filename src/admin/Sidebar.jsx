// Sidebar.jsx
import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle, onMenuItemClick }) => {
  return (
    <div className={`${sidebarToggle ? 'hidden' : 'block'} w-64 bg-sky-950 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <hr />
      {/* <ul className="text-white font-bold mt-3 cursor-pointer">
        <li
          className="mb-2 rounded hover:shadow hover:bg-yellow-500 py-2"
          onClick={() => onMenuItemClick('home')}
        >
          <FaHome className="w-6 h-6 inline-block mr-2 -mt-2" />
          Home
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-yellow-500 py-2"
          onClick={() => onMenuItemClick('users')}
        >
          <FaUsers className="w-6 h-6 inline-block mr-2 -mt-2" />
          Users
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-yellow-500 py-2"
          onClick={() => onMenuItemClick('products')}
        >
          <AiFillProduct className="w-6 h-6 inline-block mr-2 -mt-2" />
          Products
        </li>
      </ul> */}

   <div className='flex flex-col gap-3 mt-4'>
   <Link className=' hover: flex items-center text-center justify-center uppercase h-[50px] before:ease relative   overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40' to="/admin/users">Users</Link>
   <Link className=' hover: flex items-center text-center justify-center uppercase h-[50px] before:ease relative   overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40' to="/admin/movies">Movies</Link>
   <Link className=' hover: flex items-center text-center justify-center uppercase h-[50px] before:ease relative   overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40' to="/admin/faq">FAQ</Link>
   <Link className=' hover: flex items-center text-center justify-center uppercase h-[50px] before:ease relative   overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40' to="/admin/contact">Contact</Link>
   <Link className=' hover: flex items-center text-center justify-center uppercase h-[50px] before:ease relative   overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40' to="/admin/hero">Hero section</Link>
   </div>
    </div>
  );
};

export default Sidebar;
