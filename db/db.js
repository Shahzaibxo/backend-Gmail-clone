import mongoose from "mongoose"
import 'dotenv/config'


const connection = ()=>{
const DB_URI=process.env.DB_URI
    try {
        mongoose.connect(DB_URI);
        console.log("Mongo DB connected")
    } catch (error) {
        console.log(error.message)

    }
}

export default connection;