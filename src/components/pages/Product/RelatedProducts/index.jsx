"use client";
import React, { useEffect } from 'react'
import { END_POINTS } from "@/constants/endPoints";
import useAPI from '@/hooks/useAPI';
import CustomImage from '@/components/atoms/CustomImage'
import { Container } from '@/styles/commen';
import { H1 } from '@/components/atoms/Typography/style';
import { Flex, RecommendedItems } from './style'

const Re = () => {
    const { get, data, isLoading } = useAPI(END_POINTS.RELATED_PRODUCTS);
    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <RecommendedItems>
                <H1 className='head'>Related products</H1>
                <Flex>
                    {isLoading ? 'Loading ...'
                        : data.map((item) => {
                            return <div className='card' key={item.id}>
                                <div style={{ position: 'relative', width: "172px", height: "172px" }}>
                                    <CustomImage src={item.src} alt={item.title} width="112" height="112" />
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

export default Re;
