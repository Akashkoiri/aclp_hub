"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { CreateStudentDialog } from "./dialogs/student_dialog"


export default function StudentDialog() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Button className="text-white" onClick={() => setOpen(true)}>Create</Button>
            <CreateStudentDialog open={open} setOpen={setOpen} />
        </>
    )
}
