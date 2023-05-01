/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const News = () => {

    const news = useLoaderData()
    const { author, details, category_id, image_url, title, thumbnail_url, rating, total_view, _id } = news;
    return (
        <div className='mt-5'>
            <h2 className='mb-4 fs-4 fw-semibold'>Dragon News Home</h2>
            <div className="card">
                <img src={image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{details} </p>
                    <Link to={`/category/${category_id}`} className="btn btn-danger"> <FaArrowLeft className='text-center me-2'></FaArrowLeft> All News in this category</Link>
                </div>
            </div>
        </div>
    )
}

export default News;