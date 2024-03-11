import express from "express"
import saveSentEmails from "../Controllers/email-controller.js";

const routes = express.Router();

routes.post('/saveEmail', saveSentEmails)

export default routes


