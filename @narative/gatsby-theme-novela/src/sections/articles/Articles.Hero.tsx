import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Image from '@components/Image';
import Section from '@components/Section';
import mediaqueries from '@styles/media';
import { IAuthor } from '@types';

import { GridLayoutContext } from './Articles.List.Context';

const myQuery = graphql`
  {
    site: allSite {
      edges {
        node {
          siteMetadata {
            hero {
              writingHeading
              maxWidth
            }
          }
        }
      }
    }

    file(relativePath: {eq: "site-hero.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;


const ArticlesHero: React.FC<IAuthor> = ({ authors }) => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext,
  );

  const results = useStaticQuery(myQuery);
  const hero = results.site.edges[0].node.siteMetadata.hero;
  const heroImage = results.file.childImageSharp.fluid;
  
  return (
    <HeroContainer>
      <TextWrap>
        <Section narrow id="Articles__Hero">
          <HeadingContainer style={{ maxWidth: `${hero.maxWidth}px` }}>
            <HeroHeading dangerouslySetInnerHTML={{ __html: hero.writingHeading }} />
            <InfoText>
              Without words, apps would be an unusable jumble of shapes and icons.
            </InfoText>
          </HeadingContainer>
        </Section>
      </TextWrap>
      <ImageWrap>
        <Image
          src={heroImage}
          // imgStyle={{ objectFit: 'contain', objectPosition: 'bottom' }}
        />
      </ImageWrap>
    </HeroContainer>
  );
};

export default ArticlesHero;

const HeroContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin-top: -100px;
  height: 840px;
`;

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block
  height: 100%;
  width: 100%;
`;

const TextWrap = styled.div`
  position: relative;
  z-index: 1;
`;


const HeadingContainer = styled.div`
  margin: 250px 0 40px;
  
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
  background-image: linear-gradient(92.72deg, #E0EBF2 4.64%, #F2B5B0 87.93%);

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 56px
  `}

  ${mediaqueries.phablet`
    font-size: 56px;
  `}
`;

const InfoText = styled.p`
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
`;

const Anchor = styled(Link)`
  color: ${p => p.theme.colors.secondary};
  border-bottom: 1px solid ${p => p.theme.colors.secondary};
  margin-left: 6px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    border-bottom-color: ${p => p.theme.colors.accent};
  }
`;
