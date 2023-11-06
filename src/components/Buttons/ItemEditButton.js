import { Button } from "@mui/material"
import React from "react"
import SendIcon from "@mui/icons-material/Send"

const ItemEditButton = () => {
    return (
        <div>
            <Button
                variant="contained"
                className="bg-indigo-500 hover:bg-indigo-700"
                endIcon={<SendIcon />}
                type="submit"
            >
                EDIT
            </Button>
        </div>
    )
}

export default ItemEditButton
