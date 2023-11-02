import "./App.css"

import DeleteAllButton from "components/Buttons/DeleteAllButton"
import ItemList from "components/List/ItemList"
import ItemInputForm from "components/Input/ItemInputForm"
import { Header } from "containers"
import { useState } from "react"

function App() {
    const [items, setItems] = useState([])
    const addItem = (product, expense) => {
        setItems([...items, { product, expense }])
    }

    return (
        <div>
            <Header />
            <ItemInputForm onAddItem={addItem} />
            <DeleteAllButton />
            <ItemList items={items} />
        </div>
    )
}

export default App
