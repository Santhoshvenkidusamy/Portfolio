import React from 'react'
import { Carousel } from 'primereact/carousel';
import Swiggy from '../src/Images/Swiggy.png'
import Netflix from '../src/Images/Netflix.png'
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
const Recommendation = () => {
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const products = [
            {
                
                name: 'Swiggy Clone',
                details: [
                    { description: "The project aimed to replicate the functionalities and user experience of the popular food delivery platform, using Swiggy's APIs to accessand display restaurant listings, menus, order processing, and delivery features.Technologies Used: React.js , Redux , Tailwind CSS " },
                ],
    
                image: Swiggy,
                
            },
            {
                name: 'Netflix GPT',
                details: [
                {description: 'Developed a custom AI-powered movie recommendation system, NetflixGPT, leveraging natural language processing techniques to provide personalized movie recommendations and enhance user experience. Technologies Used: React.js , Redux , Tailwind CSS',}
                ],
                image: Netflix,
            }
        ]
    
    const productTemplate = (products) => {
        return (
            <div className=" border-1 surface-border border-round  text-center ">
    <div className='flex justify-center flex-col items-start md:items-start md:ml-2'>
        <h4 className="mb-1"></h4>
        <div className="mt-0 mb-3 text-[18px]">{products.name}</div>
{products?.details?.map((detail, index) => (
    <div key={index} className='text-gray-700 text-[15px] align-baseline text-left mx-2 md:mx-0'>
        {detail?.description}
    </div>
))}
    </div>
</div>

        );
    };
  return (
    <div className=''>
        <div className='flex flex-col items-center m-4'>
        <div className='text-[24px]'>Recommendation</div>
        <div className='text-[12px] text-gray-500'>~via Linkedin Recommendations</div>
      </div>
      <Carousel value={products}  responsiveOptions={responsiveOptions} autoplayInterval={3000} nextIcon={'pi'} prevIcon={'pi'}className="custom-carousel mx-2 md:mx-10 lg:mx-20 mt-6" circular itemTemplate={productTemplate} />
    </div>
  )
}

export default Recommendation