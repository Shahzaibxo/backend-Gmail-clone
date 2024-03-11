import mongoose from "mongoose"

const connection = ()=>{
const DB_URI="mongodb://Shahzaib:asdasdasd@ac-jvi8han-shard-00-00.pjndbnv.mongodb.net:27017,ac-jvi8han-shard-00-01.pjndbnv.mongodb.net:27017,ac-jvi8han-shard-00-02.pjndbnv.mongodb.net:27017/?ssl=true&replicaSet=atlas-gbgd8b-shard-0&authSource=admin&retryWrites=true&w=majority&appName=firstdb"
    try {
        mongoose.connect(DB_URI);
        console.log({response:"ok"})
    } catch (error) {
        console.log(error.message)
    }
}

export default connection;