import React from "react";
import Link from "gatsby-link";
import { sortBy } from "lodash";
import InstagramEmbed from "react-instagram-embed";

import { Signature } from "../elements";
import PageNavigation from "../components/PageNavigation";

const Fin = ({ data: { allMarkdownRemark: { edges } } }) => {
    const back = _.sortBy(edges, ({ node }) => node.fields.slug)[
        edges.length - 1
    ];

    return (
        <div>
            <h1>Before you leave 👇</h1>
            <p>
                You have reached a relaxing part of the day! Who's up for a
                beer? 🍻
            </p>
            <p>
                Thank you for coming to my workshop! I hope you had a great time
                and feel confident in your ability to build data visualizations
                with React and D3. We covered a lot of ground today so don't
                worry if things feel a little shakey.
            </p>
            <p>
                This page is staying up so you can refer back, if you ever need
                a quick mental refresher.
            </p>
            <p>
                <big>
                    Please fill out{" "}
                    <a href="https://swizecteller.typeform.com/to/Jd8xjQ">
                        this feedback form
                    </a>. It helps me improve. <br />I'll give you free access
                    to ReactForDataViz.com in return. :)
                </big>
            </p>
            <p>Enjoy this relaxing video of Kiwi eating a chip</p>
            <InstagramEmbed url="https://www.instagram.com/p/BR9xFYulmiL/" />

            <PageNavigation prevPage={back} />

            <Signature />
        </div>
    );
};

export const query = graphql`
    query FinQuery {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default Fin;
