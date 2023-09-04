import React, { useState } from "react";
import CustomLink from "@/components/atoms/CustomLink";
import { SidebarContainer } from "./style";

const FilterSidebar = () => {
    const [condition, setCondition] = useState("Any");

    const handleConditionChange = (e) => {
        setCondition(e.target.value);
    };

    return (
        <SidebarContainer>
            <div className="category">
                <div className="aside__section__title">
                    <p>Category</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5" />
                    </svg>
                </div>
                <ul>
                    <li>
                        <CustomLink href="/mobile-accessory">Mobile accessory</CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/electronics">Electronics</CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/smartphones">Smartphones</CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/modern-tech">Modern tech</CustomLink>
                    </li>
                </ul>
                <CustomLink href="/categories">See all</CustomLink>
            </div>

            <div className="brands">
                <div className="aside__section__title">
                    <p>Brands</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5" />
                    </svg>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" id="brand-samsung" />
                        <label htmlFor="brand-samsung">Samsung</label>
                    </li>
                    <li>
                        <input type="checkbox" id="brand-apple" />
                        <label htmlFor="brand-apple">Apple</label>
                    </li>
                    <li>
                        <input type="checkbox" id="brand-huawei" />
                        <label htmlFor="brand-huawei">Huawei</label>
                    </li>
                    <li>
                        <input type="checkbox" id="brand-lenovo" />
                        <label htmlFor="brand-lenovo">Lenovo</label>
                    </li>
                    <li>
                        <input type="checkbox" id="brand-poco" />
                        <label htmlFor="brand-poco">Poco</label>
                    </li>
                </ul>
            </div>

            <div className="features">
                <div className="aside__section__title">
                    <p>Features</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5" />
                    </svg>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" id="feature-metallic" />
                        <label htmlFor="feature-samsung">Metallic</label>
                    </li>
                    <li>
                        <input type="checkbox" id="feature-cover" />
                        <label htmlFor="feature-cover">Plastic cover</label>
                    </li>
                    <li>
                        <input type="checkbox" id="feature-ram" />
                        <label htmlFor="feature-huawei">8GB RAM</label>
                    </li>
                    <li>
                        <input type="checkbox" id="feature-power" />
                        <label htmlFor="feature-power">Super power</label>
                    </li>
                    <li>
                        <input type="checkbox" id="feature-memory" />
                        <label htmlFor="feature-memory">Large Memory</label>
                    </li>
                </ul>
            </div>

            <div className="price__range">
                <div className="aside__section__title">
                    <p>Price Range</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5" />
                    </svg>
                </div>
                <label htmlFor="min-price">Min Price:</label>
                <input type="number" id="min-price" name="min-price" />
                <label htmlFor="max-price">Max Price:</label>
                <input type="number" id="max-price" name="max-price" />
                <input type="range" id="price-range" name="price-range" min="0" max="1000" step="10" />
            </div>

            <div className="conditions">
                <div className="aside__section__title">
                    <p>Conditions</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5" />
                    </svg>
                </div>
                <label>
                    <input type="radio" name="condition" value="Any" checked={condition === "Any"} onChange={handleConditionChange} />
                    Any
                </label>
                <label>
                    <input type="radio" name="condition" value="refurbished" checked={condition === "refurbished"} onChange={handleConditionChange} />
                    Refurbished
                </label>
                <label>
                    <input type="radio" name="condition" value="Brand new" checked={condition === "Brand new"} onChange={handleConditionChange} />
                    Brand new
                </label>
                <label>
                    <input type="radio" name="condition" value="Old items" checked={condition === "Old items"} onChange={handleConditionChange} />
                    Old items
                </label>
            </div>

            <div className="ratings">
                <div className="aside__section__title">
                    <p>Ratings</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z" fill="#8B96A5" />
                    </svg>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" id="5stars" />
                        <label htmlFor="5stars">
                            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="4stars" />
                        <label htmlFor="4stars">
                            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="3stars" />
                        <label htmlFor="3stars">
                            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="2stars" />
                        <label htmlFor="2stars">
                            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="18" viewBox="0 0 93 18" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z" fill="#BBBCBE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z" fill="#FF9017" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z" fill="#FF9017" />
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>
        </SidebarContainer>
    );
};

export default FilterSidebar;
