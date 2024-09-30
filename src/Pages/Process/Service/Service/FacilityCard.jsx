import React from 'react';

const FacilityCard = ({facilityInfo}) => {
    const {name, details} = facilityInfo;

    return (
        <div className='bg-slate-100 p-10 border-t-4 border-[#FF3811] rounded-xl'>
            <h1 className='text-xl font-bold mb-3'>{name}</h1>
            <p className='text-base text-slate-400 leading-7'>{details}</p>
        </div>
    );
};

export default FacilityCard;