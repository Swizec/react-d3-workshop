import styled from "styled-components";
import signature from "./images/signature.gif";
import React from "react";

const Iframe = styled.iframe`
    width: 100%;
    height: 500px;
    border: 0;
`;

const Hero = styled.h1`
    font-size: 3rem;
    margin-top: 3.175rem;
    margin-bottom: 1.125rem;
`;

const Video = styled.video`
    max-width: 100%;
    max-height: 500px;
    border: 0;
`;

const Sig = styled.img`
    height: 50px;
    margin: 10px 0 -20px 0;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 85px 0px 165px 0px;
    width: ;
`;

const SignoffImg = styled.img`
    padding: 45px 0px;
`;

const Signature = () => (
    <p>
        Cheers,
        <br />
        <Sig src={signature} />
        <br />~ Swizec
    </p>
);

export { Iframe, Hero, Video, Signature, Navigation, SignoffImg };
