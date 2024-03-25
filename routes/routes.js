import express from "express"
import {getEmails,sentfromdraft ,saveSentEmails, saveDraft, movetobin, Starmark, updatedraft} from "../Controllers/email-controller.js";

const routes = express.Router();
routes.get('/',(req,res)=>{
    res.status(200).json("test-endpoint")
})
routes.get('/ok',(req,res)=>{
    res.status(200).json("test-endpoint2")
})
routes.post('/saveEmail', saveSentEmails)
routes.put('/starmark', Starmark)
routes.put('/updatedraft', updatedraft)
routes.post('/sentfromdraft', sentfromdraft)
routes.get('/emails/:type', getEmails)
routes.post('/Savedraft', saveDraft)
routes.delete('/movetobin/:param', movetobin)



export default routes


