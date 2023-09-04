import styled from "styled-components";

export const StyledDescription = styled.div`
  .title {
    color: 505050;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    max-width: 798px;
    margin: 15px 0 24px;
  }
  .details {
    margin-bottom: 26px;
    div {
      display: flex;
      p {
        border: 1px solid #ccc;
        height: 36px;
        padding: 5px;
        &:nth-of-type(1) {
          width: 204px;
          background-color: #eff2f4;
          color: #505050;
        }
        &:nth-of-type(2) {
          width: 342px;
          background-color: #ffffff;
          color: #505050;
        }
      }
    }
  }
  ul li {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    svg {
      margin-right: 6px;
    }
  }
`;
