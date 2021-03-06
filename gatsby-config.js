require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `SuchanaChakrabarti`,
    siteTitleAlt: `SuchanaChakrabarti_Portfolio`,
    siteurl: `/form`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SuchanaChakrabarti_Portfolio`,
        short_name: `SuchanaChakrabarti`,
        description: `MY PORTFOLIO`,
        start_url: `/`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
