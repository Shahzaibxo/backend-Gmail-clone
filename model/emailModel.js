import mongoose from "mongoose";

const Emailschema= new mongoose.Schema({
    to:{
        type: String,
        required: true
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
    bin:{
        type: Boolean,
        required: true,
        default: false
    },
    type:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        required: true,
        
    },
    inbox:{
        type: Boolean,
        required: true,
    }
})

const Email = mongoose.model("emails", Emailschema);

export default Email