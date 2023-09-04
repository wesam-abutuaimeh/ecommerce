import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  filter: drop-shadow(0px 4px 10px rgba(56, 56, 56, 0.1));

  .orders__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    height: 80px;
    padding: 0 20px;
    button:nth-of-type(2) {
      border: 1px solid #e3e8ee;
    }
  }
  .card {
    display: flex;
    background-color: #ffffff;
    border-bottom: 1px solid #e3e8ee;

    &:first-child {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }
    &:last-child {
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    padding: 20px;
    .product__detail {
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      p {
        font-weight: 500;
        line-height: 22px;
        margin-bottom: 6px;
      }
      span {
        color: #8b96a5;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.2px;
      }
      div {
        margin-top: 10px;
      }
      div button {
        font-size: 13px;
        font-weight: 500;
        border: 1px solid #e3e8ee;
        border-radius: 6px;
        box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
      }
      div > button {
        margin-right: 6px;
      }
    }
    .prices {
      color: #1c1c1c;
      font-weight: 500;
      line-height: 22px;
      margin-left: 165px;
      text-align: right;
      select {
        width: 123px;
        height: 40px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        margin-top: 12px;
        padding: 0 10px;
        outline: none;
        border: 1px solid #e3e8ee;
        border-radius: 6px;
        box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
        appearance: none;
        background: url("/custom_arrow_icon.svg") no-repeat right center;
      }
    }
  }

  .checkout {
    .add__coupon {
      width: 280px;
      height: 110px;
      background-color: #ffffff;
      padding: 20px 0 0 16px;
      border: 1px solid #e3e8ee;
      border-radius: 6px;
      filter: drop-shadow(0px 4px 10px rgba(56, 56, 56, 0.1));
      .cupon__inputs {
        display: flex;
        align-items: center;
      }
      form {
        .coupon__input {
          display: block;
          color: #505050;
          margin-bottom: 9px;
          font-weight: 400;
        }
        input {
          font-family: Inter;
          color: #8b96a5;
          font-size: 16px;
          font-weight: 400;
          padding: 10px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        button {
          font-weight: 500;
          border: 1px solid #e3e8ee;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: none;
        }
      }
    }
    .payment {
      width: 280px;
      height: 302px;
      margin-top: 12px;
      padding: 20px 17px;
      background-color: #fff;
      border: 1px solid #e3e8ee;
      border-radius: 6px;
      filter: drop-shadow(0px 4px 10px rgba(56, 56, 56, 0.1));
      .calculations {
        div {
          display: flex;
          justify-content: space-between;
        }
        p:nth-of-type(1) {
          color: #505050;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.2px;
        }
        .discount,
        .tax {
          color: #00b517;
        }
        padding-bottom: 15px;
        border-bottom: 1px solid #e4e4e4;
      }
      .total__price {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        margin: 20px 0;
        color: #1c1c1c;
        .price {
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
          letter-spacing: -0.2px;
        }
      }
      button {
        font-size: 18px;
        font-weight: 500;
      }
      .gateways__images {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 12px 0;
      }
    }
  }
`;
