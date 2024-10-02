import React, { useContext } from 'react';
import ProcessBanner from '../../Shared/ProcessBanner/ProcessBanner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const bannerTitle = { name: 'Check Out' }
    const loadedData = useLoaderData();
    const {img, _id, title, service_id, price } = loadedData;
    console.log(loadedData)

    const handleAddOrder =event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const number = form.number.value;
        const email = form.email.value;
        const message = form.message.value;

        const bookingOrder = {
            displayName: name,
            date,
            number,
            email,
            message,
            service_id,
            service: title,
            img,
            price
        }

        fetch(`https://car-doctor-server-ten-virid.vercel.app/orders`, {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Order confirm successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#FF3811'
                  });
            }
        })

    }

    return (
        <div className='mb-28'>
            <ProcessBanner bannerTitle={bannerTitle}></ProcessBanner>
            <div className='bg-slate-100 p-20 rounded-lg'>
                <form onSubmit={handleAddOrder} className="">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input" required />
                        </div>
                        <div className="form-control">
                            <input type="date" name='date' placeholder="Date" className="input " required />
                        </div>
                        <div className="form-control">
                            <input type="number" name='number' placeholder="Your Phone" className="input" required />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input " required />
                        </div>
                    </div>
                    <div className="form-control">
                        <input type="text" name='message' placeholder="Your Message" className="input mt-6 h-40" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className='py-3 rounded-md text-xl font-semibold text-white bg-[#FF3811] tracking-wide	'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;