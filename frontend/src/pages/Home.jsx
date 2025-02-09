import React from "react";
import Hero from "../components/Hero";
import TopNiches from "../components/TopNiches.jsx";
import HowItWorks from "../components/HowItWorks.jsx";

const Home = () => {
    return (
        <>
            <Hero />
            <TopNiches/>
            <HowItWorks/>
        </>
    );
};

export default Home;