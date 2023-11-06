import { Button } from "@mui/material"
import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"

const DeleteAllButton = ({ onDeleteAll }) => {
    return (
        <Button
            variant="outlined"
            color="error"
            className="mt-5"
            endIcon={<DeleteIcon />}
            onClick={onDeleteAll}
        >
            Delete ALL
        </Button>
    )
}

export default DeleteAllButton
