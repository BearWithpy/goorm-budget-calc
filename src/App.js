import "./App.css"

import ItemList from "components/List/ItemList"
import ItemInputForm from "components/Input/ItemInputForm"
import { v4 as getId } from "uuid"
import { Header } from "containers"
import { useState } from "react"

function App() {
    const [items, setItems] = useState([])
    const addItem = (product, expense) => {
        const newItem = { id: getId(), product, expense }
        setItems([...items, newItem])
    }
    const deleteAllItems = () => {
        setItems([])
    }

    const deleteOneItem = (item) => {
        const newItems = items.filter((i) => i.id !== item.id)
        setItems(newItems)
    }

    return (
        <div>
            <Header />

            <ItemInputForm onAddItem={addItem} />
            <ItemList
                items={items}
                onDelete={deleteOneItem}
                onDeleteAll={deleteAllItems}
            />
        </div>
    )
}

export default App
