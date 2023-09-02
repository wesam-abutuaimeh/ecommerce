"use client";
import React from 'react'
import CustomLink from '@/components/atoms/CustomLink';
import { StyledError } from './style';

const index = () => {
    return (
        <StyledError>
            <h2>(404) | Page Not Found 🙃</h2>
            <CustomLink href="/">Return Home</CustomLink>
        </StyledError>
    )
}

export default index;
