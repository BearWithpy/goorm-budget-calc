import { IconButton } from "@mui/material"
import React from "react"
import EditIcon from "@mui/icons-material/Edit"

const EditButton = ({ onEdit }) => {
    return (
        <IconButton aria-label="delete" size="large" color="main">
            <EditIcon fontSize="inherit" />
        </IconButton>
    )
}

export default EditButton
