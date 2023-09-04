"use client"
import React from 'react'
import { FEATURES } from "@/mock/featuers";
import { Container } from '@/styles/commen';
import { StyledFeatures } from "./style.js"

const Features = () => {
    return (
        <Container>
            <StyledFeatures>
                {FEATURES.map((feature) => {
                    return <div className='feature' key={feature.id}>
                        <div className='image__container'>
                            {feature.svg}
                        </div>
                        <div>
                            <p>{feature.title}</p>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                })}
            </StyledFeatures>
        </Container>
    )
}

export default Features;
