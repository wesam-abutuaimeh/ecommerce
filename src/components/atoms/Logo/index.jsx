"use client";
import React from 'react'
import CustomImage from '../CustomImage'
import { StyledLogo } from './style'

const Logo = () => {
    return (
        <StyledLogo>
            <CustomImage src="/logo.png" alt='logo' width="44" height="40" />
            <p>Brand</p>
        </StyledLogo>
    )
}

export default Logo
