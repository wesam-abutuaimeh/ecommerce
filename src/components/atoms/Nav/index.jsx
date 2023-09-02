"use client";
import React from 'react';
import CustomLink from '../CustomLink';
import { StyledNav } from './style';

const Navbar = () => {
    return (
        <StyledNav>
            <ul>
                <CustomLink href="/profile" id="profile">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 12C14.7625 12 17 9.7625 17 7C17 4.2375 14.7625 2 12 2C9.2375 2 7 4.2375 7 7C7 9.7625 9.2375 12 12 12ZM12 13.5C8.6625 13.5 2 15.175 2 18.5V19.75C2 20.4375 2.5625 21 3.25 21H20.75C21.4375 21 22 20.4375 22 19.75V18.5C22 15.175 15.3375 13.5 12 13.5Z" fill="#8B96A5" />
                        </svg>
                        <span>profile</span>
                    </li>
                </CustomLink>
                <CustomLink href="/messages" id="message">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 3H4C2.9 3 2.01 3.9 2.01 5L2 23L6 19H20C21.1 19 22 18.1 22 17V5C22 3.9 21.1 3 20 3ZM7 10H17C17.55 10 18 10.45 18 11C18 11.55 17.55 12 17 12H7C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10ZM13 15H7C6.45 15 6 14.55 6 14C6 13.45 6.45 13 7 13H13C13.55 13 14 13.45 14 14C14 14.55 13.55 15 13 15ZM17 9H7C6.45 9 6 8.55 6 8C6 7.45 6.45 7 7 7H17C17.55 7 18 7.45 18 8C18 8.55 17.55 9 17 9Z" fill="#8B96A5" />
                        </svg>
                        <span>Message</span>
                    </li>
                </CustomLink>
                <CustomLink href="/orders" id="orders" >
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.35 20.1302C12.59 20.8202 11.42 20.8202 10.66 20.1202L10.55 20.0202C5.30003 15.2702 1.87003 12.1602 2.00003 8.28017C2.06003 6.58017 2.93003 4.95017 4.34003 3.99017C6.98003 2.19017 10.24 3.03017 12 5.09017C13.76 3.03017 17.02 2.18017 19.66 3.99017C21.07 4.95017 21.94 6.58017 22 8.28017C22.14 12.1602 18.7 15.2702 13.45 20.0402L13.35 20.1302Z" fill="#8B96A5" />
                        </svg>
                        <span>Orders</span>
                    </li>
                </CustomLink>
                <CustomLink href="/cart" id="mycart">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.29989 18.7997C6.14491 18.7997 5.21043 19.7447 5.21043 20.8997C5.21043 22.0546 6.14491 22.9996 7.29989 22.9996C8.45487 22.9996 9.39985 22.0546 9.39985 20.8997C9.39985 19.7447 8.45487 18.7997 7.29989 18.7997ZM1 3.04998C1 3.62747 1.47249 4.09996 2.04998 4.09996H3.09996L6.8799 12.0693L5.46242 14.6313C4.69593 16.0383 5.70392 17.7497 7.29989 17.7497H18.8497C19.4272 17.7497 19.8997 17.2772 19.8997 16.6997C19.8997 16.1223 19.4272 15.6498 18.8497 15.6498H7.29989L8.45487 13.5498H16.2772C17.0647 13.5498 17.7577 13.1193 18.1147 12.4683L21.8736 5.65394C22.2621 4.96095 21.7581 4.09996 20.9601 4.09996H5.42042L4.71693 2.59849C4.54894 2.231 4.17094 2 3.77195 2H2.04998C1.47249 2 1 2.47249 1 3.04998ZM17.7997 18.7997C16.6447 18.7997 15.7102 19.7447 15.7102 20.8997C15.7102 22.0546 16.6447 22.9996 17.7997 22.9996C18.9547 22.9996 19.8997 22.0546 19.8997 20.8997C19.8997 19.7447 18.9547 18.7997 17.7997 18.7997Z" fill="#8B96A5" />
                        </svg>
                        <span>My cart</span>
                    </li>
                </CustomLink>
            </ul>
        </StyledNav>
    );
}

export default Navbar;
