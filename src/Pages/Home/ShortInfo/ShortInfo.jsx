import React from 'react';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ShortInfo = () => {
    return (
        <div className='bg-stone-950 mb-28 rounded-lg'>
            <div className='py-10 md:py-20 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-5'>
                <div className='text-white flex items-center justify-start md:justify-center lg:justify-start gap-3'>
                    <MdOutlineCalendarMonth className='text-5xl text-[#FF3811]'/>
                    <div>
                        <p className='text-xs md:text-base font-normal md:font-medium'>We are open monday-friday</p>
                        <p className='text-base md:text-2xl font-bold mt-2'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='text-white flex items-center gap-4 justify-start md:justify-center col-span-2 md:col-auto'>
                    <FaPhoneAlt className='text-4xl text-[#FF3811] '/>
                    <div>
                        <p className='text-xs md:text-base font-normal md:font-medium'>Have a question?</p>
                        <p className='text-base md:text-2xl font-bold mt-2'>+2546 251 2658</p>
                    </div>
                </div>
                <div className='text-white flex items-center justify-start md:justify-center lg:justify-end gap-3 col-span-2 lg:col-auto'>
                    <MdLocationOn className='text-5xl text-[#FF3811]'/>
                    <div>
                        <p className='text-xs md:text-base font-normal md:font-medium'>Need a repair? our address</p>
                        <p className='text-base md:text-2xl font-bold mt-2'>Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortInfo;