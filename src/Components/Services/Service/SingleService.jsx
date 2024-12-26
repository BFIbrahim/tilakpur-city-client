import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {

    const {title, image} = service
    console.log(service)
    return (
        <Link to="/developer">
            <div className='text-center font-bold shadow-[-1px_3px_20px_-13px_rgba(0,_0,_0,_0.8)] p-8 rounded-xl'>
                <img className='w-20 h-20 md:w-32 md:h-32 mx-auto' src={image} alt="" />
                <h3 className='mt-2'>{title}</h3>
            </div>
        </Link>
    );
};

export default SingleService;