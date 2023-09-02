"use client";
import React from 'react'
import { Container } from '@/styles/commen';
import Logo from "@/components/atoms/Logo";
import SearchBar from "@/components/molecules/SearchBar";
import Navbar from "@/components/atoms/Nav";
import { StyledHeader } from './style';

const Header = () => {
    return (
        <StyledHeader>
            <Container className='container'>
                <Logo />
                <SearchBar />
                <Navbar />
            </Container>
        </StyledHeader>
    )
}

export default Header;
