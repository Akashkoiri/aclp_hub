"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { CreateStudentDialog } from "./dialogs/create-student-dialog"


export default function CreateStudent() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Button className="text-white" onClick={() => setOpen(true)}>Create</Button>
            <CreateStudentDialog open={open} setOpen={setOpen} />
        </>
    )
}
