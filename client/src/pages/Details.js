import React, { useEffect } from "react";
import Header from "../parts/HomePage/Header";
import Breadcrumb from "../components/Breadcrumb";
import Clients from "../parts/HomePage/Clients";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/HomePage/Footer";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import useAsync from '../helpers/hooks/useAsync'
import { useParams } from "react-router-dom";
import fetch from '../helpers/fetch/index'
import LoadingProductDetails from '../helpers/fetch/Loading'
import Document from "../parts/Document";
import PageErrorMessage from "../parts/PageErrorMessage";

function LoadingSuggestion() {
    return (
        <section class="bg-gray-100 px-4 py-16">
            <div class="container mx-auto">
                <div class="flex flex-start mb-4">
                    <h3 class="text-2xl capitalize font-semibold">
                        Complete your room <br class="" />with what we designed
                    </h3>
                </div>
                <div class="flex overflow-x-auto mb-4 -mx-3">
                    {Array(4).fill().map((_, index) => {
                        return (
                            <div class="px-3 flex-none"
                                style={{ width: 320 }}
                                key={index}>
                                <div class="rounded-xl p-4 pb-8 relative bg-white">
                                    <div class="rounded-xl overflow-hidden card-shadow w-full h-36">
                                        <div className=" bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"
                                            style={{ width: 287, height: 150 }}></div>
                                    </div>
                                    <div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                                    <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </section >
    )
}

export default function Details() {
    const { idp } = useParams();

    const { data, error, run, isLoading, isError } = useAsync({})

    useEffect(() => {
        run(fetch({ url: `/api/products/${idp}` }))
    }, [run, idp])

    return (
        <Document>
            <Header />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/91231", name: "office Room" },
                { url: "/categories/91231/products/7111", name: "Details" },
            ]} />
            {
                isError ? <PageErrorMessage title="Product Not Found" body={error.errors.message} /> :
                    <>
                        {isLoading ? <LoadingProductDetails /> : <ProductDetails data={data} />}
                        {isLoading ? <LoadingSuggestion /> : <Suggestion data={data?.relatedProducts || {}} />}
                    </>
            }
            <Clients />
            <Sitemap />
            <Footer />
        </Document>
    )
}