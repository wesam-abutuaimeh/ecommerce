"use client";
import React, { useEffect } from 'react'
import { END_POINTS } from "@/constants/endPoints";
import useAPI from '@/hooks/useAPI';
import CustomImage from '@/components/atoms/CustomImage'
import { Container } from '@/styles/commen';
import { H1 } from '@/components/atoms/Typography/style';
import { Flex, RecommendedItems } from '../RecommendedItems/style'

const Recommended = () => {
    const { get, data, isLoading } = useAPI(END_POINTS.RECOMMENDED_ITEMS);
    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <RecommendedItems>
                <H1>Recommended items</H1>
                <Flex>
                    {isLoading ? 'Loading ...'
                        : data.map((item) => {
                            return <div className='card' key={item.id}>
                                <div style={{ position: 'relative', width: "200px", height: "200PX" }}>
                                    <CustomImage src={item.src} alt={item.title} fill={true} objectFit="contain" />
                                </div>
                                <p>{item.price}</p>
                                <span>{item.title}</span>
                            </div>
                        })}
                </Flex>
            </RecommendedItems>
        </Container>
    )
}

export default Recommended;
