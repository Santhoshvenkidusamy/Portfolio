import React, { useState } from 'react';
import profile from '../src/Images/profile.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import download from'../src/Images/dwnld.gif';
const About = () => {
  const [show, setShow] = useState(false);
  const handleDownload = () =>{
    setShow(true)
  }
  return (
    <>
            <div className='flex flex-col items-center m-4 pt-24'>
                <div className='text-[30px] text-black dark:text-slate-200 dark:hover:text-blue-500'>About</div>
                <div className='text-[12px] text-gray-500 dark:text-gray-300 dark:hover:text-blue-500'>My Introduction</div>
            </div>
    <div className="flex flex-col items-center m-4 p-4 lg:flex-row lg:justify-center xl:mx-48 space-y-4 lg:space-y-0 lg:space-x-14">
      <div className="flex flex-col items-center lg:w-1/3 space-y-4">
        <img src={profile} className="lg:w-64 lg:h-64 w-52 h-52 " style={{borderRadius:'9.5rem'}}alt="Profile" />
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/santhoshvenkidusamy" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/santhoshvenkidusamy" target="_blank" rel="noopener noreferrer" className="text-gray-900">
            <FaGithub size={32} />
          </a>
          <a href="mailto:santhoshvenkidusamy@gmail.com" className="text-red-600">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="space-y-4  text-slate-700 dark:text-slate-300 text-[15px]">
          <p>
            Hi, I'm Santhosh, a recent B.Tech graduate in Information Technology and a passionate web developer.
          </p>
          <p>
            I thrive on collaboration and enjoy working with cross-functional teams to bring innovative ideas to life. I'm always eager to stay up-to-date with the latest trends and best practices in front-end development, and I'm constantly seeking opportunities to learn and grow.
          </p>
        </div>
        </div>
      </div>
      </>
  );
}

export default About;
