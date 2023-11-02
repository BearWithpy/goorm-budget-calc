import React from "react"

const ExpenseInput = ({ expenseInputRef }) => {
    return (
        <input
            type="number"
            required
            min={0}
            placeholder="ex) 30000"
            ref={expenseInputRef}
        />
    )
}

export default ExpenseInput
