import "./App.css"

import DeleteAllButton from "components/Buttons/DeleteAllButton"
import ItemSubmitButton from "components/Buttons/ItemSubmitButton"
import Header from "components/Header/Header"

function App() {
    return (
        <div>
            <Header></Header>

            <DeleteAllButton />
            <ItemSubmitButton />
        </div>
    )
}

export default App
