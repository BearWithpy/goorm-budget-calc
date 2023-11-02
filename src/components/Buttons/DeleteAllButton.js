import { Button } from "@mui/material"
import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"

const DeleteAllButton = () => {
    return (
        <Button variant="outlined" color="error" endIcon={<DeleteIcon />}>
            Delete
        </Button>
    )
}

export default DeleteAllButton
