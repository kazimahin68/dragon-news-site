/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <div style={{backgroundColor: "#f3f3f3"}} className='vh-100'>
            <NavigationBar LoginLayout={true}></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;