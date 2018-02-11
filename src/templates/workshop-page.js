import React from "react";

import { Hero } from "../elements";

const chunk = <h1>hai</h1>;

export default ({ data }) => {
    const page = data.markdownRemark;

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
        }
    }
`;
