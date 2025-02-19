import React, { useState } from 'react';
import { FaReact, FaHtml5, FaGitAlt, FaAws } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaGitlab } from 'react-icons/fa6';
import download from '../src/Images/download-ts.gif';
import dwnld from '../src/Images/dwnld-ts.png';
import { ScrollTop } from 'primereact/scrolltop';
import { FaArrowUp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
const Proficient = () => {
  const [show, setShow] = useState(false);

  const handleDownload = () => {
    setShow(true);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-2'>
      <div className='text-[24px]  dark:text-slate-200 dark:hover:text-blue-500'>Download My Resume</div>
      <div className='h-32'>
        {!show ? (
          <>
          <a href="/Santhosh.V_Resume.pdf" download onClick={handleDownload} className='flex justify-center w-full'>
            <img src={dwnld} alt="Download Icon"  className='h-16 mt-4 w-full' />
          </a>
        </>
        ) : (
          <img src={download} alt="Download" />
        )}
      </div>
      </div>
      <div className='flex flex-col items-center mb-4 mx-4'>
        <div className='text-[24px] dark:text-slate-200 dark:hover:text-blue-500'>Skills</div>
        <div className='text-[12px] text-gray-500'>Proficient in ~</div>
      </div>
      <div className='flex flex-wrap items-center justify-center text-[32px]'>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaReact className='text-blue-600' />
          <span className='text-[12px] dark:text-gray-300'>React</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <BiLogoMongodb className='text-green-600' />
          <span className='text-[12px] dark:text-gray-300'>Mongo DB</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <RiJavascriptFill className='text-yellow-600' />
          <span className='text-[12px] dark:text-gray-300'>JavaScript</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaHtml5 className='text-red-600' />
          <span className='text-[12px] dark:text-gray-300'>HTML</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <RiTailwindCssFill className='text-blue-600' />
          <span className='text-[12px] dark:text-gray-300'>Tailwind Css</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaGitAlt className='text-black dark:text-white' />
          <span className='text-[12px] dark:text-gray-300'>Git</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaAws className='text-blue-600' />
          <span className='text-[12px] dark:text-gray-300'>AWS</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaGitlab className='text-orange-600' />
          <span className='text-[12px] dark:text-gray-300'>GitLab</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <RiNextjsFill className='text-black dark:text-white' />
          <span className='text-[12px] dark:text-gray-300'>Next JS</span>
        </div>
      </div>
      <ScrollTop target="window" behavior='smooth' className="w-1rem h-1rem border-round-md bg-blue-500 text-white" icon={<FaArrowUp/>} />
    </>
  );
};

export default Proficient;
