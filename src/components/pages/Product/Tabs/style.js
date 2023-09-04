import { StyledFlex } from "@/styles/commen";
import styled from "styled-components";

export const StyledTabs = styled(StyledFlex)`
  div {
    padding: 8px 16px;
    color: #8b96a5;
    font-weight: 500;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .active {
    color: #0d6efd;
    border-bottom: 2px solid #0d6efd;
  }
`;
export const StyledTabContnet = styled(StyledFlex)`
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
