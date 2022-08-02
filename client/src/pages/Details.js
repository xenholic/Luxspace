import React from "react";
import Header from "../parts/HomePage/Header";
import Breadcrumb from "../components/Breadcrumb";
import Clients from "../parts/HomePage/Clients";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/HomePage/Footer";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function HomePage() {
    return (
        <>
            <Header />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/91231", name: "office Room" },
                { url: "/categories/91231/products/7111", name: "Details" },
            ]} />
            <ProductDetails />
            <Suggestion />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}