import { StyledFlex } from "@/styles/commen";
import styled from "styled-components";

export const StyledProductInfo = styled(StyledFlex)`
  justify-content: space-evenly;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 20px;
  .product-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    .main__image {
      width: 380px;
      height: 380px;
      background-color: white;
      border: 1px solid #e3e8ee;
      border-radius: 6px;
    }
    img {
      mix-blend-mode: multiply;
    }
    .sub__images {
      margin: 22px 5px;
    }
  }
  .details {
    margin: 0 20px;
    .prices {
      display: flex;
      align-items: center;
      background-color: #fff0df;
      padding: 14px 0;
      div {
        padding-right: 30px;
        padding-left: 10px;
        &:not(:last-child) {
          border-right: 1px solid #bdc1c8;
        }
        p:nth-of-type(1) {
          color: #1c1c1c;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        p:nth-of-type(2) {
          color: #606060;
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }
  .supplier__info {
    width: 280px;
    height: 325px;
    padding: 20px 16px;
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    .supplier {
      margin-top: 21px;
      border-top: 1px solid #e0e0e0;
    }
    ul li {
      display: flex;
      align-items: center;
      margin: 8px 0;
      svg,
      img {
        margin-right: 18px;
      }
    }
    .cta {
      margin-top: 21px;
      button {
        font-weight: 500;
        &:nth-of-type(1) {
          margin-bottom: 8px;
        }
        &:nth-of-type(2) {
          border-radius: 6px;
          border: 1px solid #e3e8ee;
        }
      }
    }
  }
`;
