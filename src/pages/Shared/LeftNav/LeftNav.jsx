/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error =>{
            console.log(error)
        })
    }, [])
    return (
        <div className='mt-5' style={{color: "#403F3F"}}>
            <h2 className='fs-5 fw-semibold mb-5'>All Category</h2>
            {
                categories.map(category => <p key={category.id}><Link className='text-decoration-none text-secondary fs-5 dn-bg-color p-2 rounded text-wrap' to={`/category/${category.id}`} >{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;