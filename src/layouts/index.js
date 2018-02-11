import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "prismjs/themes/prism-okaidia.css";
import "./index.css";

const Header = () => (
    <div
        style={{
            background: "rebeccapurple",
            marginBottom: "1.45rem"
        }}
    >
        <div
            style={{
                margin: "0 auto",
                maxWidth: 960,
                padding: "1.45rem 1.0875rem"
            }}
        >
            <h2 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        textShadow: "none"
                    }}
                >
                    Data visualization with React & D3v4 -{" "}
                    <small>workshop by Swizec</small>
                </Link>
            </h2>
        </div>
    </div>
);

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Data visualization with React & D3v4 - workshop by Swizec"
            meta={[
                {
                    name: "description",
                    content: "Data visualization with React & D3v4"
                },
                {
                    name: "keywords",
                    content: "react, workshop, d3, dataviz, data visualization"
                }
            ]}
        />
        <Header />
        <div
            style={{
                margin: "0 auto",
                maxWidth: 960,
                padding: "0px 1.0875rem 1.45rem",
                paddingTop: 0
            }}
        >
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
