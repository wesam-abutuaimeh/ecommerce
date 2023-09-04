"use client";
import React from 'react'
import ProductInfo from './ProductInfo'
import Discount from '@/components/sections/Discount'
import Tabs from './Tabs';
import RelatedProducts from './RelatedProducts';

const Product = () => {
    return (
        <>
            <ProductInfo />
            <Tabs />
            <RelatedProducts />
            <Discount />
        </>
    )
}

export default Product;
