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
    width: 260px;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 85px 0px 165px 0px;
    width: ;
`;

const Signature = () => <Sig src={signature} />;

export { Iframe, Hero, Video, Signature, Navigation };
