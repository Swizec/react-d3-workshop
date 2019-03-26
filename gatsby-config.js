module.exports = {
    siteMetadata: {
        title: "React for DataViz (with D3) by Swizec"
    },
    plugins: [
        "gatsby-plugin-react-next",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography.js"
            }
        },
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: `language-`
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-code-repls`,
                        options: {
                            externals: [
                                "https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js",
                                "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"
                            ],
                            dependencies: ["d3"],
                            codesandbox: ["react", "react-dom", "d3"],
                            html: '<div id="root"></div>',
                            directory: `${__dirname}/examples/`,
                            target: "_blank"
                        }
                    },
                    `gatsby-remark-autolink-headers`
                ]
            }
        },
        `gatsby-plugin-twitter`,
        `gatsby-plugin-nprogress`
    ]
};