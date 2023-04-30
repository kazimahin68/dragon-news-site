/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
    return (
        // <Navbar bg="light" expand="lg" className='mt-4 rounded container'>
        //     <Container className='d-flex align-items-center justify-content-center'>
        //         <div className='d-flex'>
        //             <div className='flex-grow-1'>
        //                 <Link className='text-decoration-none text-black me-4' to="/">Home</Link>
        //                 <Link className='text-decoration-none text-black me-4' to="/">About</Link>
        //                 <Link className='text-decoration-none text-black' to="/">Career</Link>
        //             </div>
        //         </div>
        //         <div className=''>
        //             <FaUserCircle style={{ width: "40px", height: "40px" }}></FaUserCircle>
        //         </div>
        //     </Container>
        // </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-4 rounded'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-black me-4' to="/">Home</Link>
                        <Link className='text-decoration-none text-black me-4' to="/">About</Link>
                        <Link className='text-decoration-none text-black' to="/">Career</Link>
                    </Nav>
                    <Nav className='d-flex justify-content-center align-items-center'>
                        <FaUserCircle style={{ width: "40px", height: "40px" }}></FaUserCircle>
                        <Nav.Link eventKey={2} href="#memes">
                            <Button variant='secondary' className='fs-6 fw-semibold'>Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;