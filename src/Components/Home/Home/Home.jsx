import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import Service from '../../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Service></Service>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;