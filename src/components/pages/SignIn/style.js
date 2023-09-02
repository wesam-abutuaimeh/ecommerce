import styled from "styled-components";

export const StyledSignin = styled.main`
  background: #f7f7f7;
  min-height: 100vh;
  padding-top: 209px;
  padding-bottom: 336px;

  .inputs__container {
    width: 387px;
    padding: 30px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 3px 10px 0px rgba(32, 32, 32, 0.1);
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

    button {
      display: flex;
      align-items: center;
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.1px;
      filter: drop-shadow(0px 1px 3px rgba(56, 56, 56, 0.1));

      &:nth-of-type(2) {
        margin-top: 10px;
        margin-bottom: 30px;
      }

      p {
        margin-left: 50px;
      }
    }

    .password__head {
      display: flex;
      justify-content: space-between;
      margin-top: 21px;
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
      color: #0d6efd;
      text-decoration: none;
    }

    span {
      display: block;
      width: 100%;
      text-align: center;
      color: #606060;
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.1px;

      a {
        font-weight: 600;
      }
    }

    .remember__container {
      display: flex;
      align-items: center;
      margin-top: 14px;
      p {
        margin: 0 20px -12px;
      }
      input {
        position: relative;
        z-index: 10;
        &::before {
          position: absolute;
          content: "";
          background-color: #f7f7f7;
          width: 20px;
          height: 20px;
          left: 0;
          top: 0;
          cursor: pointer;
          border-radius: 2px;
        }
        &:checked::before {
          content: "";
          background-color: #0d6efd;
          color: white;
        }
      }
    }
  }
`;
