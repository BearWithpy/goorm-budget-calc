import React from "react"
import DeleteAllButton from "components/Buttons/DeleteAllButton"
import DeleteOneButton from "components/Buttons/DeleteOneButton"
import EditButton from "components/Buttons/EditButton"
import Item from "components/List/Item"
import Expense from "components/List/Expense"
import "./Itemlist.css"

const ItemList = ({ items, onDeleteAll, onDelete, onEdit }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold my-3">expenditure items</h1>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="flexComp mb-2 flex items-center border-solid border-2 border-gray-300 rounded"
                    >
                        <div className="flex-1 px-4">
                            <Item product={item.product} />
                        </div>
                        <div className="flex-1 px-4">
                            <Expense expense={item.expense} />
                        </div>
                        <div className="px-4">
                            <div className="button-group flex-shrink-0">
                                <DeleteOneButton
                                    onDelete={onDelete}
                                    target={item}
                                />
                                <EditButton onEdit={onEdit} target={item} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <DeleteAllButton onDeleteAll={onDeleteAll} />
        </div>
    )
}

export default ItemList
