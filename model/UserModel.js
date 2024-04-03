import bcrypt from "bcrypt"
import mongoose from "mongoose";
import validator from "validator";

const userschema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true,
    }
})
userschema.statics.signup = async function (email, name ,password){
    const exists = await this.findOne({ email })
    if(!email||!password || !name){
        throw Error("Please fill the form correctly")
    }
    if (exists) {
        throw Error("Email Already in use")
    }
    if(!validator.isEmail(email)){
        throw Error("Email not valid")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, name,password:hash})
    return user
}

userschema.statics.login = async function (email, password){
    if(!email||!password){
        throw Error("Please fill the form correctly")
    }
    const user = await this.findOne({ email })
    if(!user){
        throw Error("Incorrect Email")
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("Incorrect Password")
    }
    return user
}

const User=mongoose.model("users", userschema)

export default User