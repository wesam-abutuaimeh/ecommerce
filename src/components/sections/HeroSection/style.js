import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #e3e8ee;
  border-radius: 2px;
  margin-top: 20px;
`;

export const CategoriesLinks = styled.ul`
  margin-right: 13px;
  li {
    width: 250px;
    height: 40px;
    list-style: none;
    border-radius: 6px;

    &:hover {
      background-color: #e5f1ff;
      a {
        color: #1c1c1c;
      }
    }
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  a {
    display: block;
    font-weight: 500;
    text-decoration: none;
    color: #505050;
    padding: 10px;
    padding: 10px;
  }
`;

export const CtaWithImg = styled.div`
  position: relative;

  .txt {
    position: absolute;
    top: 56px;
    left: 44px;

    p {
      font-size: 28px;
      font-weight: 400;

      &.electronic__items {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 17px;
      }
    }

    button {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 15px;
  .start {
    background-color: #e3f0ff;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 6px;

    button {
      margin-bottom: 5px;
    }
  }

  .new__suplier {
    width: 200px;
    height: 95px;
    background: #f38332;
    color: #fff;
    padding: 16px;
    border-radius: 6px;
    font-family: Inter;
    font-weight: 400;
  }

  .preferences {
    width: 200px;
    height: 95px;
    background: #55bdc3;
    color: #fff;
    padding: 16px;
    border-radius: 6px;
    font-family: Inter;
    font-weight: 400;
  }
`;
