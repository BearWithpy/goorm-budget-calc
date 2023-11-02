import React, { useRef } from "react"
import ExpenseInput from "components/Input/ExpenseInput"
import ProductInput from "components/Input/ProductInput"
import ItemSubmitButton from "components/Buttons/ItemSubmitButton"

const ItemInputForm = ({ onAddItem }) => {
    const productInputRef = useRef()
    const expenseInputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        const newProduct = productInputRef.current.value
        const expense = parseInt(expenseInputRef.current.value)

        onAddItem(newProduct, expense)

        productInputRef.current.value = ""
        expenseInputRef.current.value = ""
    }
    return (
        <form onSubmit={handleSubmit}>
            <ProductInput productInputRef={productInputRef} />
            <ExpenseInput expenseInputRef={expenseInputRef} />
            <ItemSubmitButton />
        </form>
    )
}

export default ItemInputForm
