/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Junklab Games`,
    siteUrl: `https://junklabgames.github.io/junklabgames/`,
    description: `Junklab Games - Creative indie studio specialising in fun, casual mobile games`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `games`,
        path: `${__dirname}/src/images/games`,
      },
    },
  ],
};
