import React from 'react'
import Header from "../parts/HomePage/Header";
import PageErrorMessage from '../parts/PageErrorMessage';
import Footer from "../parts/HomePage/Footer";
import Sitemap from "../parts/HomePage/Sitemap";

export default function NotFound() {
    return (
        <>
            <Header />
            <PageErrorMessage />
            <Sitemap />
            <Footer />
        </>
    )
}
