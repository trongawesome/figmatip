import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import mediaqueries from '@styles/media';

import Headings from '@components/Headings';
import Image from '@components/Image';

const CardSingleList = ({data}) => {

  const { edges } = data;
 
  return (
    <Wrap>
      {edges.map((item, index) => (
          <CardSingle
            key={index} href={item.node.url} data-a11y="false" target="_blank">

            <Image
              src={item.node.image.childImageSharp.fluid}
              alt={item.node.title}
              imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <TextWrap>
              <Title>
                {item.node.title}
              </Title>
              <Desc>
                {item.node.desc}
              </Desc>
              </TextWrap>
          </CardSingle>
        ))
      }
    </Wrap>
  );
};

export default CardSingleList;

const Wrap = styled.div`
  position: relative;
  margin-top: 80px;
`;

const CardSingle = styled.a`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 65% 35%;
  z-index: 1;
  position: relative;
  margin-bottom: 32px;
  height: 360px;
  background: ${p => p.theme.colors.backgroundDark};
`;

const TextWrap = styled.div`
  padding-right: 32px;
  padding-top: 24px;
  position: relative;
`;

const Title = styled(Headings.h2)`
  font-size: 24px;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  transition: color 0.3s ease-in-out;
  margin-bottom: 16px;

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}
`;

const Desc = styled.p`
color: ${p => p.theme.colors.secondary};
`;
