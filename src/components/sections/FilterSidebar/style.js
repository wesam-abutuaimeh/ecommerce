import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: #f7fafc;
  padding: 20px;
  border-radius: 5px;

  width: 230px;
  > div {
    border-top: 1px solid #e3e8ee;
    padding: 15px 0;
    p {
      color: #1c1c1c;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
    }
  }

  /* transform: rotate(180deg); */
  .category ul li a {
    color: #505050;
  }
  .category a {
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
    display: block;
  }
  .brands li,
  .features li,
  .ratings li {
    color: #1c1c1c;
    margin: 8px 0;
    label {
      margin-left: 8px;
    }
  }
  .conditions {
    label {
      display: block;
      margin: 8px 0;
      input {
        margin-right: 8px;
      }
    }
  }

  .aside__section__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
