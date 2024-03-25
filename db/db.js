import mongoose from "mongoose"

const connection = ()=>{
const DB_URI="mongodb://shahziwork:Uj9riYKOLYZ1uLVp@ac-m3eiggb-shard-00-00.fbmqykm.mongodb.net:27017,ac-m3eiggb-shard-00-01.fbmqykm.mongodb.net:27017,ac-m3eiggb-shard-00-02.fbmqykm.mongodb.net:27017/?ssl=true&replicaSet=atlas-tpiip0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=GmailDb"
    try {
        mongoose.connect(DB_URI);
        console.log("Mongo DB connected")
    } catch (error) {
        console.log(error.message)

    }
}

export default connection;