import React from "react"
import DeleteAllButton from "components/Buttons/DeleteAllButton"
import DeleteOneButton from "components/Buttons/DeleteOneButton"
import EditButton from "components/Buttons/EditButton"
import Item from "components/List/Item"
import Expense from "components/List/Expense"

const ItemList = ({ items, onDeleteAll, onDelete, onEdit }) => {
    return (
        <div>
            <h1>expenditure items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Item product={item.product} />
                        <Expense expense={item.expense} />
                        <DeleteOneButton onDelete={onDelete} target={item} />
                        <EditButton onEdit={onEdit} target={item} />
                    </li>
                ))}
            </ul>
            <DeleteAllButton onDeleteAll={onDeleteAll} />
        </div>
    )
}

export default ItemList
