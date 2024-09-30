import React from 'react';
import bg from '../../../assets/images/checkout/checkout.png';

const ProcessBanner = ({bannerTitle}) => {
    

    return (
        <div className='w-full relative mb-28'>
            <img src={bg} className='w-full' alt="" />
            <div className='absolute inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl'>
                <h1 className='text-white text-4xl md:text-5xl font-bold pl-4 md:pl-16'>{bannerTitle.name}</h1>
            </div>
            <div className='absolute inset-0 flex justify-center items-end'>
                <button className='text-white text-xl font-medium py-3 px-7  bg-[#FF3811] rounded-tl-md rounded-tr-md'>Home/{bannerTitle.name}</button>
            </div>
        </div>
    );
};

export default ProcessBanner;