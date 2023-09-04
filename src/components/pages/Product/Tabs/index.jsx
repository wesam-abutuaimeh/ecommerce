import TabContent1 from "@/components/pages/Product/TabContent1"
import { Container } from "@/styles/commen";
import { StyledTabs, StyledTabContnet } from "./style"

import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleActiveTab = (index) => {
        setActiveTab(index)
    }

    return (
        <Container className="container">
            <StyledTabContnet>
                <StyledTabs className="tab-buttons">
                    <div className={activeTab === 0 ? "active" : ""} onClick={() => handleActiveTab(0)}>Description</div>
                    <div className={activeTab === 1 ? "active" : ""} onClick={() => handleActiveTab(1)}>Reviews</div>
                    <div className={activeTab === 2 ? "active" : ""} onClick={() => handleActiveTab(2)}>Shipping</div>
                    <div className={activeTab === 3 ? "active" : ""} onClick={() => handleActiveTab(3)}>About company</div>
                </StyledTabs>
                <div className="tab-content">
                    {activeTab === 0 && <TabContent1 />}
                    {activeTab === 1 && <h1>Reviews Is Not Available Now</h1>}
                    {activeTab === 2 && <h1>Not Available Now</h1>}
                    {activeTab === 3 && <h1>Still Under development</h1>}
                </div>
            </StyledTabContnet>
        </Container>
    )
}

export default Tabs
