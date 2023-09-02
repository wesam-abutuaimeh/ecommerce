// "use client";
// import React from 'react'
// import { EXTRA_SERVICES } from '@/mock/extraServices'
// import CustomImage from '@/components/atoms/CustomImage'
// import { Container } from '@/styles/commen';
// import { Flex, ExtraServices } from './style'
// import { H1 } from '@/components/atoms/Typography/style';

// const index = () => {
//     return (
//         <Container>
//             <ExtraServices>
//                 <H1>Our extra services</H1>
//                 <Flex>
//                     {EXTRA_SERVICES.map((service) => {
//                         return <div className='card' key={service.id}>
//                             <div>
//                                 <CustomImage src={service.src} alt={service.title} width="303" height="222" />
//                             </div>
//                             <div className='icon'>
//                                 {service.svg}
//                             </div>
//                             <span>{service.title}</span>
//                         </div>
//                     })}
//                 </Flex>
//             </ExtraServices>
//         </Container>
//     )
// }

// export default index
"use client";
import React from 'react';
import { EXTRA_SERVICES } from '@/mock/extraServices'
import styled from 'styled-components';
import ExtraServicesCard from '@/components/molecules/ExtraServicesCard';
import { H1 } from '@/components/atoms/Typography/style';
import { Container } from '@/styles/commen';

const ExtraServices = () => {
    return (
        <Container>
            <ExtraServicesSection>
                <H1>Our extra services</H1>
                <div className='cards'>
                    {EXTRA_SERVICES.map((data) => (
                        <ExtraServicesCard
                            key={data.icon}
                            image={data.image}
                            icon={data.icon}
                            text={data.text}
                        />
                    ))}
                </div>
            </ExtraServicesSection>
        </Container>
    );
};

const ExtraServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 30px;

  h3 {
    letter-spacing: -0.2px;
  }

  .cards {
    display: flex;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    gap: 1rem;
  }

  @media screen and (max-width: 992px) {
    .cards {
      justify-content: space-around;
    }
  }
`;

export default ExtraServices;
