
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
    `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     {
       resolve : `gatsby-plugin-mdx`,
       options : {
         extensions: [`.md`,`.mdx`],
         gatsbyRemarkPlugins:[
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 1200,
             },
           },
         ] 
       },
     },
     {
       resolve: `gatsby-plugin-google-fonts`,
       options: {
         fonts: [
           `roboto mono`,
           `muli\:400,400i,700,700i`,
         ],
         display: "swap",
       },
     },
  ],
}
