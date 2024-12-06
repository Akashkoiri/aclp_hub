import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
    name: String,
    course: String,
    subject: String,
    current_lesson: String,
    next_lesson: String,
    remarks: String,
}, { collection: 'students' })

const studentModel = mongoose.model('studentSchema', studentSchema)
export default studentModel
