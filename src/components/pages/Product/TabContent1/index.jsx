import React from "react";
import { StyledDescription } from "./style";

const TabContent1 = () => {
    return (
        <StyledDescription>
            <p className="title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
            </p>
            <div className="details">
                <div>
                    <p>Model</p>
                    <p>#8786867</p>
                </div>
                <div>
                    <p>Style</p>
                    <p>Classic style</p>
                </div>
                <div>
                    <p>Certificate</p>
                    <p>ISO-898921212</p>
                </div>
                <div>
                    <p>Size</p>
                    <p>34mm x 450mm x 19mm</p>
                </div>
                <div>
                    <p>Memory</p>
                    <p>36GB RAM</p>
                </div>
            </div>
            <ul>
                <li>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                            fill="#8B96A5"
                        />
                    </svg>
                    <span>Some great feature name here</span>
                </li>
                <li>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                            fill="#8B96A5"
                        />
                    </svg>
                    <span>Lorem ipsum dolor sit amet, consectetur </span>
                </li>
                <li>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                            fill="#8B96A5"
                        />
                    </svg>
                    <span>Duis aute irure dolor in reprehenderit </span>
                </li>
                <li>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.32923 13.2291L3.85423 9.75414L2.6709 10.9291L7.32923 15.5875L17.3292 5.58748L16.1542 4.41248L7.32923 13.2291Z"
                            fill="#8B96A5"
                        />
                    </svg>
                    <span>Some great feature name here</span>
                </li>
            </ul>
        </StyledDescription>
    );
};

export default TabContent1;
