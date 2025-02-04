import React from "react";
import "../../../Styles/_shimmer.scss"

interface ShimmerTextProp {
    size: string
}

export const ShimmerText: React.FC<ShimmerTextProp> = ({ size }) => {
    return (
        <>
            <div className={`shimmer-text shimmer ${size}`}>

            </div>

        </>
    )
}