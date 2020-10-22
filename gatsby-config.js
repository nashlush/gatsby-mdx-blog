
module.exports = {
  plugins: [
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `pages`,
        src : `${__dirname}/src/pages`,
      },
    },
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `posts`,
        src : `${__dirname}/src/posts`,
      },
    },
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `images`,
        src : `${__dirname}/src/images`,
      },
    },
  ],
}
