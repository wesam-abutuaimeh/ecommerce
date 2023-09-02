import { StyledFlex } from "@/styles/commen";
import { styled } from "styled-components";

export const Flex = styled(StyledFlex)`
  flex-wrap: wrap;
  margin-top: 24px;
  .region {
    display: flex;
    width: 221px;
    height: 36px;

    margin-bottom: 20px;

    div {
      margin-left: 11px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.2px;

      p {
        color: #1c1c1c;
      }
      span {
        display: block;
        font-size: 13px;
        font-weight: 400;
        color: #8b96a5;
      }
    }
  }
`;
