import { Button } from "@mui/material"
import React from "react"
import SendIcon from "@mui/icons-material/Send"

const ItemSubmitButton = () => {
    return (
        <div>
            <Button
                variant="contained"
                className="bg-indigo-500 hover:bg-indigo-700"
                endIcon={<SendIcon />}
                type="submit"
            >
                SUBMIT
            </Button>
        </div>
    )
}

export default ItemSubmitButton
