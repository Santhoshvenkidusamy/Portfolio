import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({toogle, dark}) => {
  return (
    <div className='fixed top-0 z-10 w-full h-16 shadow-md dark:border-gray-700 bg-white dark:bg-gray-800'>
      <div className='md:mx-20 flex justify-between items-center'>
    <div className='font hover:text-sky-500 dark:hover:text-blue-500 dark:text-slate-200 text-[16px] p-4'>
      Santhosh Venkidusamy
    </div>
    <button
      className='z-20 mr-4 p-2 text-blue-500 dark:text-white rounded'
      onClick={toogle}
    >
      {dark ? <MdOutlineLightMode className='h-6 w-6' /> : <MdOutlineDarkMode className='h-6 w-6' />}
    </button>
  </div>
  </div>
  
  
  )
}

export default Header