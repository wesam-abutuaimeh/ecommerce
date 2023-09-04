import styled from "styled-components";

export const StyledHomeAndOutdoor = styled.div`
  .container {
    display: flex;
    height: 260px;
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #f7fafc;
    filter: drop-shadow(0px 3px 10px rgba(32, 32, 32, 0.1));

    .hero {
      background-image: url("/Consumer_electronics_and_gadgets.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 440px;
      padding: 20px;
      position: relative;

      h1 {
        line-height: 26px;
        margin-bottom: 20px;
      }
      button {
        font-size: 16px;
        font-weight: 500;
      }

      h1,
      button {
        max-width: 130px;
        z-index: 10;
        position: relative;
      }

      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0.8;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.3) 100%
          ),
          lightgray 50% / cover no-repeat;
        border-radius: 6px;
      }
    }

    .products {
      display: flex;
      flex-wrap: wrap;
      border-radius: 6px;
      .card {
        display: flex;
        width: 223.861px;
        background: #fff;
        padding: 20px;

        div {
          width: 138px;
          color: #1c1c1c;
          font-family: Inter;
          p {
            width: 138px;
          }
        }
        span {
          display: inline-block;
          max-width: 60px;
          color: #8b96a5;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 10px;
        }
      }
    }
  }
`;
