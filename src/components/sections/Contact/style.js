import { StyledFlex } from "@/styles/commen";
import styled from "styled-components";

export const StyledContact = styled.div`
  background-image: url("/contact_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 446px;
  margin: 10px 0 20px;
  border-radius: 6px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      128deg,
      #2c7cf1 0%,
      rgba(0, 209, 255, 0.5) 100%
    );
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  .description {
    position: absolute;
    left: 0;
    top: 10px;
    z-index: 10;
    margin: 50px 0 0 50px;

    p {
      max-width: 440px;
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      letter-spacing: -0.2px;
      margin-bottom: 13px;
    }

    span {
      display: inline-block;
      max-width: 390px;
      color: #fff;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.2px;
    }
  }
`;

export const RequestToSuppliers = styled(StyledFlex)`
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 30px;
  z-index: 10;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
    margin-bottom: 18px;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea,
    select {
      font-family: Inter;
      font-size: 16px;
    }

    input {
      padding: 11px;
    }

    textarea {
      font-weight: 400;
      border: 1px solid #e3e8ee;
      margin: 30px 0 20px 0;
      border-radius: 6px;
      padding: 11px;
      outline: none;
    }

    select {
      width: 111px;
      height: 40px;
      border-radius: 6px;
      font-weight: 400;
      font-weight: 400;
      border: 1px solid #e3e8ee;
      margin-left: 18px;
      margin-bottom: 20px;
    }

    button {
      font-size: 16px;
    }
  }
`;
