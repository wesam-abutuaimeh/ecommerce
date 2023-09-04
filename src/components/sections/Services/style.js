import styled from "styled-components";

export const ExtraServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 30px 0;

  h3 {
    letter-spacing: -0.2px;
  }
  P {
    max-width: 175px;
    font-weight: 500;
    line-height: 22px;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  @media screen and (max-width: 992px) {
    .cards {
      justify-content: space-around;
    }
  }
`;
