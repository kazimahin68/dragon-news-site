/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithubSquare, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

import image1 from '../../../assets/qZone1.png'
import image2 from '../../../assets/qZone2.png'
import image3 from '../../../assets/qZone3.png'
import Banner from '../Banner/Banner';

const RightNav = () => {
    return (
        <div className='mt-5'>
            <div>
                <h2 className='fw-semibold fs-5 mb-3'>Login With</h2>
                <Button className='text-primary mb-2 w-100' variant="outline-success"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='w-100 text-secondary' variant="outline-secondary"><FaGithubSquare></FaGithubSquare> Login with Github</Button>
            </div>
            <div className='mt-4'>
                <h2 className='fw-semibold fs-5 mb-3'>Find Us On</h2>
                <ListGroup >
                    <ListGroup.Item className='text-secondary fs-5'><FaFacebook className='text-primary me-2'></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='text-secondary fs-5'><FaTwitter className='text-primary me-2'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-secondary fs-5'><FaInstagram className='text-danger me-2' ></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4 bg-light p-3 rounded'>
                <h2 className='fw-semibold fs-5 mb-3'>Q-Zone</h2>
                <div>
                    <img className='w-100' src={image1} alt="" />
                    <img className='w-100' src={image2} alt="" />
                    <img className='w-100' src={image3} alt="" />
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default RightNav;