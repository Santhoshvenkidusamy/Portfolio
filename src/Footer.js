import React from 'react';
import footer from '../src/Images/foot.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 mx-10 mt-10'>
        <div className='text-center md:text-left'>
          <div className='text-[14px]'>No copyright issues.</div>
          <div className='text-[12px] text-gray-500'>Feel free to copy. If you need any help, ping me!</div>
        </div>
        <div className='flex justify-center font text-blue-500 text-[20px] sm:my-4 md:my-0'>Santhosh Venkidusamy</div>
        <div className='flex justify-center md:justify-end space-x-4'>
          <a href="https://www.linkedin.com/in/santhoshvenkidusamy" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/santhoshvenkidusamy" target="_blank" rel="noopener noreferrer" className="text-gray-900">
            <FaGithub size={24} />
          </a>
          <a href="mailto:santhoshvenkidusamy@gmail.com" className="text-red-600">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className='h-30 w-full flex justify-center items-center mt-4'>
        <img src={footer} alt="Footer" />
      </div>
    </>
  );
}

export default Footer;
