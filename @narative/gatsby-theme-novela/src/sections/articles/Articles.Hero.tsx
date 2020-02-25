import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Image from '@components/Image';
import Section from '@components/Section';
import mediaqueries from '@styles/media';
import { IAuthor } from '@types';
import Icons from "@icons";

import { GridLayoutContext } from './Articles.List.Context';

const myQuery = graphql`
  {
    site: allSite {
      edges {
        node {
          siteMetadata {
            hero {
              writingHeading
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
          <HeroContent>
            <HeadingContainer>
              <HeroHeading dangerouslySetInnerHTML={{ __html: hero.writingHeading }} />
              <InfoText>
                Small but awesome tips to work faster in Figma.
              </InfoText>
            </HeadingContainer>
            <Logo>
              <Icons.FigmatipLogo />
            </Logo>
          </HeroContent>
        </Section>
      </TextWrap>
      <ImageWrap>
        <Image
          src={heroImage}
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
  height: 800px;

  ${mediaqueries.tablet`
    height: 536px;
  `}

`;

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;

  & > div {
    height: 100%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-image: linear-gradient(90deg,#090A0B 0,rgba(9, 10, 11,.98556487) .97%,rgba(9, 10, 11,.9451312) 2.07833333%,rgba(9, 10, 11,.88300656) 3.29666667%,rgba(9, 10, 11,.80349854) 4.60166667%,rgba(9, 10, 11,.71091472) 5.96666667%,rgba(9, 10, 11,.60956268) 7.365%,rgba(9, 10, 11,.50375) 8.77166667%,rgba(9, 10, 11,.39778426) 10.16%,rgba(9, 10, 11,.29597303) 11.505%,rgba(9, 10, 11,.20262391) 12.78%,rgba(9, 10, 11,.12204446) 13.95833333%,rgba(9, 10, 11,.05854227) 15.01666667%,rgba(9, 10, 11,.01642493) 15.92833333%,rgba(9, 10, 11,0) 16.66666667%,rgba(9, 10, 11,0) 83.33333333%,rgba(9, 10, 11,.01642493) 84.07166667%,rgba(9, 10, 11,.05854227) 84.98333333%,rgba(9, 10, 11,.12204446) 86.04166667%,rgba(9, 10, 11,.20262391) 87.22%,rgba(9, 10, 11,.29597303) 88.495%,rgba(9, 10, 11,.39778426) 89.84%,rgba(9, 10, 11,.50375) 91.22833333%,rgba(9, 10, 11,.60956268) 92.635%,rgba(9, 10, 11,.71091472) 94.03333333%,rgba(9, 10, 11,.80349854) 95.39833333%,rgba(9, 10, 11,.88300656) 96.70333333%,rgba(9, 10, 11,.9451312) 97.92166667%,rgba(9, 10, 11,.98556487) 99.03%,#090A0B),linear-gradient(0deg,#090A0B 0,#090A0B 21.48148148%,rgba(9, 10, 11,.98556487) 23.63703704%,rgba(9, 10, 11,.9451312) 26.1%,rgba(9, 10, 11,.88300656) 28.80740741%,rgba(9, 10, 11,.80349854) 31.70740741%,rgba(9, 10, 11,.71091472) 34.74074074%,rgba(9, 10, 11,.60956268) 37.84814815%,rgba(9, 10, 11,.50375) 40.97407407%,rgba(9, 10, 11,.39778426) 44.05925926%,rgba(9, 10, 11,.29597303) 47.04814815%,rgba(9, 10, 11,.20262391) 49.88148148%,rgba(9, 10, 11,.12204446) 52.5%,rgba(9, 10, 11,.05854227) 54.85185185%,rgba(9, 10, 11,.01642493) 56.87777778%,rgba(9, 10, 11,0) 58.51851852%)
  }
`;

const TextWrap = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 480px 1fr;
  column-gap: 0;

  ${mediaqueries.desktop`
    grid-template-columns: 420px 1fr;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}

`;

const HeadingContainer = styled.div`
  margin: 280px 0 40px;
  
  ${mediaqueries.tablet`
    width: 100%;
    margin-top: 200px;
  `}
`;

const Logo = styled.div`
  position: relative;
  width: 504px;
  justify-self: center;
  margin-top: 136px;

  ${mediaqueries.tablet`
   display: none;
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
    font-size: 48px
  `}

  ${mediaqueries.tablet`
    font-size: 44px;
    text-align: center;
  `}
`;

const InfoText = styled.p`
  font-size: 18px;
  margin-top: 16px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};

  ${mediaqueries.tablet`
    text-align: center;
  `}
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
