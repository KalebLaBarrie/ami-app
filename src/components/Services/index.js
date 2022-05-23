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

import automatedWindowTreatment from '../../images/automatedwindowtreatments.png';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <TopLine>Our Services</TopLine>

      {/* <ServicesWrapper>
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
      </ServicesWrapper> */}
      <Card
        title="Automated window treatment"
        imageUrl={automatedWindowTreatment}
        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio temporibus numquam consequatur quidem repellendus nemo itaque ab eum optio non tempore sed dicta aliquid pariatur aspernatur, atque autem. Non, enim."
      />
    </ServicesContainer>
  );
};

export default Services;
