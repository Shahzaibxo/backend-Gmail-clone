import express from "express";
import connection from "./db/db.js";
import mainroutes from "./routes/Email-routes.js";
import registrationroutes from "./routes/Registraion-routes.js";
import cors from "cors"
import 'dotenv/config'

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use("/registration", registrationroutes)
app.use("/", mainroutes)




connection();
app.listen(process.env.PORT, "0.0.0.0")
export default app;