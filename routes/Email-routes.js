import express from "express"
import {getEmails,sentfromdraft ,saveSentEmails, saveDraft, movetobin, Starmark, updatedraft} from "../Controllers/email-controller.js";
import Authization from "../middleware/Auth.js"
const mainroutes = express.Router();
mainroutes.get('/',(req,res)=>{
    res.status(200).json("test-endpoint")
})
mainroutes.get('/ok',(req,res)=>{
    res.status(200).json("test-endpoint2")
})

mainroutes.use(Authization)
mainroutes.post('/saveEmail', saveSentEmails)
mainroutes.put('/starmark', Starmark)
mainroutes.put('/updatedraft', updatedraft)
mainroutes.post('/sentfromdraft', sentfromdraft)
mainroutes.get('/emails/:type', getEmails)
mainroutes.post('/Savedraft', saveDraft)
mainroutes.delete('/movetobin/:param', movetobin)



export default mainroutes


