import React from "react"

const ProductInput = ({ productInputRef, defaultValue }) => {
    return (
        <input
            required
            type="text"
            placeholder="ex) 교촌 허니콤보"
            ref={productInputRef}
            defaultValue={defaultValue}
        />
    )
}

export default ProductInput
