import React from "react"

const ProductInput = ({ productInputRef }) => {
    return (
        <input
            type="text"
            placeholder="ex) 교촌 허니콤보"
            ref={productInputRef}
        />
    )
}

export default ProductInput
