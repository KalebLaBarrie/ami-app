import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import Card from '../Card';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  TopLine,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <TopLine>Our Services</TopLine>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Audiovisual Installations</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            eaque?
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Smart Home Automation</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
            placeat.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Audio/Video Matrix Systems</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            assumenda.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      {/* <Card /> */}
    </ServicesContainer>
  );
};

export default Services;
