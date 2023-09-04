"use client";
import React, { useEffect } from 'react';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from "@/constants/endPoints";
import Button from '@/components/atoms/Button';
import CustomImage from '@/components/atoms/CustomImage/';
import { H1 } from '@/components/atoms/Typography/style';
import { Container } from '@/styles/commen';
import { StyledHomeAndOutdoor } from "./style.js";

const HomeAndOutdoor = () => {
    const { get, data, isLoading } = useAPI(END_POINTS.HOME_AND_OUTDOOR);
    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <StyledHomeAndOutdoor>
            <Container className='container'>
                <div className='hero'>
                    <H1>Home and outdoor</H1>
                    <Button bgColor="#ffffff" color="#1C1C1C" width="119px" height="40px" padding="11px">Source now</Button>
                </div>
                <div className='products'>
                    {isLoading ? "Loading..."
                        : data.map((item) => {
                            return (
                                <div className="card" key={item.id}>
                                    <div>
                                        <p>{item.title}</p>
                                        <span>{item.prices}</span>
                                    </div>
                                    <div style={{ position: 'relative', width: "66px", height: "66px" }}>
                                        <CustomImage src={item.src} alt="product" fill={true} objectFit="contain" />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </Container>
        </StyledHomeAndOutdoor>
    );
}

export default HomeAndOutdoor;
