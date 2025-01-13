import CreateStudent from "@/components/create-student"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"



//Types
type Student = {
    _id: string
    name: string,
    course: string,
    subject: string,
    current_lesson: string,
    next_lesson: string,
    remarks: string,
}


export default async function Students() {

    //Data-Fetching
    const res = await fetch("http://127.0.0.1:5000/students")
    const students = await res.json()

    return (
        <div className="grid grid-cols-2 m-auto">
            <h4 className="text-lg font-semibold leading-none">Students</h4>

            <CreateStudent />

            <ScrollArea className="col-span-2 h-72 w-[32rem] rounded-md border my-4">
                <div className="p-4">
                    {students.map((student: Student) => (
                        <div>
                            <div key={student._id} className="text-sm">
                                {student.name}
                            </div>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </ScrollArea>

            <Link href="/">
                <Button className="text-white">Back</Button>
            </Link>
        </div>
    )
}

