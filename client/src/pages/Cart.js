import React from "react";
import Header from "../parts/HomePage/Header";
import Breadcrumb from "../components/Breadcrumb";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";
import Footer from "../parts/HomePage/Footer";
import Sitemap from "../parts/HomePage/Sitemap";

export default function Cart() {
    return (
        <>
            <Header />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/cart", name: "Shopping Cart" },
            ]} />

            <section class="md:py-16">
                <div class="container mx-auto px-4">
                    <div class="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
            <Footer />
        </>
    )
}