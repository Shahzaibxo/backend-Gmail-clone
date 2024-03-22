import express from "express"
import {getEmails, saveSentEmails, saveDraft, movetobin, Starmark} from "../Controllers/email-controller.js";

const routes = express.Router();

routes.post('/saveEmail', saveSentEmails)
routes.put('/starmark', Starmark)
routes.get('/emails/:type', getEmails)
routes.post('/Savedraft', saveDraft)
routes.delete('/movetobin/:param', movetobin)



export default routes


