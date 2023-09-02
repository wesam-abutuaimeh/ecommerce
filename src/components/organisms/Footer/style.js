import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #fff;
  ul li {
    display: inline-block;
  }
  .container {
    .footer__cards {
      display: flex;
      justify-content: space-between;
      padding: 40px 0 20px;

      .company__info {
        p {
          width: 276px;
          margin: 15px 0;
          font-weight: 400;
          color: #505050;
          line-height: 24px;
          letter-spacing: -0.2px;
        }
        li:not(:last-child) {
          margin-right: 10px;
        }
      }
      .about,
      .partnership,
      .information,
      .for__users,
      .download__apps {
        h3 {
          font-weight: 700;
          color: #1c1c1c;
          line-height: 22px;
          margin-bottom: 10px;
        }
        ul li {
          display: block;
          margin: 5px 0;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.2px;
          a {
            color: #8b96a5;
          }
        }
      }
    }
  }
  .copyright {
    height: 68px;
    border-top: 1px solid #e3e8ee;
    background: #eff2f4;
    display: grid;
    place-items: center;
  }
`;
