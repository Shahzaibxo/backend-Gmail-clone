import Usermodel from "../model/UserModel.js"
import jwt from "jsonwebtoken"
import 'dotenv/config'

const createtoken = (_id) => {
    return jwt.sign({ _id },process.env.JWTSIGNATURE, { expiresIn: "3d" })
}
export const signup = async (req, res) => {
    const { email, name,password } = req.body
    try {
        const user = await Usermodel.signup(email, name,password)
        const token = createtoken(user._id)
        res.status(200).json({ email, name,token,_id:user._id })
    }
    catch (error) {
        res.status(500).json({ error: error.message })

    }

    // res.status(200).json("Signup route working fine")
}
export const registration = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Usermodel.login(email, password)
        const token = createtoken(user._id)
        res.status(200).json({ email, name:user.name, token,_id:user._id })
    }
    catch(error) {
        res.status(500).json({ error: error.message })

    }
}
