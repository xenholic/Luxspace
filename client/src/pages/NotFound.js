import React from 'react'
import Header from "../parts/HomePage/Header";
import PageErrorMessage from '../parts/PageErrorMessage';
import Footer from "../parts/HomePage/Footer";
import Sitemap from "../parts/HomePage/Sitemap";
import Document from '../parts/Document';

export default function NotFound() {

    return (
        <Document>
            <Header />
            <PageErrorMessage />
            <Sitemap />
            <Footer />
        </Document>
    )
}
