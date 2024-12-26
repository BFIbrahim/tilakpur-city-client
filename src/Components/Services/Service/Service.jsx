import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';
import { Navigation } from 'swiper/modules';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 mt-14'>
            {
                services.map(service => <SingleService
                    key={service.id}
                    service={service}
                ></SingleService>)
            }
        </div>
    );
};

export default Service;