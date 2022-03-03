import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import FeaturedArticlesHero from "../sections/articles/Featured.Articles.Hero";
// import FeaturedArticlesHero from "../sections/articles/Featured.Articles.Hero2";
import ArticlesList from "../sections/articles/Featured.Articles.List";


import { Template } from "@types";

const FeaturedPage: Template = ({ location, pageContext }) => {
  // const articles = pageContext.group;
  const { group: articles, category } = pageContext;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <FeaturedArticlesHero authors={authors} />
      <Section narrow>
        <ArticlesList articles={articles} currentPage={pageContext.index} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
    </Layout>
  );
};

export default FeaturedPage;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 64px;`}
`;

