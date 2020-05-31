import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';

interface HeroProps {
    heading: string;
    subtitle?: string;
    maxWidth: string;
  }

const PageHero: React.FC<HeroProps> = ({ heading, subtitle, maxWidth }) => {

  return (
    <Section narrow>
      <HeadingContainer style={{ maxWidth: `${maxWidth}px` }}>
        <HeroHeading dangerouslySetInnerHTML={{ __html: heading }} />
        <InfoText>
          {subtitle}
        </InfoText>
      </HeadingContainer>
    </Section>
  );
};

export default PageHero;

const HeadingContainer = styled.div`
  margin: 104px 0 112px;
  
  ${mediaqueries.desktop`
    width: 80%;
  `}
  
  ${mediaqueries.tablet`
    width: 100%;
  `}
`;
  
const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-size: 64px;
  line-height: 1.15;
  font-family: ${p => p.theme.fonts.title};
  color: transparent;
  -webkit-background-clip: text;
  // background-image: linear-gradient(92.72deg, #E0EBF2 4.64%, #F2B5B0 87.93%);
  background-image: ${p => p.theme.colors.gradientText};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 48px
  `}

  ${mediaqueries.tablet`
    font-size: 44px;
    text-align: center;
  `}
`;

const InfoText = styled.p`
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};

  ${mediaqueries.tablet`
    font-size: 16px;
    text-align: center;
  `}
`;

