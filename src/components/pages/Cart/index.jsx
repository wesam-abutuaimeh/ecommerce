"use client";
import React from 'react';
import OrdersAndCheckout from '@/components/sections/ordersAndCheckout';
import Features from '@/components/sections/Features';
import Discount from '@/components/sections/Discount';
import SavedForLater from '@/components/sections/SavedForLater';

const Cart = () => {
    return <>
        <OrdersAndCheckout />
        <Features />
        <SavedForLater />
        <Discount />
    </>
}

export default Cart;
