import { IconButton } from "@mui/material"
import React from "react"
import EditIcon from "@mui/icons-material/Edit"

const EditButton = ({ onEdit, target }) => {
    const handleEdit = () => {
        onEdit(target)
    }
    return (
        <IconButton
            aria-label="delete"
            size="large"
            color="main"
            onClick={handleEdit}
        >
            <EditIcon fontSize="inherit" />
        </IconButton>
    )
}

export default EditButton
