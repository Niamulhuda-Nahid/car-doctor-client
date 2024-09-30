import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-28">
            <div className="hero-content items-start flex-col-reverse md:flex-row lg:flex-row p-0">
                <div className='md:w-1/2 relative'>
                    <img
                        src={person}
                        className="w-4/5 md:h-[430px] rounded-lg shadow-2xl" />
                    <img
                        src={parts}
                        className="w-[65%] md:h-[300px] absolute right-5 -bottom-20 rounded-lg shadow-2xl border-[10px] border-white" />
                </div>
                <div className='md:w-1/2 mb-5 md:mb-0 lg:mb-0'>
                    <h1 className='text-xl font-bold text-[#FF3811] mb-5'>About Us</h1>
                    <h1 className=" md:text-3xl lg:text-5xl font-bold lg:w-3/5 mb-7">We are qualified & of experience in this field</h1>
                    <p className="mb-5 text-slate-500 lg:w-[75%] capitalize">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="text-slate-500 mb-7 lg:w-4/5 capitalize">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden text-lg font-semibold transition-all border border-[#FF3811] rounded hover:bg-[#FF3811] group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-[#FF3811] transition-colors duration-500 ease-in-out group-hover:text-white">Get More Info</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;