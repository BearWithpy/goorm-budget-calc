import React from "react"

const TotalBox = ({ total }) => {
    return (
        <div className="text-4xl font-bold text-right pr-6">
            Total: {total.toLocaleString()}
        </div>
    )
}

export default TotalBox
