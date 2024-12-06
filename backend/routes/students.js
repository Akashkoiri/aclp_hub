import express from "express"
// Importing controllers
import { getStudents, createStudent, removeStudent } from "../controllers/students.js"


const router = express.Router()

//Routes
router.get('/', getStudents)
router.post('/', createStudent)
router.delete('/', removeStudent)

export default router