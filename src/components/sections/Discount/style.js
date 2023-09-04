import styled from "styled-components";

export const StyledDiscount = styled.div`
  padding: 20px 0 40px;
  .container {
    border-radius: 6px;
    background-color: #005ade;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
  .info {
    width: 745px;
    background-color: #237cff;
    border-radius: 6px;
    position: relative;
    padding: 30px;
    &::after {
      position: absolute;
      content: "";
      width: 60px;
      height: 100%;
      right: -40px;
      top: 0;
      transform: skewX(15deg);
      background-color: rgb(35, 124, 255);
    }
    p:nth-of-type(1) {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
    }
    p:nth-of-type(2) {
      font-size: 16px;
      font-weight: 400;
      color: #ededed;
    }
  }
  .shop__btn {
    padding: 30px;
  }
`;
