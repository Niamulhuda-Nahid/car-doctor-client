import React from 'react';
import { FaArrowRight } from "react-icons/fa6"
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service;
    return (
        <div className="card card-compact bg-base-100 w-96 border rounded-lg">
            <figure className='h-full'>
                <img
                    src={img}
                    className='p-4 h-full'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className='flex  items-center text-[#FF3811] text-xl font-semibold'>
                    <p className=''>Price : ${price}</p>
                    <Link to={`/service/${_id}`}>
                        <button className='flex justify-end'><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;