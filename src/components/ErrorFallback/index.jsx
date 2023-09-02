"use client";
import React from 'react';
import Button from '../atoms/Button';
import { StyledError } from './style';

const ErrorFallback = ({ resetErrorBoundary }) => {
    return (
        <StyledError>
            <h2>Whoops! | Something went wrong</h2>
            <Button bgColor="#FFE0E0" color="#FA3434" width="270px" height="58px" padding="11px" onClick={resetErrorBoundary}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9998 2.66663C8.63984 2.66663 2.6665 8.63996 2.6665 16C2.6665 23.36 8.63984 29.3333 15.9998 29.3333C23.3598 29.3333 29.3332 23.36 29.3332 16C29.3332 8.63996 23.3598 2.66663 15.9998 2.66663ZM15.9998 17.3333C15.2665 17.3333 14.6665 16.7333 14.6665 16V10.6666C14.6665 9.93329 15.2665 9.33329 15.9998 9.33329C16.7332 9.33329 17.3332 9.93329 17.3332 10.6666V16C17.3332 16.7333 16.7332 17.3333 15.9998 17.3333ZM17.3332 22.6666H14.6665V20H17.3332V22.6666Z" fill="#FA3434" />
                </svg>
                Try Again
            </Button>
        </StyledError>
    );
};

export default ErrorFallback;
