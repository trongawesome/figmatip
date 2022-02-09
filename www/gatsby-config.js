require("dotenv").config();

const siteMetadata = {
  title: `Awesome Figma Tips`,
  name: `Awesome Figma Tips`,
  siteUrl: `https://awesomefigtips.com`,
  description: `Cool collections of curated tips to help you work faster with Figma. There are tips I had learn on the way. I realized that some people might need it.`,
  hero: {
    heading: `Hi, I’m Trong, <br/> product designer.`,
    writingHeading: `Tips to <br/> fasten <br/>Figma <br/>workflow.`,
    filesHeading: `Awesome <br/> Figma Files`,
    filesSub: `Fasten your next design project with this curated collection of awesome Figma files. Created by our awesome Figma community.`,
    pluginsHeading: `Awesome <br/> Figma Plugins`,
    pluginsSub: `When Figma introduced plugins, the tool became more awesome. I love them so much and I want to share with you all my favorite ones. So you can fasten your workflow, and of course, design better.`,
    maxWidth: 900,
  },
  social: [
    {
      url: `https://twitter.com/trongawesome`,
    },
    {
      name: 'medium',
      url: `https://medium.com/@trongawesome`,
    },
    {
      name: 'instagram',
      url: `https://www.instagram.com/trongawesome`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: false,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Awesome Figma Tips`,
      short_name: `Figma Tips`,
      start_url: `/`,
      background_color: `#090A0B`,
      display: `standalone`,
      icon: `src/assets/favicon.jpg`,
      include_favicon: false,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-55380266-5",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://medium.us16.list-manage.com/subscribe/post?u=bd56b6b313e273cdd466f5abc&amp;id=736a1779cd",
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
