import styled from "styled-components";
import { StyledFlex } from "@/styles/commen";

export const RecommendedItems = styled.div`
  background-color: #ffffff;
  margin-top: 15px;
  margin-bottom: 20px;
  .head {
    padding: 10px 0 0 10px;
  }
`;

export const Flex = styled(StyledFlex)`
  flex-wrap: wrap;
  gap: 14px;
  padding: 10px;
  h1 {
    padding: 10px;
  }
  .card {
    width: 172px;
    height: 254px;
    gap: 14px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      border-radius: 6px;
    }
    img {
      display: block;
      mix-blend-mode: multiply;
    }

    p {
      max-width: 142px;
      color: #505050;
      margin: 10px 0;
    }

    span {
      display: flex;
      color: #8b96a5;
    }
  }
`;
