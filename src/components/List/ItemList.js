import React from "react"
import DeleteAllButton from "components/Buttons/DeleteAllButton"
import DeleteOneButton from "components/Buttons/DeleteOneButton"
import EditButton from "components/Buttons/EditButton"
import Item from "components/List/Item"
import Expense from "components/List/Expense"

const ItemList = ({ items, onDeleteAll, onDelete, onEdit }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold my-3">expenditure items</h1>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="mb-2 flex justify-between border-solid border-2 border-gray-300 rounded"
                    >
                        <Item product={item.product} />
                        <Expense expense={item.expense} />
                        <div className="button-group">
                            <DeleteOneButton
                                onDelete={onDelete}
                                target={item}
                            />
                            <EditButton onEdit={onEdit} target={item} />
                        </div>
                    </li>
                ))}
            </ul>
            <DeleteAllButton onDeleteAll={onDeleteAll} />
        </div>
    )
}

export default ItemList
