import { Button } from "@mui/material"
import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"

const DeleteAllButton = () => {
    return (
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
        </Button>
    )
}

export default DeleteAllButton
