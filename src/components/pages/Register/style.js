import styled from "styled-components";

const primaryColor = "#0D6EFD";
const lightGray = "#f7f7f7";
const mediumGray = "#606060";
const borderGray = "#e0e0e0";
const boxShadowColor = "rgba(32, 32, 32, 0.1)";

export const StyledRegister = styled.main`
  background: ${lightGray};
  padding-top: 176px;
  padding-bottom: 230px;
  .name__input__container {
    display: flex;
    margin-bottom: 20px;
    .surname {
      margin-left: 9px;
    }
  }

  .inputs__container {
    width: 400px;
    height: 700px;
    padding: 30px;
    border-radius: 6px;
    background: #fff;
    filter: drop-shadow(0px 3px 10px ${boxShadowColor});
    margin: 0 auto;

    h1 {
      margin-bottom: 17px;
    }

    input {
      background-color: #fff;
      padding: 11px;
      font-size: 16px;
      font-weight: 400;
      margin-top: 3px;
    }

    .phone__container {
      margin: 20px 0;
      div {
        display: flex;
        align-items: center;
        input {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          margin: 0;
        }

        select {
          width: 121px;
          height: 40px;
          padding: 10px;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          border: 1px solid ${borderGray};
          border-radius: 6px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          color: #1c1c1c;
          outline: none;
        }
      }
    }

    .repeat__password__label {
      margin-top: 20px;
      display: block;
    }

    .password__input {
      position: relative;

      svg {
        position: absolute;
        right: 9px;
        top: 12px;
        cursor: pointer;
        z-index: 100;
      }
    }

    a {
      color: ${primaryColor};
      text-decoration: none;
    }

    span {
      display: block;
      width: 100%;
      text-align: center;
      color: ${mediumGray};
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.1px;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${borderGray};
        left: 0;
        bottom: 40px;
      }

      a {
        font-weight: 600;
      }
    }

    .agreement {
      display: flex;
      align-items: center;
      margin: 20px 0 40px;

      p {
        margin: 0 20px -12px;
      }

      input {
        position: relative;
        z-index: 10;

        &::before {
          position: absolute;
          content: "";
          background-color: ${lightGray};
          width: 20px;
          height: 20px;
          left: 0;
          top: 0;
          cursor: pointer;
          border-radius: 2px;
        }

        &:checked::before {
          content: "";
          background-color: ${primaryColor};
          color: white;
        }
      }
    }

    button {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.1px;
      filter: drop-shadow(0px 1px 3px rgba(56, 56, 56, 0.1));
      margin: 35px 0 30px;
    }
  }

  .text__field {
    width: 327px;
    height: 40px;
    background-color: #ffffff;
    color: #a9acb0;
    color: #8b96a5;
    font-family: Inter;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    outline: none;
  }
`;
