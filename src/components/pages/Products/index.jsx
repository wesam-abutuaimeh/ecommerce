"use client";
import React from 'react'
import FilterSidebar from '@/components/sections/FilterSidebar/Filter';
import ProductsList from '@/components/sections/ProductsList/Product';
import Subscription from "@/components/sections/Subscription"
import { Container } from '@/styles/commen';
import Header from '@/components/organisms/Header';

const Products = () => {
    return (
        <div>
            <Container>
                <div style={{ display: 'flex' }}>
                    <FilterSidebar />
                    <ProductsList />
                </div>
                <Subscription />
            </Container>
        </div>
    );
}

export default Products;
