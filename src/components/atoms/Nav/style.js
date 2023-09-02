import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      margin: 0 18px;
      li {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      svg {
        width: 24px;
        height: 24px;
      }
      span {
        color: #8b96a5;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        display: block;
      }
    }
  }
`;
