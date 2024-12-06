import mongoose from "mongoose"

//DB Connection
const connectDb = (url) => {
    mongoose.connect(url)
        .then(() => console.log("Connected to Database"))
        .catch((err) => console.log(err.message))
}

export default connectDb