import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import MDXRenderer from "@components/MDX";

import mediaqueries from '@styles/media';
import { IArticle } from '@types';

import { GridLayoutContext } from './Articles.List.Context';

interface ArticlesListProps {
  articles: IArticle[];
  alwaysShowAllDetails?: boolean;
}

interface ArticlesListItemProps {
  article: IArticle;
  counter: number;
  narrow?: boolean;
}

const ArticlesList: React.FC<ArticlesListProps> = ({
  articles,
  alwaysShowAllDetails,
}) => {
  if (!articles) return null;

  const { gridLayout = 'tiles', hasSetGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );

  const articlePairs = articles.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  useEffect(() => getGridLayout(), []);

  return (
    <ArticlesListContainer
      style={{ opacity: hasSetGridLayout ? 1 : 0 }}
      alwaysShowAllDetails={alwaysShowAllDetails}
    >
      <List>
        {articles.map((ap, index) => {
          return (
            <ListItem key={index} article={ap} counter={articles.length - index}/>
          );
        })}
      </List>
    </ArticlesListContainer>
  );
};

export default ArticlesList;

const ListItem: React.FC<ArticlesListItemProps> = ({ article, narrow, counter }) => {
  if (!article) return null;

  const hasOverflow = narrow && article.title.length > 35;

  return (
    <ArticleWrap>
      <Item>
        <div>
          <TitleWrap>
            {
              counter < 10
              ? <Counter> {"#0" + counter} </Counter>
              : <Counter> {"#" + counter} </Counter>
            }
            <Title dark hasOverflow={hasOverflow}>
              {article.title}
            </Title>
          </TitleWrap>
          <MDXRenderer content={article.body}>
          </MDXRenderer>
        </div>
      </Item>
    </ArticleWrap>
  );
};

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const showDetails = css`
  p {
    display: -webkit-box;
  }

  h2 {
    margin-bottom: 10px;
  }
`;

const ArticlesListContainer = styled.div<{ alwaysShowAllDetails?: boolean }>`
  transition: opacity 0.25s;
  margin-top: 160px;
  ${p => p.alwaysShowAllDetails && showDetails}

  ${mediaqueries.tablet`
    margin-top: 80px;
  `}

`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-template-rows: 2;

  &:not(:last-child) {
    margin-bottom: 75px;
  }

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
    
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const Item = styled.div`
  position: relative;
  margin-bottom: 80px;

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  ${mediaqueries.phablet`
    margin-bottom: 40px;
  `}

`;

const ImageContainer = styled.div`
  position: relative;
  height: 280px;
  margin-bottom: 30px;
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  & > div {
    height: 100%;
  }

  ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 35px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
  `}
`;

const TitleWrap = styled.div`
  max-width: 360px;
`;


const Title = styled(Headings.h2)`
  font-size: 28px;
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: 10px;
  transition: color 0.3s ease-in-out;
  line-height: 1.15;

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;
    max-width: 100%;
  `}
`;

const Counter = styled.div`
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-size: 48px;
  color: ${p => p.theme.colors.grey};
  font-family: ${p => p.theme.fonts.title};

  ${mediaqueries.phablet`
    
  `}
`;

const ArticleWrap = styled.div`
  position: relative;
`;

const ArticleLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 30px 40px -20px rgba(41, 65, 69, 0.32),
      0 30px 30px -30px rgba(41, 65, 69, 0.52);
  }

  &:hover h2,
  &:focus h2 {
    color: ${p => p.theme.colors.accent};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
