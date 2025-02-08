"use server"



export const createAclp = async (formData: FormData) => {
    const name = formData.get("name")
    const course = formData.get("course")
    // console.log(name)
    console.log(course)
}