import React from "react";
import Link from "gatsby-link";

import { Hero } from "../elements";

const chunk = <h1>hai</h1>;

export default ({ data }) => {
    const page = data.markdownRemark,
        allPages = _.sortBy(
            data.allMarkdownRemark.edges,
            ({ node }) => node.fields.slug
        );

    const currentIndex = allPages.findIndex(
            ({ node: { fields: { slug } } }) => slug === page.fields.slug
        ),
        nextPage = allPages[currentIndex + 1],
        prevPage = allPages[currentIndex - 1];

    console.log(currentIndex);
    console.log(allPages.map(e => e.node.fields.slug));

    return (
        <div>
            <Hero>{page.frontmatter.title}</Hero>

            <p>
                You can read this segment in in {page.timeToRead} minutes.
                Solving the exercises might take longer.
            </p>
            <p>This segment covers 👇</p>
            <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
            <div
                dangerouslySetInnerHTML={{
                    __html: page.html
                }}
            />
            <p style={{ display: "flex", justifyContent: "space-between" }}>
                {prevPage ? (
                    <Link to={prevPage.node.fields.slug}>
                        👈 {prevPage.node.frontmatter.title}
                    </Link>
                ) : (
                    <Link to="/">👈 Home</Link>
                )}
                {nextPage ? (
                    <Link to={nextPage.node.fields.slug}>
                        {nextPage.node.frontmatter.title} 👉
                    </Link>
                ) : (
                    <Link to="/fin">🎊 Fin 👉</Link>
                )}
            </p>
        </div>
    );
};

export const query = graphql`
    query WorkshopPageQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            tableOfContents
            frontmatter {
                title
            }
            fields {
                slug
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
