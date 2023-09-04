import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import Button from '@/components/atoms/Button';
import { StyledSearchBar } from './style';

const Home = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    const debouncedKeyword = useDebounce(keyword, 500);

    const handleSearch = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = () => debouncedKeyword ? router.push(`/?title=${debouncedKeyword}`) : router.push("/");

    return (
        <div>
            <StyledSearchBar>
                <input
                    className='search__input'
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                    value={keyword}
                />
                <select>
                    <option value="All">All category</option>
                    <option value="Books">Books</option>
                    <option value="Movies">Movies</option>
                    <option value="Music">Music</option>
                </select>
                <Button onClick={handleSubmit}>Search</Button>
            </StyledSearchBar>
        </div>
    );
};

export default Home;
