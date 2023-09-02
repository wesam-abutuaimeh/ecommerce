import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: white;
  height: 74px;
  display: grid;
  place-items: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      margin: 0 10px;
    }
    .links__container a {
      color: #606060;
      text-align: center;
      font-family: Inter;
      font-weight: 400;
      margin-left: 30px;
      line-height: 24px;
      letter-spacing: -0.2px;
    }
  }
`;
