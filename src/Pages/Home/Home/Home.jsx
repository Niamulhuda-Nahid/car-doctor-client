import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import ShortInfo from '../ShortInfo/ShortInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <ShortInfo></ShortInfo>
        </div>
    );
};

export default Home;