module.exports = {
    siteMetadata: {
        title: "The baby angel",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
    ],
};