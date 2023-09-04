import styled from "styled-components";

export const StyledFeatures = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0;
  .feature {
    display: flex;
  }
  .image__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    background-color: #e3e8ee;
    border-radius: 50%;
  }
  p {
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  p:nth-of-type(1) {
    color: #1c1c1c;
  }
  p:nth-of-type(2) {
    color: #a9acb0;
  }
`;
