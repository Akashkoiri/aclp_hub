import { Dispatch, SetStateAction } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { CreateStudentForm } from "../forms/create-student-form"


export function CreateStudentDialog({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create student</DialogTitle>
                    <DialogDescription>
                        Enter the details below to create a student
                    </DialogDescription>
                </DialogHeader>
                <CreateStudentForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}
