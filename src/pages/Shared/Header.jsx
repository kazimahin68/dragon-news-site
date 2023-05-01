/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-4'>
            <img src={logo} alt="" />
            <p style={{ color: '#706F6F' }} className='mt-2'>Journalism Without Fear or Favour</p>
            <p style={{ color: '#706F6F' }} className='fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>

    );
};

export default Header;