'use client';
import React, { useState } from 'react'
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/endPoints';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input'
import { H1 } from '@/components/atoms/Typography/style';
import { Container } from '@/styles/commen';
import { StyledSubscription, Flex } from './styled';

const Subscription = () => {
    const [email, setEmail] = useState("");
    const { post, error } = useAPI(END_POINTS.SUBSCRIPTION);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (email === "") {
            setEmail('Please enter your email!');
        }

        if (email !== "" && email !== "Please enter your email!") {
            const response = post(email);

            if (error) {
                console.log('Subscription failed. Please try again later');
            }
        }
    }

    return (
        <StyledSubscription>
            <Container>
                <Flex>
                    <div className='description'>
                        <H1>Subscribe on our newsletter</H1>
                        <span>Get daily news on upcoming offers from many suppliers all over the world</span>
                    </div>
                    <form>
                        <div className='subscribe__input'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M20.1666 5.50002C20.1666 4.49169 19.3416 3.66669 18.3333 3.66669H3.66665C2.65831 3.66669 1.83331 4.49169 1.83331 5.50002V16.5C1.83331 17.5084 2.65831 18.3334 3.66665 18.3334H18.3333C19.3416 18.3334 20.1666 17.5084 20.1666 16.5V5.50002ZM18.3333 5.50002L11 10.0834L3.66665 5.50002H18.3333ZM18.3333 16.5H3.66665V7.33335L11 11.9167L18.3333 7.33335V16.5Z" fill="#8B96A5" />
                            </svg>
                            <Input type="email" id="emailToSubscription" name="emailToSubscription" placeholder="Email" width="274px" height="40px" onChange={handleInputChange} value={email} />
                            <Button bgColor="#0D6EFD" color="#fff" width="110px" height="40px" onClick={handleSubscribe} type="submit">Subscribe</Button>
                        </div>
                    </form>
                </Flex>
            </Container>
        </StyledSubscription>
    )
}

export default Subscription;
