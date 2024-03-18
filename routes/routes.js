import express from "express"
import {getEmails, saveSentEmails, saveDraft, movetobin} from "../Controllers/email-controller.js";

const routes = express.Router();

routes.post('/saveEmail', saveSentEmails)
routes.get('/emails/:type', getEmails)
routes.post('/Savedraft', saveDraft)
routes.post('/movetobin', movetobin)



export default routes


