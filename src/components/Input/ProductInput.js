import React from "react"

const ProductInput = ({ productInputRef, defaultValue }) => {
    return (
        <div className="col-span-1">
            <label
                htmlFor="product_"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                product
            </label>
            <input
                type="text"
                id="product_"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex) 교촌 허니콤보"
                ref={productInputRef}
                defaultValue={defaultValue}
                required
            ></input>
        </div>
    )
}

export default ProductInput
