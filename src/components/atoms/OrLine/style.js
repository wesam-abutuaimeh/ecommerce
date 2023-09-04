import styled from "styled-components";

const OrBox = styled.div`
  color: #bababa;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  width: 100%;
  margin: 15px auto;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: #f5f5f5;
    height: 1px;
    width: 140px;
    position: absolute;
    top: 50%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const OrText = styled.span`
  color: #a9acb0;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.2px;
`;

export { OrBox, OrText };
