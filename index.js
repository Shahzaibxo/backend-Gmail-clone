import express from "express";
import connection from "./db/db.js";
import routes from "./routes/routes.js";
import cors from "cors"
import 'dotenv/config'

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use("/", routes)


connection();
app.listen(process.env.PORT, "0.0.0.0")
export default app;