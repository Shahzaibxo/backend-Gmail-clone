import User from "../model/UserModel.js";
import jwt from "jsonwebtoken"
import 'dotenv/config'


export default async function Authizatio(req,res,next){
    const {authorization}=req.headers;
    if(!authorization){
        return res.status(401).json({error:"Authorization Token Missing, Sign up first"})
    }


    const token=authorization.split(" ")[1];
    try{
        const {_id}=jwt.verify(token,process.env.JWTSIGNATURE)
        req.user = await User.findOne({_id}).select("_id")
        next()
    }
    catch(error){
        res.status(401).json({error:"Request Authorization failed, try loging again"})

    }
}
