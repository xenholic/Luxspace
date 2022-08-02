import React from 'react'
import propsTypes from 'prop-types'

export default function Breadcrumb({ list }) {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {
                        list?.map?.((item, index) => )
                    }
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="#">Office Room</a>
                    </li>
                    <li>
                        <a href="#" aria-label="current-page">Details</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

Breadcrumb.propsTypes = {
    list: propsTypes.array.isRequired,
}