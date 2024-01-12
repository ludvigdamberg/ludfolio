import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Magnetic({ children }) {

    const magnetic2 = useRef(null)

    useEffect(() => {

        const xTo = gsap.quickTo(magnetic2.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
        const yTo = gsap.quickTo(magnetic2.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

        magnetic2.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e
            const { width, height, left, top } = magnetic2.current.getBoundingClientRect()
            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)

            xTo(x * 0.5)
            yTo(y * 0.5)
        })
        magnetic2.current.addEventListener("mouseleave", (e) => {
            xTo(0)
            yTo(0)
        })


    }, [])


    return (
        React.cloneElement(children, { ref: magnetic2 })
    )
}

