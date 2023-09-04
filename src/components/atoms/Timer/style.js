import styled from "styled-components";
export const TimeContainer = styled.div`
  display: flex;
  div {
    width: 45px;
    height: 50px;
    background-color: #606060;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin-top: 18px;
    &:not(:last-child) {
      margin-right: 6px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;
