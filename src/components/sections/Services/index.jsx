"use client";
import React from 'react';
import { EXTRA_SERVICES } from '@/mock/extraServices'
import ExtraServicesCard from '@/components/molecules/ExtraServicesCard';
import { H1 } from '@/components/atoms/Typography/style';
import { Container } from '@/styles/commen';
import { ExtraServicesSection } from './style';

const ExtraServices = () => {
  return (
    <Container>
      <ExtraServicesSection>
        <H1>Our extra services</H1>
        <div className='cards'>
          {EXTRA_SERVICES.map((data) => (
            <ExtraServicesCard key={data.id} image={data.src} icon={data.svg} text={data.title} />
          ))}
        </div>
      </ExtraServicesSection>
    </Container>
  );
};

export default ExtraServices;
