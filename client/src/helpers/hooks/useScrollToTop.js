import React from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToTop() {
    const location = useLocation()
    console.log(location)
    React.useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [location.key])
}
