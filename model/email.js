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
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
        default:false
    },
    starred:{
        type: String,
        required: true,
        default:false
    },
    bin:{
        type: String,
        required: true,
        default: false
    },
    type:{
        type: String,
        required: true
    },

})

const Email = mongoose.model("emails", Emailschema);

export default Email