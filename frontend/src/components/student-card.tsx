import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


export function StudentCard() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Student Page</CardTitle>
                <CardDescription>Create and modify student ACLP</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href={"/students"}>
                    <Button className="w-full">Visit</Button>
                </Link>
            </CardContent>
        </Card>
    )
}
