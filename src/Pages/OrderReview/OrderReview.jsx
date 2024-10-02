import React, { useContext, useEffect, useState } from 'react';
import ProcessBanner from '../Shared/ProcessBanner/ProcessBanner';
import { AuthContext } from '../../providers/AuthProvider';
import { IoCloseCircleSharp } from "react-icons/io5";
import OrderReviewCard from './OrderReviewCard';
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiArrowBendUpLeftThin } from "react-icons/pi";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {

    const bannerTitle = { name: 'Cart Details' }
    const { user } = useContext(AuthContext);
    // console.log(user)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();



    const url = `https://car-doctor-server-ten-virid.vercel.app/orders?email=${user.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setOrders(data)
                }
                else{
                    navigate('/')
                }
            })
    }, []);


    const handleDeleteOrder = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF3811",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-ten-virid.vercel.app/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0){
                            const remaining = orders.filter(order => order._id !== id);
                            setOrders(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                confirmButtonColor: '#FF3811'
                            });
                        }
                    })

            }
        });
    }

    const handleupdateOrder = (id) =>{
        fetch(`https://car-doctor-server-ten-virid.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'approved'})
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(order=> order._id !== id);
                const updated = orders.find(order=> order._id === id);
                updated.status = "approved";
                const newOrder = [updated, ...remaining];
                setOrders(newOrder);
            }
        })
    }   



    return (
        <div>
            <ProcessBanner bannerTitle={bannerTitle}></ProcessBanner>
            <div className='mb-28'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            {
                                orders.map(order => <OrderReviewCard
                                    key={order._id}
                                    order={order}
                                    handleDeleteOrder={handleDeleteOrder}
                                    handleupdateOrder={handleupdateOrder}
                                ></OrderReviewCard>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='grid grid-cols-4 w-[90%] mx-auto mt-7'>
                    <button className='flex items-center col-start-1 text-xl gap-5'><PiArrowBendUpLeftThin className='text-3xl ml-5'/>Continue Shopping</button>
                    <button className='flex items-center col-start-4 text-xl gap-5'><RiDeleteBin6Line />Clear Shopping Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;