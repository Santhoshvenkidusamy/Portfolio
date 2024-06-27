import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { CiCalendar } from "react-icons/ci";
import { MdCircle } from "react-icons/md";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';        
import 'primeicons/primeicons.css';                       

const  TimeLine = ({ events, alignment }) =>{
    
    const customizedMarker = (item) => {
        return (
            item?.status &&(
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 mt-2" style={{ color: item.color }}>
                <MdCircle className='text-blue-600'/>
            </span>
        )
        );
    };

    const customizedContent = (item) => {
        return (
            item?.status &&(
            <div className='mt-2'>
                <div className='text-[15px] font-semibold text-gray-800'>{item?.status}</div>
                <div className='text-[13px] font-semibold text-gray-500 mt-1'>{item?.company}</div>
                <div className='text-[12px] text-gray-500 flex items-center justify start mt-2'>
                    <CiCalendar className='' />
                    <span className='ml-1'>{item?.date}</span>
                </div>
                <div className='mt-4 space-y-2'>
                    {item?.details.map((detail, index) => (
                        <div key={index} className='flex items-start'>
                            <span className='mr-2 text-blue-600'>•</span>
                            <span className='text-gray-700 text-[15px]'>{detail?.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            )
        );
    
    };
        
    return (
        <div className="flex justify-center items-center p-4  min-h-screen">
            <Timeline value={events} align={alignment} className="" marker={customizedMarker} content={customizedContent} />
            
        </div>
    );
}
export default TimeLine;