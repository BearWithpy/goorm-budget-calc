import React from "react"

const ItemList = ({ items }) => {
    return (
        <div>
            <h1>expenditure items</h1>
            <ul>
                {items.map((item) => (
                    <li>
                        {item.product} - {item.expense}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList
