import React from "react";
import Link from "gatsby-link";

import { Navigation } from "../elements";

const PageNavigation = ({ prevPage, nextPage }) => (
    <Navigation>
        <h2>
            {prevPage ? (
                <Link to={prevPage.node.fields.slug}>
                    👈 {prevPage.node.frontmatter.title}
                </Link>
            ) : (
                <Link to="/">👈 Home</Link>
            )}
        </h2>
        <h2>
            {typeof nextPage === "undefined" ? null : nextPage ? (
                <Link to={nextPage.node.fields.slug}>
                    {nextPage.node.frontmatter.title} 👉
                </Link>
            ) : (
                <Link to="/fin">🎊 Fin 👉</Link>
            )}
        </h2>
    </Navigation>
);

export default PageNavigation;
