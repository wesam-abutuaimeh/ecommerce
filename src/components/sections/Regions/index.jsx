"use client";
import CustomImage from '@/components/atoms/CustomImage'
import React from 'react'
import { Flex } from './style'
import { REGIONS } from '@/mock/regions'
import { Container } from '@/styles/commen';
import { H1 } from '@/components/atoms/Typography/style';

const index = () => {
    return (
        <Container>
            <H1>Suppliers by region</H1>
            <Flex>
                {REGIONS.map((region) => {
                    return <div className='region' key={region.id}>
                        <CustomImage src={region.flag} alt={region.name} width="28" height="20" />
                        <div>
                            <p>{region.name}</p>
                            <span>{region.website}</span>
                        </div>
                    </div>
                })}
            </Flex>
        </Container>
    )
}

export default index;
