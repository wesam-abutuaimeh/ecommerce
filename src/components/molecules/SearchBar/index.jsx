"use client";
import React, { useState } from 'react';
import { StyledSearchBar } from './style';
import Button from '@/components/atoms/Button';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');

    const handleSearch = () => {
        console.log(query, category);
    };

    return (
        <StyledSearchBar>
            <input
                className='search__input'
                type="text"
                value={query}
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All category</option>
                <option value="Books">Books</option>
                <option value="Movies">Movies</option>
                <option value="Music">Music</option>
            </select>
            <Button onClick={handleSearch}>Search</Button>
        </StyledSearchBar>
    );
};

export default SearchBar;

