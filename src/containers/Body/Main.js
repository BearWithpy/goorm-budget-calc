import { ItemInputForm, ItemList } from "components"

const Main = ({
    items,
    onAddItem,
    onEditItem,
    onDelete,
    onDeleteAll,
    onEdit,
    toggleMode,
    mode,
    editingItem,
}) => {
    return (
        <div className="m-6 p-5 border-solid border-2 border-gray-300 rounded">
            <ItemInputForm
                onAddItem={onAddItem}
                onToggle={toggleMode}
                mode={mode}
                editingItem={mode === "edit" ? editingItem : {}}
                onEditItem={onEditItem}
            />
            <ItemList
                items={items}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
                onEdit={onEdit}
            />
        </div>
    )
}

export default Main
