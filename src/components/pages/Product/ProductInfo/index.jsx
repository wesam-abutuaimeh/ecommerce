"use client";
import React, { useEffect } from 'react';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/endPoints';
import Avatar from '@/components/atoms/Avatar';
import Button from '@/components/atoms/Button';
import CustomImage from '@/components/atoms/CustomImage';
import { H1 } from '@/components/atoms/Typography/style';
import { Container } from '@/styles/commen';
import { StyledProductInfo } from './style';

const ProductImages = ({ data }) => (
    <div className='images'>
        {data.map((product) => (
            <div className='product-images' key={product.id}>
                <div className='main__image' style={{ position: "relative", width: "345px", height: "345px" }}>
                    <CustomImage src={product.mainImage} fill="true" objecFit="contain" />
                </div>
                <div className='sub__images'>
                    {product.images.slice(0, 5).map((image, index) => (
                        <CustomImage key={index} src={image} width="49" height="49" />
                    ))}
                </div>
            </div>
        ))}
        <div>
        </div>
    </div>
);

const ProductDetails = ({ data }) => (
    <div className='details'>
        {data.map((product) => (
            <div key={product.id}>
                <H1>{product.title}</H1>
                <div className='ratings'>
                    <svg width="80" height="15" viewBox="0 0 80 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path filRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5" />
                        <path filRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017" />
                        <path filRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017" />
                        <path filRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017" />
                        <path filRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017" />
                    </svg>
                    <span>{product.rating}</span>
                </div>
                <div className='reviews'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33317 3.33329H16.6665V13.3333H4.30817L3.33317 14.3083V3.33329ZM3.33317 1.66663C2.4165 1.66663 1.67484 2.41663 1.67484 3.33329L1.6665 18.3333L4.99984 15H16.6665C17.5832 15 18.3332 14.25 18.3332 13.3333V3.33329C18.3332 2.41663 17.5832 1.66663 16.6665 1.66663H3.33317ZM4.99984 9.99996H14.9998V11.6666H4.99984V9.99996ZM4.99984 7.49996H14.9998V9.16663H4.99984V7.49996ZM4.99984 4.99996H14.9998V6.66663H4.99984V4.99996Z" fill="#8B96A5" />
                    </svg>
                    <span>{`${product.reviewsCount} reviews`}</span>
                </div>
                <div className='sold'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3335 7.90834H14.3418L10.6918 2.44167C10.5335 2.20834 10.2668 2.09167 10.0002 2.09167C9.7335 2.09167 9.46683 2.20834 9.3085 2.45001L5.6585 7.90834H1.66683C1.2085 7.90834 0.833496 8.28334 0.833496 8.74167C0.833496 8.81667 0.841829 8.89167 0.866829 8.96667L2.9835 16.6917C3.17516 17.3917 3.81683 17.9083 4.5835 17.9083H15.4168C16.1835 17.9083 16.8252 17.3917 17.0252 16.6917L19.1418 8.96667L19.1668 8.74167C19.1668 8.28334 18.7918 7.90834 18.3335 7.90834ZM10.0002 4.40834L12.3335 7.90834H7.66683L10.0002 4.40834ZM15.4168 16.2417L4.59183 16.25L2.7585 9.57501H17.2502L15.4168 16.2417ZM10.0002 11.2417C9.0835 11.2417 8.3335 11.9917 8.3335 12.9083C8.3335 13.825 9.0835 14.575 10.0002 14.575C10.9168 14.575 11.6668 13.825 11.6668 12.9083C11.6668 11.9917 10.9168 11.2417 10.0002 11.2417Z" fill="#8B96A5" />
                    </svg>
                    <span>{`${product.soldCount} sold`}</span>
                </div>
                <div className='prices'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index}>
                            <p>$90.00</p>
                            <span>100-700 pcs</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

const SupplierInfo = ({ data }) => (
    <div className='supplier__info'>
        {data.map((supplier) => (
            <div key={supplier.id}>
                <Avatar src="/avatar.png" alt="banner-board" width="48" height="48" p1="Supplier" p2="Guanjoi Trading LLC" />
                <div className='supplier'>
                    <ul>
                        <li>
                            <CustomImage src="/supplier.png" alt="supplier nationality flag" width="20" height="15" />
                            <span>{supplier.supplier.nationality}</span>
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z" fill="#8B96A5" />
                            </svg>
                            <span>{supplier.supplier.isVerified ? "Verified Seller" : "Not Verified Seller"}</span>
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.9915 1.66663C5.3915 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.3915 18.3333 9.9915 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.9915 1.66663ZM15.7665 6.66663H13.3082C13.0415 5.62496 12.6582 4.62496 12.1582 3.69996C13.6915 4.22496 14.9665 5.29163 15.7665 6.66663ZM9.99984 3.36663C10.6915 4.36663 11.2332 5.47496 11.5915 6.66663H8.40817C8.7665 5.47496 9.30817 4.36663 9.99984 3.36663ZM3.54984 11.6666C3.4165 11.1333 3.33317 10.575 3.33317 9.99996C3.33317 9.42496 3.4165 8.86663 3.54984 8.33329H6.3665C6.29984 8.88329 6.24984 9.43329 6.24984 9.99996C6.24984 10.5666 6.29984 11.1166 6.3665 11.6666H3.54984ZM4.23317 13.3333H6.6915C6.95817 14.375 7.3415 15.375 7.8415 16.3C6.30817 15.775 5.03317 14.7166 4.23317 13.3333ZM6.6915 6.66663H4.23317C5.03317 5.28329 6.30817 4.22496 7.8415 3.69996C7.3415 4.62496 6.95817 5.62496 6.6915 6.66663ZM9.99984 16.6333C9.30817 15.6333 8.7665 14.525 8.40817 13.3333H11.5915C11.2332 14.525 10.6915 15.6333 9.99984 16.6333ZM11.9498 11.6666H8.04984C7.97484 11.1166 7.9165 10.5666 7.9165 9.99996C7.9165 9.43329 7.97484 8.87496 8.04984 8.33329H11.9498C12.0248 8.87496 12.0832 9.43329 12.0832 9.99996C12.0832 10.5666 12.0248 11.1166 11.9498 11.6666ZM12.1582 16.3C12.6582 15.375 13.0415 14.375 13.3082 13.3333H15.7665C14.9665 14.7083 13.6915 15.775 12.1582 16.3ZM13.6332 11.6666C13.6998 11.1166 13.7498 10.5666 13.7498 9.99996C13.7498 9.43329 13.6998 8.88329 13.6332 8.33329H16.4498C16.5832 8.86663 16.6665 9.42496 16.6665 9.99996C16.6665 10.575 16.5832 11.1333 16.4498 11.6666H13.6332Z" fill="#8B96A5" />
                            </svg>
                            <span>{supplier.supplier.isWorldwideShipping ? "Worldwide shipping" : "Not Worldwide shipping"}</span>
                        </li>
                    </ul>
                </div>
                <div className='cta'>
                    <Button bgColor="#0D6EFD" color="#FFFFFF" width="248px" height="40px" padding="11px 10px 10px 10px">
                        Send inquiry
                    </Button>
                    <Button bgColor="#FFFFFF" color="#0D6EFD" width="248px" height="40px" padding="11px 10px 10px 10px">
                        Seller’s profile
                    </Button>
                </div>
            </div>
        ))}
    </div >
);

const ProductInfo = () => {
    const { get, data, isLoading } = useAPI(END_POINTS.PRODUCT);

    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <StyledProductInfo className="product">
                {isLoading ? <b>Loading....</b> :
                    <>
                        <ProductImages data={data} />
                        <ProductDetails data={data} />
                        <SupplierInfo data={data} />
                    </>
                }
            </StyledProductInfo>
        </Container>
    );
};

export default ProductInfo;
