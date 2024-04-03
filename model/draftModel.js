import mongoose from "mongoose";

const draftschema= new mongoose.Schema({
    to:{
        type: String,
    }, 
    from:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },
    subject:{
        type: String,
    },
    body:{
        type: String,
        
    },
    date:{
        type: Date,
        required: true,
        default:false
    },
    starred:{
        type: Boolean,
        required: true,
        default:false
    },
    type:{
        type: String,
        required: true
    }
})

const Draft = mongoose.model("Draft-Emails", draftschema);

export default Draft