module.exports = {
  siteMetadata: {
    siteUrl: "https://www.willdelavega.com",
    title: "wv-portfolio",
  },
  plugins: [
      "gatsby-plugin-sass",
      {
        resolve: 'gatsby-plugin-styled-components',
        options: {
          // ssr: false
          // displayName: false,
          minify: false
        },
      }
    ],
};
