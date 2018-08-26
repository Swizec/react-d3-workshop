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
            <h1>Setlist - Day 1</h1>

            {_.sortBy(pages, ({ node }) => node.fields.slug)
                .slice(0, 4)
                .map(MDLink)}

            <h1>Setlist - Day 2</h1>

            {_.sortBy(pages, ({ node }) => node.fields.slug)
                .slice(4, pages.length)
                .map(MDLink)}

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

        <p>Welcome to Swizec's Data visualization with React & D3 workshop.</p>

        <p>
            This is often a 2 day workshop that starts with the basics of React
            and ends with beautiful visualizations. Today we're focusing on the
            visualization part. The exercises we work on together build towards
            a final visualization.
        </p>
        <p>
            These materials are going to stay online forever. I make tweaks when
            I do new workshops so check back any time.
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
        {/* <p>
            Today we're going to build your first webapp with React and Friends.
            We're going to use React to build components, React Router for
            routing, styled components for styling, and Redux for state
            management.
        </p>
        <p>
            {`<Tomorrow>`} we're going to learn the basics of D3v4, look at
            several strategies for integration with React, then build a gorgeous
            visualization or two.
        </p>
        <p>
            Your 1st day starts at the very beginning:{" "}
            <em>
                Why React? What problem does it solve? What makes it tick?
                What's the ecosystem like? Why are components the future?
            </em>
        </p>
        <p>
            But fear not, we won't get stuck on the basics. By the end of your
            first, you'll have built a full webapp and understand how it works.
        </p>
        <p>An infinite series of fun gifs like this 👇</p>
        <p>
            <Video src={MortyMindblowers} autoPlay loop />
        </p>
        <p>
            Your 2nd day starts with the idea that you magically remember
            everything and are now a pro. Don't worry if you're not, Swizec is
            here to help and he's going to code everything with you. If you get
            lost, sit back and observe. Checkout the example repo at key points
            so you can catch up.
        </p> */}

        <p>
            Exercises build towards this dashboard showing the connection
            between dog breed size, popularity, and intelligence. It's a set of
            scatterplots that work together.
        </p>

        <p>
            In the 4 hour format final assembly will remain as homework for you,
            but you'll have built all the necessary components. You can see it
            live, <a href="https://build-qoyobtahea.now.sh/">here</a>
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
            <li>⚒ build simple animations with transitions</li>
            <li>⚒ build complex animations with a game loop</li>
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
                published 3 editions of{" "}
                <a href="https://www.swizec.com/reactd3js/">React + D3</a>,
                that's been great
            </li>
            <li>helped over 10,000 people become better engineers</li>
            <li>
                made this{" "}
                <a href="https://es2017.io">
                    interactive ES6+ cheatsheet &mdash; es2017.io
                </a>
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
            <ProjectLink url={PieBarchart}>
                A connected piechart barchart viz of travel expenses
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
