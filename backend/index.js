import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import connectDb from "./utils/connectDb.js"
//Importing Routes
import studentRoutes from "./routes/students.js"



const app = express()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// Routes
app.get('/', (req, res) => res.status(200).json({ paths: ["/students"] }))
app.use('/students', studentRoutes)

connectDb(MONGODB_URI)
app.listen(PORT, () => console.log(`Server: http://127.0.0.1:${PORT}`))

