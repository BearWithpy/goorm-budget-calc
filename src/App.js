// import "./App.css"
import "./main.css"
import ItemList from "components/List/ItemList"
import ItemInputForm from "components/Input/ItemInputForm"
import { v4 as getId } from "uuid"
import { Header } from "containers"
import { useEffect, useState } from "react"
import CreateBox from "components/MessageBox/CreateBox"
import DeleteBox from "components/MessageBox/DeleteBox"
import EditBox from "components/MessageBox/EditBox"

function App() {
    const [mode, setMode] = useState("submit")
    const [items, setItems] = useState([])
    const [editingItem, setEditingItem] = useState(null)
    const [msg, setMsg] = useState("none")
    const [showMessage, setShowMessage] = useState(false)

    const [total, setTotal] = useState(0)

    const hideMessage = () => {
        setShowMessage(false)
    }

    useEffect(() => {
        if (msg !== "none") {
            setShowMessage(true)
            setTotal(calcTotal())
            const messageTimeout = setTimeout(() => {
                hideMessage()
                setMsg()
            }, 1500)
            return () => clearTimeout(messageTimeout)
        }
    }, [msg])

    const addItem = (product, expense) => {
        const newItem = { id: getId(), product, expense }
        setItems([...items, newItem])
        setMsg("create")
    }
    const deleteAllItems = () => {
        setItems([])
        setMsg("delete all")
    }
    const editItem = (item) => {
        setEditingItem(item)
        setMode("edit")
    }
    const toggleMode = (mode) => {
        if (mode === "submit") {
            setMode("edit")
        } else {
            setMode("submit")
        }
    }
    const onEditItem = (id, newProduct, newExpense) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, product: newProduct, expense: newExpense }
            }
            return item
        })
        setItems(updatedItems)
        setEditingItem(null)
        setMode("submit")
        setMsg("edit")
    }

    const deleteOneItem = (item) => {
        const newItems = items.filter((i) => i.id !== item.id)
        setItems(newItems)
        setMsg("delete")
    }

    const calcTotal = () => {
        const total = items.reduce((sum, item) => {
            return sum + Number(item.expense) // expense를 숫자로 변환 후 합산
        }, 0)
        return total
    }

    return (
        <div>
            {/* <div>
                <h2 className="text-blue-500 text-xl font-bold">
                    Hello, React!
                </h2>
                <p className="text-lg font-medium">Hello, Typescript!</p>
            </div> */}
            {showMessage && (
                <>
                    {msg === "create" && <CreateBox />}
                    {msg === "delete" && <DeleteBox />}

                    {msg === "edit" && <EditBox />}
                    {/* msg === "delete all" && <DeleteAllBox />} */}
                </>
            )}
            <Header />
            <div className="m-6 p-5 border-solid border-2 border-gray-300 rounded">
                <ItemInputForm
                    onAddItem={addItem}
                    onToggle={toggleMode}
                    mode={mode}
                    editingItem={mode === "edit" ? editingItem : {}}
                    onEditItem={onEditItem}
                />
                <ItemList
                    items={items}
                    onDelete={deleteOneItem}
                    onDeleteAll={deleteAllItems}
                    onEdit={editItem}
                />
            </div>
            <div className="text-2xl font-bold text-right pr-6">
                Total: {total}
            </div>
        </div>
    )
}

export default App
