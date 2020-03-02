import React, { useContext } from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';
import Section from '@components/Section';
import mediaqueries from '@styles/media';
import { IAuthor } from '@types';

import { GridLayoutContext } from './Articles.List.Context';

const ArticlesHero: React.FC<IAuthor> = ({ authors }) => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext,
  );
  
  return (
    <Hero>
      <Section>
        <Header>
          {/* <HeroHeading>All awesome tips</HeroHeading> */}
        </Header>
      </Section>
    </Hero>
  );
};

export default ArticlesHero;

const Hero = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-image: url("/image_hero_article.jpg");
  margin-top: -100px;
  padding-top: 300px;
  margin-bottom: -210px;

  ${mediaqueries.tablet`
    background-image: url("/image_hero_article_mobile.jpg");
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  padding: 0 40px;

  ${mediaqueries.phablet`
    padding: 0;
  `}
`;
