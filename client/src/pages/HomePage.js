import React from "react";
import Header from "../parts/HomePage/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/HomePage/Clients";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/HomePage/Footer";

export default function HomePage() {
    return (
        <>
            <Header theme="white" position="absolute" />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}