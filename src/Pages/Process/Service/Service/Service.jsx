import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FacilityCard from './facilityCard';
import vidImg from '../../../../assets/images/banner/2.jpg'
import { FiPlayCircle } from "react-icons/fi";
import ProcessBanner from '../../../Shared/ProcessBanner/ProcessBanner';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import logo from '../../../../assets/logo.svg'

const Service = () => {
    const loadedData = useLoaderData();
    const [services, setServices] = useState([]);

    const { _id, img, description, facility, title, price } = loadedData;
    const bannerTitle = { name: 'Service Details' }


    useEffect(() => {
        fetch('https://car-doctor-server-ten-virid.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return (
        <div>
            <ProcessBanner bannerTitle={bannerTitle}></ProcessBanner>
            <div className='grid grid-cols-11 gap-5 mb-28'>
                <div className='col-span-8'>
                    <div className='w-full relative'>
                        <img src={img} className='w-full h-[400px] rounded-md' alt="" />
                        <div className='absolute inset-0 bg-[#15151581] rounded-md'></div>
                    </div>
                    <h3 className='text-4xl font-bold my-10'>Unique Car Engine Service</h3>
                    <p className='text-slate-600 tracking-wide mb-7 capitalize'>{description}</p>
                    <div className='grid grid-cols-2 gap-6'>
                        {
                            facility.map((facilityInfo, idx) => <FacilityCard
                                key={idx}
                                facilityInfo={facilityInfo}
                            ></FacilityCard>)
                        }
                    </div>
                    <p className='text-slate-600 tracking-wide mt-7 capitalize'>{description}</p>
                    <h3 className='text-4xl font-bold mt-10'>3 Simple Steps to Process</h3>
                    <p className='text-slate-600 tracking-wide my-7 capitalize'>{description}</p>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='py-10 px-5 border rounded-lg flex flex-col  items-center'>
                            <h2 className='px-4 py-3 bg-[#FF3811] rounded-full font-bold text-xl text-white border-[10px] border-[#f8d7d0]'>01</h2>
                            <p className='text-xl font-bold mt-4 mb-3 uppercase'>Step One</p>
                            <p className='text-slate-400 w-[70%] text-center capitalize'>It uses a dictionary of over 200 .</p>
                        </div>
                        <div className='py-10 px-5 border rounded-lg flex flex-col  items-center'>
                            <h2 className='px-3.5 py-3.5 bg-[#FF3811] rounded-full font-bold text-xl text-white border-[10px] border-[#f8d7d0]'>02</h2>
                            <p className='text-xl font-bold mt-4 mb-3 uppercase'>Step Two</p>
                            <p className='text-slate-400 w-[70%] text-center capitalize'>It uses a dictionary of over 200 .</p>
                        </div>
                        <div className='py-10 px-5 border rounded-lg flex flex-col  items-center'>
                            <h2 className='px-3.5 py-3.5 bg-[#FF3811] rounded-full font-bold text-xl text-white border-[10px] border-[#f8d7d0]'>03</h2>
                            <p className='text-xl font-bold mt-4 mb-3 uppercase'>Step Three</p>
                            <p className='text-slate-400 w-[70%] text-center capitalize'>It uses a dictionary of over 200 .</p>
                        </div>
                    </div>
                    <div className='w-full mt-7 relative'>
                        <img src={vidImg} className='w-full h-[400px] rounded-lg' alt="" />
                        <p className='absolute inset-0 flex justify-center items-center text-7xl text-[#FF3811]'><FiPlayCircle /></p>
                    </div>
                </div>
                {/* right side */}
                <div className='col-span-3'>
                    <div className='bg-slate-100 p-10 rounded-md'>
                        <h2 className='text-2xl font-bold mb-5'>Services</h2>
                        <div>
                            {
                                services.map(service => <div
                                    key={service._id}
                                    className='flex items-center justify-between   border-[#FF3811] mb-5'
                                >
                                    <Link to={`/service/${service._id}`} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group w-64 border border-[#FF3811]">
                                        <span className="w-80 h-96 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex items-center justify-between"><p>{service.title}</p>
                                            <FaArrowRightLong /></span>
                                    </Link>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='bg-stone-950 p-10 rounded-md text-white my-7'>
                        <h2 className='text-2xl font-bold mb-5'>Download</h2>
                        <div className='flex items-center gap-3'>
                            <IoDocumentTextOutline className='text-3xl' />
                            <div className='flex-1'>
                                <h2 className='text-lg font-semibold'>Our Brochure</h2>
                                <p className='text-gray-500'>Download</p>
                            </div>
                            <p className='text-lg bg-[#FF3811] p-3 rounded-md'><FaArrowRightLong /></p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <IoDocumentTextOutline className='text-3xl' />
                            <div className='flex-1'>
                                <h2 className='text-lg font-semibold'>Company Details</h2>
                                <p className='text-gray-500'>Download</p>
                            </div>
                            <p className='text-lg bg-[#FF3811] p-3 rounded-md'><FaArrowRightLong /></p>
                        </div>
                    </div>

                    <div className='bg-stone-950 p-10 rounded-md '>
                        <div className='flex justify-center'>
                            <img src={logo} alt="" />
                        </div>
                        <h3 className='text-center text-xl font-bold mt-5 mb-7 leading-9 text-white'>Need Help? We Are Here To Help You</h3>
                        <div className='bg-white p-8 pb-10 text-center rounded-md relative mb-7'>
                            <p className='text-xl font-bold '><span className='text-[#FF3811]'>Car Doctor</span> Special</p>
                            <p className='font-bold mt-3'>Save up to <span className='text-[#FF3811]'>60% off</span></p>
                            <div className='absolute inset-y-[80%] inset-x-[10%]'>
                                <button className='bg-[#FF3811] py-3 px-6 text-lg font-semibold text-white rounded-md'>Get A Quote</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <p className='text-4xl font-bold mb-9'>Price ${price}</p>
                        <div className='flex justify-center'>
                            <Link to={`/checkOut/${_id}`} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group w-[279px] border border-[#FF3811]">
                                <span className="w-80 h-96 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white text-center"><p>Proceed Checkout</p></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;