"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"



const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    course: z.string().min(2, {
        message: "course must be at least 2 characters.",
    }),
    subject: z.string().min(2, {
        message: "course must be at least 2 characters.",
    }),
    current_lesson: z.string().min(2, {
        message: "course must be at least 2 characters.",
    }),
    next_lesson: z.string().min(2, {
        message: "course must be at least 2 characters.",
    }),
    remarks: z.string().min(2, {
        message: "course must be at least 2 characters.",
    })
})

export function CreateStudentForm({
    cardId,
}: {
    cardId: string
}) {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            course: "",
            subject: "",
            current_lesson: "",
            next_lesson: "",
            remarks: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Todo: Submit the data to the backend
        console.log(values)

        // Clear the form
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course</FormLabel>
                            <FormControl>
                                <Input placeholder="Course" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your course
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Subject" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your subject
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="current_lesson"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Lesson</FormLabel>
                            <FormControl>
                                <Input placeholder="Current Lesson" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your current lesson
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="next_lesson"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Next Lesson</FormLabel>
                            <FormControl>
                                <Input placeholder="Next Lesson" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your next lesson
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="remarks"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Remarks</FormLabel>
                            <FormControl>
                                <Input placeholder="Remarks" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your remarks
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="" type="submit">Submit</Button>
            </form>
        </Form>
    )
}
