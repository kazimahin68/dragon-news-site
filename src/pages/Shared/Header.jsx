/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='text-center mt-4'>
            <img src={logo} alt="" />
            <p style={{ color: '#706F6F' }} className='mt-2'>Journalism Without Fear or Favour</p>
            <p style={{ color: '#706F6F' }} className='fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>

            <div className='d-flex p-3 rounded mt-5' style={{backgroundColor: "#F3F3F3"}}>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover={true} speed={75} className='fs-5 number-0' style={{color: "#403F3F"}}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>

    );
};

export default Header;