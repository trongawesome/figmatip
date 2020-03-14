import React from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';
import Section from '@components/Section';

import mediaqueries from '@styles/media';
import { IArticle, IAuthor } from '@types';

interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}

const ArticleHero: React.FC<ArticleHeroProps> = ({ article, authors }) => {

  return (
    <Hero>
      <Section>
        <Header>
          <HeroHeading>{article.title}</HeroHeading>
        </Header>
      </Section>
    </Hero>
  );
};

export default ArticleHero;

const Hero = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-image: ${p => p.theme.colors.heroArticleBackgroundDesktop};
  margin-top: -100px;
  padding-top: 220px;
  
  ${mediaqueries.tablet`
    background-image: ${p => p.theme.colors.heroArticleBackgroundMobile};
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

const HeroHeading = styled(Headings.h1)`
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: 25px;
  font-weight: ${p => p.theme.fontsWeight.bold};
  text-align: center;
  color: transparent;
  -webkit-background-clip: text;
  background-image: ${p => p.theme.colors.gradientText};
  
  ${mediaqueries.tablet`
    margin-bottom: 20px;
  `}
`;

