import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-ten-virid.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='my-28'>
            <div className='text-center space-y-2 md:space-y-5'>
                <h1 className='text-xl font-bold text-[#FF3811]'>Service</h1>
                <h1 className=" md:text-3xl lg:text-5xl font-bold">Our Service Area</h1>
                <p className='w-[90%] md:w-4/5 lg:w-[55%] capitalize mx-auto text-slate-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 place-items-center px-4 md:px-0 lg:px-0'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden text-lg font-semibold transition-all border border-[#FF3811] rounded hover:bg-[#FF3811] group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-[#FF3811] transition-colors duration-500 ease-in-out group-hover:text-white">More Services</span>
                </a>
            </div>
        </div>
    );
};

export default Service;