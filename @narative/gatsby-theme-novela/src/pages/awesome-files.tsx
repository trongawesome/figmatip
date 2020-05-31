import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import ArticlesGradient from "@components/ArticlesGradient";

import PageHero from "../sections/others/Page.Hero";
import CardSingleList from "../sections/articles/Card.Single.List";

const seoImage = '/preview-figma-files.jpg';

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

  allSite {
    edges {
      node {
        siteMetadata {
          hero {
            filesHeading
            filesSub
            maxWidth
          }
          title
        }
      }
    }
  }
}
`;

const AwesomeFiles = ({ location }) => {

  const result = useStaticQuery(siteQuery);
  const data = result.allFigmaFilesYaml;
  const siteSEO = result.allSite.edges[0].node.siteMetadata;

  return (
    <Layout>

      <SEO
        pathname={location.pathname} 
        title={siteSEO.hero.filesHeading + " - " + siteSEO.title}
        description={siteSEO.hero.filesSub}
        image={seoImage}
      />

      <PageHero
        heading={siteSEO.hero.filesHeading + "."}
        subtitle={siteSEO.hero.filesSub}
        maxWidth={siteSEO.hero.maxWidth}
      />
      <Section narrow>
        <CardSingleList data={data} />
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default AwesomeFiles;
