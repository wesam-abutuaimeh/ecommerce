import { StyledFlex } from "@/styles/commen";
import { styled } from "styled-components";

export const Flex = styled(StyledFlex)`
  display: flex;
  background-color: #fff;
  margin-top: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: #e3e8ee;
  .timer__area {
    border-right-color: #e0e0e0;
    width: calc(100% - 895px);
    margin: 20px 0 0 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
    span {
      color: #8b96a5;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .product__name {
    color: #1c1c1c;
    text-align: center;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin-bottom: 7px;
  }
  .products__area {
    border-left-color: #e0e0e0;
    margin: 0;
    div {
      padding: 20px;
      text-align: center;
      p {
        margin-top: 11px;
      }
    }
  }

  .product {
    width: 179px;
  }
  .image__holder {
    width: 140px;
    height: 140px;
  }
`;
