import mongoose from "mongoose"
import studentModel from "./studentModel"

const aclpSchema = mongoose.Schema({
    date: {
        type: Date,
        require: true
    },
    lab: {
        type: Number,
        require: true
    },
    teachers: [String],
    students: [studentModel]
})

const aclpModel = mongoose.model('aclpSchema', aclpSchema)
export default aclpModel