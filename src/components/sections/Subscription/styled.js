import { StyledFlex } from "@/styles/commen";
import styled from "styled-components";

export const StyledSubscription = styled.div`
  padding: 38px 0;
`;

export const Flex = styled(StyledFlex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  span {
    color: #606060;
    text-align: center;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  form {
    margin-top: 21px;
    input {
      padding-left: 36px;
    }
    button {
      margin-left: 8px;
    }
    .subscribe__input {
      position: relative;
      svg {
        position: absolute;
        left: 8px;
        top: 10px;
      }
    }
  }
`;
