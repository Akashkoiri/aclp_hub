import studentModel from "../models/studentModel.js"


//Get all students
export const getStudents = async (req, res) => {
    try {
        const students = await studentModel.find()
        res.status(200).json(students)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

//Create student
export const createStudent = async (req, res) => {
    const student = req.body
    try {
        const newStudent = new studentModel(student)
        await newStudent.save()
        res.status(201).json(student)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

//Update student
export const UpdateStudent = async (req, res) => {
    const student = req.body
    try {
        //Update logic goes here

        res.status(201).json(student)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

//Remove student
export const removeStudent = async (req, res) => {

    try {
        const student = await studentModel.deleteMany();
        res.status(201).json(student)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}