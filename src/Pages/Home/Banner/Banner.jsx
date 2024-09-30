import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full h-[630px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={img5}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center inset-0 gap-5 bg-gradient-to-r from-[#151515e8] to-[#15151500] rounded-xl">
                    <div className='space-y-7 text-white pl-4 md:pl-16'>
                        <div className='md:w-[50%] lg:w-[40%]'>
                            <h1 className='text-4xl md:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        </div>
                        <p className='text-lg text-slate-200 w-4/5 md:w-[60%] lg:w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Discover More</span>
                            </a>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Latest Project</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-2  flex justify-end  gap-5 -translate-y-1/2 transform ">
                    <a href="#slide4" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowLeft /></a>
                    <a href="#slide2" className=" bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center inset-0 gap-5 bg-gradient-to-r from-[#151515e8] to-[#15151500] rounded-xl">
                    <div className='space-y-7 text-white pl-4 md:pl-16'>
                        <div className='md:w-[50%] lg:w-[40%]'>
                            <h1 className='text-4xl md:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        </div>
                        <p className='text-lg text-slate-200 w-4/5 md:w-[60%] lg:w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Discover More</span>
                            </a>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Latest Project</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-2  flex justify-end  gap-5 -translate-y-1/2 transform">
                    <a href="#slide1" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowLeft /></a>
                    <a href="#slide3" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className='w-full rounded-xl' />
                <div className="absolute flex items-center inset-0 gap-5 bg-gradient-to-r from-[#151515e8] to-[#15151500] rounded-xl">
                    <div className='space-y-7 text-white pl-4 md:pl-16'>
                        <div className='md:w-[50%] lg:w-[40%]'>
                            <h1 className='text-4xl md:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        </div>
                        <p className='text-lg text-slate-200 w-4/5 md:w-[60%] lg:w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Discover More</span>
                            </a>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Latest Project</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-2  flex justify-end  gap-5 -translate-y-1/2 transform">
                    <a href="#slide2" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowLeft /></a>
                    <a href="#slide4" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowRight /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className='w-full rounded-xl' />
                <div className="absolute flex items-center inset-0 gap-5 bg-gradient-to-r from-[#151515e8] to-[#15151500] rounded-xl">
                    <div className='space-y-7 text-white pl-4 md:pl-16'>
                        <div className='md:w-[50%] lg:w-[40%]'>
                            <h1 className='text-4xl md:text-6xl font-bold '>Affordable Price For Car Servicing</h1>
                        </div>
                        <p className='text-lg text-slate-200 w-4/5 md:w-[60%] lg:w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Discover More</span>
                            </a>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-transparent border border-stone-200 hover:border-[#FF3811] rounded hover:bg-[#FF3811] group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Latest Project</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute right-10 bottom-2  flex justify-end  gap-5 -translate-y-1/2 transform">
                    <a href="#slide3" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowLeft /></a>
                    <a href="#slide1" className="bg-[#afacac9a] hover:bg-[#FF3811] text-white text-2xl p-4 rounded-full duration-200"><FaArrowRight /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;