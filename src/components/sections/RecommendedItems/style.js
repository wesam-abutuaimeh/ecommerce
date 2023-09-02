import styled from "styled-components";
import { StyledFlex } from "@/styles/commen";

export const RecommendedItems = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const Flex = styled(StyledFlex)`
  flex-wrap: wrap;
  gap: 10px;

  .card {
    width: 220px;
    height: 310px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 6px;

    img {
      display: block;
      margin: 0 auto 14px;
    }

    p {
      color: #1c1c1c;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 5px;
      margin-top: 30px;
    }

    span {
      display: flex;
      color: #8b96a5;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.2px;
    }
  }
`;
