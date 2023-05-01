/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='container w-50 bg-white mt-5 rounded text-center p-5'>
            <h2>Login Your Account</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" />
            </div>

        </div>
            );
};

export default Login;