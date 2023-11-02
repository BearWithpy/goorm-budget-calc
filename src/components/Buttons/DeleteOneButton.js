import React from "react"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const DeleteOneButton = ({ onDelete, target }) => {
    const handleDelete = () => {
        onDelete(target)
    }
    return (
        <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={handleDelete}
        >
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    )
}

export default DeleteOneButton
