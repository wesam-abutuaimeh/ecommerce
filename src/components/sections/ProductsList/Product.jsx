"use client";
import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import useAPI from '@/hooks/useAPI'
import { END_POINTS } from '@/constants/endPoints'
import CustomImage from '@/components/atoms/CustomImage';
import Button from '@/components/atoms/Button';
import { StyledProduct } from './style';

const ProductsList = (searchParams) => {
    const { title } = searchParams;
    const urlParams = {
        title,
    };
    const searchQuery = queryString.stringify(urlParams);

    const { get, data } = useAPI(`${END_POINTS.PRODUCTS}?${searchQuery}`);
    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledProduct>
            <div className='icons'>
                <div>
                    <CustomImage src="/btn-group.png" alt="show products as flex" width="38" height="40" />
                </div>
                <div>
                    <CustomImage src="/table_rows.svg" alt="show products as Grid" width="24" height="24" />
                </div>
            </div>

            {data.map((product) => {
                return <div className="product" key={product.id}>
                    <div className='img__holder' style={{ position: 'relative', width: "184px", height: "184px" }}>
                        <CustomImage src={product.imgSrc} alt={product.title} fill={true} objectFit="contain" />
                    </div>
                    <div>
                        <p className='title'>{product.title}</p>
                        <div className='price'>
                            <span>{product.priceAfterDiscount}</span>
                            <del>{product.priceBeforeDiscount}</del>
                        </div>
                        <div className='rating'>
                            {Math.trunc(product.ratingInStar) === 5 ? <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg> : Math.trunc(product.ratingInStar) === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg> : Math.trunc(product.ratingInStar) === 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg> : Math.trunc(product.ratingInStar) === 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg> : "Product Not Rated So Far"}
                            <span className='rating__number'>{product.ratingInNumber}</span>
                            <span className='orders__count'>
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3" r="3" fill="#E3E8EE" />
                                </svg>
                                {product.ordersCount} orders</span>
                            <span className='shipping'>
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3" r="3" fill="#E3E8EE" />
                                </svg>
                                Free Shipping
                            </span>
                        </div>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <Button width="94px" height="19px" bgColor="#ffffff" color="#0D6EFD"> View details</Button>
                    </div>
                </div>

            })}

        </StyledProduct>
    )
}

export default ProductsList;
