"use client";
import React from 'react'
import { Container } from '@/styles/commen'
import Input from '@/components/atoms/Input';
import { H1 } from '@/components/atoms/Typography/style';
import Button from '@/components/atoms/Button';
import { StyledContact, RequestToSuppliers } from './style'

const index = () => {
    return (
        <Container>
            <StyledContact>
                <div className='description'>
                    <p>An easy way to send requests to all suppliers</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
                </div>
                <RequestToSuppliers>
                    <H1>Send quote to suppliers</H1>
                    <form>
                        <Input type="text" id="quote" name="quote" placeholder="What item you need?" width="440px" height="40px" />
                        <textarea id="qouteDetails" name="qouteDetails" rows="3" cols="30" placeholder='Type more details'>
                        </textarea>
                        <div>
                            <Input type="text" id="quoteQuantity" name="quoteQuantity" placeholder="Quantity" width="206px" height="40px" />
                            <select id="selectQuantity" className='selectQuantity'>
                                <option value="Pcs">Pcs</option>
                            </select>
                        </div>
                        <Button bgColor="#0D6EFD" color="#FFF" width="129px" height="40px" padding="11px 10px 10px 10px">Send inquiry</Button>
                    </form>
                </RequestToSuppliers>
            </StyledContact>
        </Container>
    )
}

export default index

