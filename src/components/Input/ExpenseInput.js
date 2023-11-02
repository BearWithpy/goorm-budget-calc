import React from "react"

const ExpenseInput = ({ expenseInputRef }) => {
    return <input type="text" placeholder="ex) 30000" ref={expenseInputRef} />
}

export default ExpenseInput
