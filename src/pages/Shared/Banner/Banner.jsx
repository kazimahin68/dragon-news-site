/* eslint-disable no-unused-vars */
import React from 'react';
import background from '../../../assets/bg.png'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='position-relative text-white text-center mt-4'>
            <img className='w-100 rounded' src={background} alt="" />
            <div className='position-absolute top-50 start-50 translate-middle'>
                <h2 className='fw-bold fs-3'>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default Banner;