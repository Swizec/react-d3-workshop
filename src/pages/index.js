import React from "react";
import Link from "gatsby-link";
import InstagramEmbed from "react-instagram-embed";

import Swizec from "../images/swizec.jpg";
import PieBarchart from "../images/connected-dataviz.mp4";
import DashboardViz from "../images/dog-dashboard-scatterplots.mp4";
import RockOn from "../images/rock-on.gif";
import { Video, SignoffImg, Signature, BlankUl } from "../elements";
import JohnSnow from "../images/john-snow-cholera-map.jpeg";
import Salaries from "../images/salaries.gif";
import Datasaurus from "../images/datasaurus.gif";

const MDLink = ({ node }) => (
    <div key={node.id}>
        <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: node.tableOfContents }} />
    </div>
);

const ListContentPages = ({ data }) => {
    const pages = data.allMarkdownRemark.edges;

    return (
        <div>
            <h1>Setlist</h1>
            {_.sortBy(pages, ({ node }) => node.fields.slug).map(MDLink)}

            <h2>
                <Link to="/fin">🎊 Fin</Link>
            </h2>
        </div>
    );
};

const Welcome = () => (
    <div>
        <a href="https://swizec.com">
            <img src={Swizec} title="Swizec at Write the Docs Prague in 2014" />
        </a>
        <h1>Hello friend 👋</h1>

        <p>
            Welcome to Swizec's React for Data Visualization (with D3) workshop.
        </p>

        <p>
            Today you're in for a treat. You're going to build a data
            visualization and learn about the correlation between dog size,
            intelligence, and weight. Very important data science!.
        </p>
        <p>
            While you do that, you'll learn enough D3 to understand any example
            out there, a few tricks to quickly meet your deadlines, a scalable
            approach to dataviz components your whole team can understand, and a
            bunch of animation stuff. Because animation is cool and gets you
            likes on Twitter.
        </p>
        <p>
            You can access this page forever. It's yours to keep and use as a
            reference when you work. I make tweaks every time I give a new
            workshop.
        </p>
        <p>
            To get the most out of today's workshop, you should be familiar with
            👇
        </p>
        <ul>
            <li>React</li>
            <li>ideas behind componentization</li>
            <li>stateful/declarative rendering</li>
            <li>JSX</li>
            <li>modern ES6+ syntax</li>
            <li>component lifecycles</li>
        </ul>
        <p>
            <strong>But fear not!</strong>
        </p>
        <p>I am here to guide you. We'll go through everything together.</p>
        <p>Your day is structured as a codealong.</p>
        <p>
            You'll hear some theory, then we'll walk through some code, you'll
            do an exercise, then we solve it together. Everything builds towards
            the final dashboard 👉 a set of scatterplots that work together.
        </p>

        <p>
            <Video src={DashboardViz} autoPlay loop muted />
        </p>
        <p>
            We're gonna keep it simple. React, D3, and Chroma. No Redux or 3rd
            party visualization libraries. Our goal is to really understand how
            things work, not to talk about a thousand libraries you'll forget by
            tomorrow.
        </p>
    </div>
);

const Goals = () => (
    <div>
        <h1>Our goal today</h1>
        <p>Think of this as our setlist 🤘</p>
        <p>
            Our goal today is to get you comfortable with modern React,
            understand D3, and have the wisdom to choose the right approach to
            solve your specific challenges.
        </p>
        <BlankUl>
            <li>❓ why dataviz? why react? why d3?</li>
            <li>📕 when you should or shouldn't use an existing library</li>
            <li>
                🆕 overview of React dataviz libraries good for a quick start
            </li>
            <li>🎓 learn to understand any D3 example out there</li>
            <li>🏎 quickly integrate any D3 code in your React project</li>
            <li>🔧 integrate D3 and React in a scaleable maintainable way</li>
            <li>🎣 refactoring to React Hooks</li>
            <li>⚒ build simple animations with transitions</li>
            <li>⚒ build complex animations with a game loop</li>
            <li>🎨 hybrid animations combining transitions and game loops</li>
            <li>💽 connect multiple charts to the same data</li>
        </BlankUl>
    </div>
);

const WhyDataviz1 = () => (
    <div>
        <h1>Question for you ❓</h1>
        <p>
            <big>
                What do engineering salaries, an 1854 cholera outbreak, and T.
                Rex have in common?
            </big>
        </p>
    </div>
);

const WhyDataviz2 = () => (
    <div>
        <h2>
            What do engineering salaries, an 1854 cholera outbreak, and T. Rex
            have in common?
        </h2>
        <p>You understand them better with datavisualization!</p>
        <a href="https://swizec.github.io/h1b-software-salaries/">
            <img src={Salaries} />
        </a>
        <p>Salary visualization shows who and where makes the most</p>
        <a href="https://en.wikipedia.org/wiki/John_Snow#Cholera">
            <img src={JohnSnow} style={{ height: 500 }} />
        </a>
        <p>
            John Snow's cholera map shows link between disease and drinking
            water
        </p>
        <a href="https://www.fastcompany.com/90124722/these-12-graphics-explain-why-data-viz-is-absolutely-crucial">
            <img src={Datasaurus} />
        </a>
        <p>Datasaurus show summary statistics aren't the whole story.</p>
    </div>
);

const WhoSwiz = () => (
    <div>
        <h2>Swizec Teller</h2>
        <InstagramEmbed
            url="https://www.instagram.com/p/Bd_SGSzlBrb/"
            maxWidth={480}
            hideCaption
        />
        <p>
            Hi, I’m Swizec Teller, a geek with a hat. I help programmers become
            software engineers. Through this workshop I'm going to teach you all
            I know about building data visualization with React & D3.
        </p>
        <p>
            You can find out stuff about me, if you ask Google. But generally
            speaking I have:
        </p>
        <ul>
            <li>been coding for over 20 years</li>
            <li>
                <a href="https://swizec.com">writing a blog</a> for 12 years<br />
                (please don't read early entries, I was in high school lol)
            </li>
            <li>
                published{" "}
                <a href="http://nightowlsbook.com/">
                    Why Programmers Work at Night
                </a>, that was fun
            </li>
            <li>
                published{" "}
                <a href="https://www.packtpub.com/web-development/data-visualization-d3js">
                    Data Visualization with D3.js
                </a>, dare ask me about publishers
            </li>
            <li>
                self-published 3 editions of{" "}
                <a href="https://www.swizec.com/reactd3js/">React + D3</a>,
                that's been great
            </li>
            <li>
                created the{" "}
                <a href="https://reactfordataviz.com">
                    React for Data Visualization
                </a>{" "}
                video course
            </li>
            <li>
                made this{" "}
                <a href="https://es2017.io">
                    interactive ES6+ cheatsheet &mdash; es2017.io
                </a>
            </li>
            <li>
                taught in-person workshops to engineers from companies big and
                small
            </li>
        </ul>
    </div>
);

const Start = () => (
    <div>
        <h1>Let's get down to business</h1>
        <p>
            This is an interactive workshop. If you have a question, <b>ask</b>.
            If something doesn't make sense, <b>ask</b>. If something is
            confusing, <b>ask</b>. If I'm not making sense, <b>ask</b>. If your
            code doesn't work, <b>ask</b>.
        </p>
        <p>
            You will write code today. Some code will live on your computer,
            some in the browser.
        </p>
        <p>We will take breaks.</p>
        <p>
            <img src="http://i.imgur.com/04VI9lT.gif" />
        </p>
        <h2>But first ask yourself this: Why are you here?</h2>
        <p>
            Answering that question will help you get the most out of today. You
            can call your answer out to the group, or just think about it.
        </p>
        <p>
            Code you'll write today works with <b>React 16</b> and uses modern{" "}
            <b>ES6+</b>. We'll assume a development environment created with{" "}
            <code>create-react-app</code>. This gives us some special powers. I
            will point them out.
        </p>
    </div>
);

const ProjectLink = ({ url, children }) => (
    <li>
        <a href={url}>{children}</a>
    </li>
);

const CoolThings = () => (
    <div>
        <h1>Here are some cool things I've built with React & D3</h1>
        <p>
            These demo well, but aren't practical. Little experiments to see how
            far we can push this stuff :)
        </p>
        <ul>
            <ProjectLink url="http://swizec.github.io/react-d3-enter-exit-transitions/">
                Animated typing
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/declarative-canvas-react-konva/">
                Canvas billiards game
            </ProjectLink>
            <ProjectLink url="http://swizec.github.io/react-particles-experiment/">
                Particle generator
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/react-fractals/">
                Pythagorean fractal tree
            </ProjectLink>
            <ProjectLink url="http://swizec.github.io/space-invaders/">
                Space Invaders
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/h1b-software-salaries/">
                Tech salary visualization
            </ProjectLink>
            <ProjectLink url="https://swizec.github.io/migrations-map/">
                A zoomable pannable map of global migrations
            </ProjectLink>
            <ProjectLink url="https://build-qoyobtahea.now.sh/">
                An example of using flexbox in SVG
            </ProjectLink>
            <ProjectLink url="https://dist-exhowcijhf.now.sh/">
                Using React Suspense and Time Slicing in dataviz
            </ProjectLink>
            <ProjectLink url={PieBarchart}>
                A connected piechart barchart viz of travel expenses
            </ProjectLink>
            <ProjectLink url="https://create-react-app-swizec.swizec-react-dataviz.now.sh/results?values=W1tbIiIsMiwxLDFdLFsiIiwxLDEsMF0sWyIiLDIsMCwwXSxbIiIsMSwyLDJdLFsiIiwxLDEsMF1dLFtbIiIsMiwyLDBdLFsiIiwxLDEsMl0sWyIiLDEsMiwxXSxbIiIsMiwxLDBdLFsiIiwxLDIsMV1dLFtbIiIsMSwxLDJdLFsiIiwyLDEsMV0sWyIiLDIsMSwxXSxbIiIsMiwyLDJdLFsiIiwxLDEsMV0sWyIiLDIsMCwwXV0sW1siIiwxLDIsMV0sWyIiLDIsMSwxXSxbIiIsMiwxLDJdLFsiIiwyLDIsMF0sWyIiLDEsMiwxXV0sW1siIiwyLDEsMl0sWyIiLDIsMSwxXSxbIiIsMSwxLDFdLFsiIiwxLDAsMV0sWyIiLDIsMSwwXV0sW1siIiwxLDEsMV0sW3RydWUsMiwxLDFdLFt0cnVlLDIsMiwyXSxbIiIsMiwxLDBdLFt0cnVlLDIsMiwxXSxbIiIsMSwyLDFdXSxbWzEsMiwxLDBdLFsxLDIsMSwxXSxbMSwxLDEsMV0sWzEsMiwxLDBdLFsxLDEsMiwyXV0sW1sxLDFdLFsyLDJdLFsxLDFdLFsyXSxbMV0sWyIiXSxbbnVsbF1dXQ==&yourOrg=WzEsMSwxLDMsMV0=">
                Live donut bar chart thing
            </ProjectLink>
            <ProjectLink url="/">This page :)</ProjectLink>
        </ul>

        <p>No, these projects are not practical, but they demo well :)</p>
    </div>
);

const IndexPage = ({ data }) => (
    <div>
        <Welcome />
        <WhyDataviz1 />
        <Goals />
        <CoolThings />
        <WhoSwiz />
        <WhyDataviz2 />

        <Start />

        <p>Here's our setlist for today 👇</p>

        <ListContentPages data={data} />

        <a href="https://www.youtube.com/watch?v=QxIWDmmqZzY">
            <SignoffImg src={RockOn} title="Rock On 🤘" />
        </a>
        <Signature />
    </div>
);

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    timeToRead
                    tableOfContents
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

export default IndexPage;
