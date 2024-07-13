import React, { useState } from 'react';
import { FaReact, FaHtml5, FaGitAlt, FaAws } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaGitlab } from 'react-icons/fa6';
import download from '../src/Images/dwnld.gif';
import dwnld from '../src/Images/dwnld.png';

const Proficient = () => {
  const [show, setShow] = useState(false);

  const handleDownload = () => {
    setShow(true);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-2'>
      <div className='text-[24px] text-gray-500'>Download My Resume</div>
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
        <div className='text-[24px]'>Skills</div>
        <div className='text-[12px] text-gray-500'>Proficient in ~</div>
      </div>
      <div className='flex flex-wrap items-center justify-center text-[32px]'>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaReact className='text-blue-600' />
          <span className='text-[12px]'>React</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <BiLogoMongodb className='text-green-600' />
          <span className='text-[12px]'>Mongo DB</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <RiJavascriptFill className='text-yellow-600' />
          <span className='text-[12px]'>JavaScript</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaHtml5 className='text-red-600' />
          <span className='text-[12px]'>HTML</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <RiTailwindCssFill className='text-blue-600' />
          <span className='text-[12px]'>Tailwind Css</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaGitAlt className='text-black' />
          <span className='text-[12px]'>Git</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaAws className='text-blue-600' />
          <span className='text-[12px]'>AWS</span>
        </div>
        <div className='flex flex-col items-center mx-8 m-3'>
          <FaGitlab className='text-orange-600' />
          <span className='text-[12px]'>GitLab</span>
        </div>
      </div>
    </>
  );
};

export default Proficient;
