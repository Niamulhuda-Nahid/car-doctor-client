import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import ProcessBanner from '../Pages/Shared/ProcessBanner/ProcessBanner';

const ProcessLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-5'>
                <Navbar></Navbar>
                <ProcessBanner></ProcessBanner>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default ProcessLayout;