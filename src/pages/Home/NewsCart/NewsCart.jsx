/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { CiBookmark } from "react-icons/ci";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";

const NewsCart = ({ news }) => {

    const { author, details, category_id, image_url, title, thumbnail_url, rating, total_view, _id } = news;
    return (
        <div className='mt-5'>
            <Card className="text-start">
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-4'>
                            <Image style={{ height: "40px" }} className='img-fluid rounded-circle' src={author.img} alt="" />
                            <div>
                                <h3 className='fs-5 fw-semibold'> {author.name}</h3>
                                <p className='mb-0'>{moment(author?.published_date).format('yyyy-MM-DD')}</p>
                            </div>
                        </div>
                        <div>
                            <CiBookmark className='me-2' style={{ height: "24px", width: "24px" }}></CiBookmark>
                            <AiOutlineShareAlt style={{ height: "24px", width: "24px" }}></AiOutlineShareAlt>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='fw-bold fs-5 mb-2'>{title}</Card.Title>
                    <Image className='img-fluid mb-2' src={image_url} alt="" />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} <Link className='text-warning text-decoration-none fw-semibold' to={`/news/${_id}`}>Read More...</Link></>
                        }
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center gap-2">
                    <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <p className='m-0 mt-1'><small>{rating?.number}</small></p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;