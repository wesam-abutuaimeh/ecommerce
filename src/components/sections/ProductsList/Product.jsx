"use client";
import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import useAPI from '@/hooks/useAPI'
import { END_POINTS } from '@/constants/endPoints'
import CustomImage from '@/components/atoms/CustomImage';
import Button from '@/components/atoms/Button';
import { StyledProductContainer, StyledProduct } from './style';

const ProductsList = (searchParams) => {
    const { title } = searchParams;
    const urlParams = {
        title,
    };
    const searchQuery = queryString.stringify(urlParams);

    const { get, data } = useAPI(`${END_POINTS.PRODUCTS}?${searchQuery}`);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(4);
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const displayProducts = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const [isGrid, setIsGrid] = useState(false);

    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledProductContainer>
            <div className='icons'>
                <div onClick={() => { setIsGrid(true) }}>
                    <CustomImage src="/btn-group.png" alt="show products as flex" width="38" height="40" />
                </div>
                <div onClick={() => { setIsGrid(false) }}>
                    <CustomImage src="/table_rows.svg" alt="show products as Grid" width="24" height="24" />
                </div>
            </div>
            <StyledProduct className={isGrid === true ? "active" : "products"}>
                {console.log(isGrid)}
                {displayProducts.map((product) => {
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

                <div className="pagination">
                    <select onChange={(e) => { setItemPerPage(e.target.value) }}>
                        <option value="4">Show 4</option>
                        <option value="5">Show 5</option>
                        <option value="10">Show 10</option>
                    </select>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6446 5.36644C14.1708 4.87785 13.4055 4.87785 12.9317 5.36644L7.35535 11.1168C6.88155 11.6054 6.88155 12.3946 7.35535 12.8832L12.9317 18.6336C13.4055 19.1221 14.1708 19.1221 14.6446 18.6336C15.1185 18.145 15.1185 17.3557 14.6446 16.8671L9.9309 11.9937L14.6446 7.13289C15.1185 6.6443 15.1063 5.84251 14.6446 5.36644Z" fill="#8B96A5" />
                        </svg>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) =>
                        <button key={index} onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}>{index + 1}</button>
                    )}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.35535 5.36831C7.88155 5.85729 7.88155 6.64716 8.35535 7.13614L13.0691 12.0008L8.35535 16.8654C7.88155 17.3544 7.88155 18.1443 8.35535 18.6333C8.82916 19.1222 9.59453 19.1222 10.0683 18.6333L15.6446 12.8784C16.1185 12.3895 16.1185 11.5996 15.6446 11.1106L10.0683 5.35577C9.60668 4.87934 8.82916 4.87934 8.35535 5.36831Z" fill="#1C1C1C" />
                        </svg>
                    </button>
                </div>
            </StyledProduct>
        </StyledProductContainer>
    )
}

export default ProductsList;
