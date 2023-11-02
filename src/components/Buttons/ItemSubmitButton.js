import { Button } from "@mui/material"
import React from "react"
import SendIcon from "@mui/icons-material/Send"

const ItemSubmitButton = () => {
    return (
        <div>
            <Button variant="contained" endIcon={<SendIcon />}>
                SUBMIT
            </Button>
        </div>
    )
}

export default ItemSubmitButton
