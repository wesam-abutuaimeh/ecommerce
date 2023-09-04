"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Avatar from '@/components/atoms/Avatar'
import Button from '@/components/atoms/Button'
import { Container } from '@/styles/commen'
import { Cards, CategoriesLinks, CtaWithImg, HeroContainer } from './style';

const Hero = () => {
    return (
        <Container>
            <HeroContainer>
                <CategoriesLinks>
                    <li><Link href="/link">Automobiles</Link></li>
                    <li><Link href="/link">Clothes and wear</Link></li>
                    <li><Link href="/link">Home interiors</Link></li>
                    <li><Link href="/link">Computer and tech</Link></li>
                    <li><Link href="/link">Tools, equipments</Link></li>
                    <li><Link href="/link">Animal and pets</Link></li>
                    <li><Link href="/link">Machinery tools</Link></li>
                    <li><Link href="/link">More category</Link></li>
                </CategoriesLinks>
                <CtaWithImg>
                    <Image src="/banner-board.png" alt="banner-board" width="640" height="373" />
                    <div className='txt'>
                        <p>Latest trending</p>
                        <p className='electronic__items'>Electronic items</p>
                        <Button bgColor='#FFF' color='#1C1C1C' width="112px" height="40px" padding="7px 0px">Learn more</Button>
                    </div>
                </CtaWithImg>
                <Cards>
                    <div className='start'>
                        <Avatar src="/avatar.png" alt="banner-board" width="44" height="44" p1="Hi, user" p2="lets get stated" />
                        <Button bgColor='#0D6EFD' color='#fff' width="180px" height="30" padding="7px 0px">Join now</Button>
                        <Button bgColor='#FFF' color='#0D6EFD' width="180px" height="30" padding="7px 0px">Log in</Button>
                    </div>
                    <div className='new__suplier'>
                        Get US $10 off with a new supplier
                    </div>
                    <div className='preferences'>
                        Send quotes with supplier preferences
                    </div>
                </Cards>
            </HeroContainer>
        </Container>
    )
}

export default Hero;
