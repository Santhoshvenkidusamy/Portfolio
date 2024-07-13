import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { CiCalendar } from "react-icons/ci";
import { MdCircle } from "react-icons/md";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';        
import 'primeicons/primeicons.css';                       

const TimeLineEducation = ({ events, alignment }) => {
    
    const customizedMarker = (item) => {
        return (
            item?.degree &&(
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 mt-2" style={{ color: item.color }}>
                <MdCircle className='text-blue-600'/>
            </span>
            )
        );
    };

    const customizedContent = (item) => {
        return (
            item?.degree &&(
            <div className=' mt-1'>
                <div className='text-[15px] font-bold text-gray-800 mb-1'>{item?.degree}</div>
                <div className='text-[13px] font-medium text-gray-700 mb-2'>{item?.school}</div>
                <div className='text-[12px] text-gray-600 flex  items-center justify-end'>
                    <CiCalendar className='mr-2 text-blue-600' />
                   <span>{item?.date}</span>
                </div>
                <div className='text-[13px] font-medium text-gray-800 mt-3'>{item?.cgpa}</div>
            </div>
            )
        );
    };
        
    return (
        <div className="flex justify-center items-center p-4">
            <Timeline value={events} align={alignment} className="" marker={customizedMarker} content={customizedContent} />
        </div>
    );
}

export default TimeLineEducation;
