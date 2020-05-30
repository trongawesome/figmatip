import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import ArticlesGradient from "@components/ArticlesGradient";

import CardSingleList from "../sections/articles/Card.Single.List";

// const seoImage = '/trongnguyen.co-seo-little-big-grid.jpg';

const siteQuery = graphql`
{
  allFigmaFilesYaml {
    edges {
      node {
        title
        desc
        url
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`;

const ImageGallery = ({ location }) => {

  const result = useStaticQuery(siteQuery);
  const data = result.allFigmaFilesYaml;
  // const siteSEO = result.allSite.edges[0].node.siteMetadata;

  return (
    <Layout>
      {/* <SEO
        pathname={location.pathname} 
        title={siteSEO.hero.littleGalleryHeading + " - " + siteSEO.title}
        description={siteSEO.hero.littleGallerySubtitle}
        image={seoImage}
      />
      <PageHero
        heading={siteSEO.hero.littleGalleryHeading + "."}
        subtitle={siteSEO.hero.littleGallerySubtitle}
        maxWidth={siteSEO.hero.maxWidth}
      />
       */}
      <Section narrow>
        <CardSingleList data={data} />
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default ImageGallery;
