"use client";
import React, { useEffect } from 'react'
import { END_POINTS } from "@/constants/endPoints";
import useAPI from '@/hooks/useAPI';
import Timer from '@/components/atoms/Timer';
import CustomImage from '@/components/atoms/CustomImage'
import Chip from '@/components/atoms/Chip'
import { Container } from '@/styles/commen'
import { Flex } from "./style"
import { H1 } from '@/components/atoms/Typography/style';

const DealsAndOffers = () => {
    const { get, data, isLoading } = useAPI(END_POINTS.OFFERS);
    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Flex>
                <div className='timer__area'>
                    <H1>Deals and offers</H1>
                    <span>Hygiene equipments</span>
                    <Timer />
                </div>
                <Flex className='products__area'>
                    {isLoading ? "Loading ..." :
                        data.map((product) => {
                            return <div key={product.id} className='product'>
                                <div className='image__holder' style={{ position: 'relative', width: "140px", height: "140px" }} >
                                    <CustomImage src={product.img} id={"product" + product.id} alt={product.title} fill={true} objectFit="contain" />
                                </div>
                                <p className='product__name'>{product.title}</p>
                                <Chip content={product.discount} />
                            </div>
                        })}
                </Flex>
            </Flex>
        </Container>
    )
}

export default DealsAndOffers;
