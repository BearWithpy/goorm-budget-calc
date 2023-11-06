import React, { useEffect, useRef, useState } from "react"
import ExpenseInput from "components/Input/ExpenseInput"
import ProductInput from "components/Input/ProductInput"
import ItemSubmitButton from "components/Buttons/ItemSubmitButton"
import ItemEditButton from "components/Buttons/ItemEditButton"

const ItemInputForm = ({
    onAddItem,
    onToggle,
    mode,
    editingItem,
    onEditItem,
}) => {
    const productInputRef = useRef()
    const expenseInputRef = useRef()
    const [editedProduct, setEditedProduct] = useState("")
    const [editedExpense, setEditedExpense] = useState(0)

    useEffect(() => {
        if (mode === "edit" && editingItem) {
            productInputRef.current.value = editingItem.product
            expenseInputRef.current.value = editingItem.expense
            setEditedProduct(editingItem.product)
            setEditedExpense(editingItem.expense)
        }
    }, [mode, editingItem])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = productInputRef.current.value
        const expense = parseInt(expenseInputRef.current.value)

        if (mode === "submit") {
            onAddItem(newProduct, expense)
        } else if (mode === "edit") {
            onEditItem(editingItem.id, newProduct, expense)

            onToggle("edit")
        }

        productInputRef.current.value = ""
        expenseInputRef.current.value = ""
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <ProductInput
                    productInputRef={productInputRef}
                    defaultValue={editedProduct}
                />
                <ExpenseInput
                    expenseInputRef={expenseInputRef}
                    defaultValue={editedExpense}
                />
                <div className="mb-3">
                    {mode === "submit" ? (
                        <ItemSubmitButton />
                    ) : (
                        <ItemEditButton />
                    )}
                </div>
            </form>
        </div>
    )
}

export default ItemInputForm
