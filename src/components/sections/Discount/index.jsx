import React from 'react'
import { Container } from '@/styles/commen'
import Button from '@/components/atoms/Button'
import { StyledDiscount } from './style'

const Discount = () => {
    return (
        <StyledDiscount>
            <Container className='container'>
                <div className='info'>
                    <p>Super discount on more than 100 USD</p>
                    <p>Have you ever finally just write dummy info</p>
                </div>
                <div className='shop__btn'>
                    <Button bgColor="#FF9017" color="#ffffff" width="121px" height="40px" padding="11px 10px 10px 10px">Shop now</Button>
                </div>
            </Container>
        </StyledDiscount>
    )
}

export default Discount
