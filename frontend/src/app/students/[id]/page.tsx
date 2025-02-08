import { CreateStudentForm } from "@/components/forms/create-student-form"



export default async function Student({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (
        <div className="container m-auto mt-8 min-h-3.5">
            <div className="space-y-8 max-w-md m-auto">
                <CreateStudentForm cardId={id} />
            </div>
        </div>
    )
}
