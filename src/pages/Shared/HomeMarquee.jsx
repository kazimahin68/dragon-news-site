/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
    return (
        <div className='d-flex p-3 rounded mt-5 container' style={{ backgroundColor: "#F3F3F3" }}>
            <Button variant="danger">Latest</Button>
            <Marquee pauseOnHover={true} speed={75} className='fs-5 number-0' style={{ color: "#403F3F" }}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default HomeMarquee;