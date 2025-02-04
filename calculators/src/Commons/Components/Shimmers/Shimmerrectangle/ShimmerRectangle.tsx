import React from "react";
import "../../../Styles/_shimmer.scss"
import "./ShimmerRectangle.scss"


interface ShimmerReactType {
	shimmertype: string,
	count: number
}

export const ShimmerRectangle: React.FC<ShimmerReactType> = ({ shimmertype, count }) => {

	return (
		<>
			{Array.from({ length: count }).map((_, i) => (
				<div className={`shimmer-rect shimmer ${shimmertype}`}></div>
			))
			}

		</>
	)

}