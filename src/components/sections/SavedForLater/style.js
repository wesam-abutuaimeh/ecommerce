import styled from "styled-components";

export const StyledSavedForLater = styled.div`
  margin: 20px 0;
  .container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #e3e8ee;
    filter: drop-shadow(0px 3px 10px rgba(32, 32, 32, 0.1));
  }
  .cards {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    .card {
      .image {
        background-color: #e3e8ee;
        padding: 30px;
        border-radius: 6px;
        img {
          mix-blend-mode: multiply;
          padding: 30px;
        }
      }
      .price {
        color: #1c1c1c;
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
      }
      .title {
        color: #606060;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.2px;
        font-size: 16px;
        margin: 10px 0;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: 1px solid #e3e8ee;
        border-radius: 6px;
        font-weight: 600;
      }
    }
  }
`;
