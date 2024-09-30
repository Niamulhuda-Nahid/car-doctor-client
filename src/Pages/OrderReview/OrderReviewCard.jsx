import React from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";


const OrderReviewCard = ({ order, handleDeleteOrder, handleupdateOrder }) => {
    const { displayName, img, price, date, service, _id, status } = order;

    return (
        <tr>
            <th className='w-16'>
                <button onClick={() => handleDeleteOrder(_id)} className='text-4xl '>
                    <IoCloseCircleSharp />
                </button>
            </th>
            <td>
                <div className="flex items-center gap-5">
                    <div className="avatar">
                        <div className="w-20 rounded relative">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                            <div className='bg-[#15151562] absolute inset-0'></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-semibold mb-2">{displayName}</div>
                        <div className="text-sm opacity-50">{service}</div>
                    </div>
                </div>
            </td>
            <td className='text-xl font-semibold'>{price}</td>
            <td className='text-xl font-medium'>{date}</td>
            <th>
                {status === 'approved' ?
                    <span className="text-xl font-semibold py-2 px-4 rounded-md text-[#29B170] border border-[#29B170]">Approved</span> :
                    <button onClick={() => handleupdateOrder(_id)} className="text-xl font-semibold py-2 px-4 bg-[#FF3811] rounded-md text-white">Pending</button>}
            </th>
        </tr>
    );
};

export default OrderReviewCard;