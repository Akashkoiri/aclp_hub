export type Student = {
    _id: string,
    name: string,
    course: "ADOA" | "GDCA" | "PGECC",
    subject: string,
    current_lesson: string,
    next_lesson: string,
    remarks: string
}