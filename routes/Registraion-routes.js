import express from "express"
import { signup,registration } from "../Controllers/registration-controller.js";

const registrationroutes = express.Router();


registrationroutes.post('/signup',signup)
registrationroutes.post('/login',registration)

export default registrationroutes