export function LoadingBrowseRoom({ ratio = {} }) {
    const skeletonLoading = [
        {
            id: 1,
            ratio: {
                default: "1/9",
                md: "1/4"
            }
        },
        {
            id: 2,
            ratio: {
                default: "1/9",
                md: "2/2"
            }
        },
        {
            id: 3,
            ratio: {
                default: "1/9",
                md: "2/3"
            }
        },
        {
            id: 4,
            ratio: {
                default: "1/9",
                md: "1/4"
            }
        }
    ]

    return skeletonLoading.map((item, index) => {
        return (
            <div
                key={item.id}
                className={`
        relative card 
        ${ratio?.wrapper.default?.[item.ratio.default]}
        ${ratio?.wrapper.md?.[item.ratio.md]}`
                }
                style={{ height: index === 0 ? 180 : "auto" }}>
                <div className="bg-gray-400 rounded-lg w-full h-full">
                    <div className={`overlay ${ratio?.meta?.[item.ratio.md]}`}>
                        <div className="w-24 h-3 bg-gray-200 mt-3 rounded-full"></div>
                        <div className="w-24 h-3 bg-gray-200 mt-2 rounded-full"></div>
                    </div>
                </div>
            </div>
        )
    })
}

export function LoadingArrival() {
    return Array(6).fill().map((_, index) => {
        return (<div className="px-4 relative card group" key={index}>
            <div
                className="rounded-xl bg-gray-400 overflow-hidden card-shadow relative"
                style={{ width: 287, height: 386 }}>
            </div>
            <div className="w-24 h-3 bg-gray-400 mt-3 rounded-full"></div>
            <div className="w-36 h-3 bg-gray-400 mt-2 rounded-full"></div>
        </div>)
    })

}

export default function loadingProductDetail() {
    return (
        <section className="container mx-auto">
            <div className="flex flex-wrap my-4 md:my-12">
                <div className="w-full md:hidden px-4">
                    <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                </div>
                <div className="flex-1">
                    <div className="slider">
                        <div className="thumbnail">
                            {Array(5)?.fill().map((_, index) => {
                                return (
                                    <div className="px-4 relative card group" key={index}>
                                        <div
                                            className="rounded-xl item bg-gray-300 animate-pulse" style={{ width: 106, height: 106 }}>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="preview">
                            <div className="item rounded-lg h-full overflow-hidden">
                                <div className="item bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-4 md:p-6">
                    <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

                    <div className="w-44 h-10 mt-8 bg-gray-300 animate-pulse rounded-full"></div>
                    <hr className="my-8" />

                    <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-96 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-64 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

