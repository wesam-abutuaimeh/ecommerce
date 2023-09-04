import styled from "styled-components";

export const StyledProduct = styled.div`
  .products {
    display: flex;
  }
  .icons {
    display: flex;
    align-items: center;
    div:nth-of-type(2) {
      background-color: white;
      width: 38px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #8b96a5;
      border-radius: 6px;
    }
    cursor: pointer;
  }
  .product {
    background-color: #ffffff;
    display: flex;
    padding: 20px;
    margin: 10px 15px;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    .img__holder {
      mix-blend-mode: multiply;
    }
    .title {
      color: #1c1c1c;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 15px;
    }
    .price {
      font-weight: 600;
      margin-bottom: 7px;
      span {
        color: #1c1c1c;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
      }
      del {
        color: #8b96a5;
        margin-left: 7px;
      }
    }
    .rating {
      display: flex;
      align-items: center;
      .rating__number,
      .orders__count,
      .shipping {
        font-weight: 400;
        margin-left: 9px;
        svg {
          margin-right: 9px;
        }
      }
      .rating__number {
        color: #ff9017;
      }
      .orders__count {
        color: #8b96a5;
      }
      .shipping {
        color: #00b517;
      }
    }
    .description {
      color: #505050;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.2px;
      max-width: 607px;
    }
    button {
      margin: 8px 0;
      font-weight: 500;
    }
  }
  .grid {
    background-color: red;
  }
`;
