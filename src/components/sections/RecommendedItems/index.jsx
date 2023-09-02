"use client";
import React from 'react'
import { RECOMMENDED_ITEMS } from '@/mock/recommendedItems'
import CustomImage from '@/components/atoms/CustomImage'
import { Container } from '@/styles/commen';
import { Flex, RecommendedItems } from '../RecommendedItems/style'
import { H1 } from '@/components/atoms/Typography/style';

const index = () => {
    return (
        <Container>
            <RecommendedItems>
                <H1>Recommended items</H1>
                <Flex>
                    {RECOMMENDED_ITEMS.map((item) => {
                        return <div className='card' key={item.id}>
                            <div style={{ position: 'relative', width: "100%", height: "50%" }}>
                                <CustomImage
                                    src={item.src}
                                    alt={item.title}
                                    fill={true}
                                    objectFit="contain"
                                />
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

export default index;
