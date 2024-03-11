import express from "express";
import connection from "./db/db.js";
import routes from "./routes/routes.js";
import cors from "cors"

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use("/", routes)
const PORT=8000;

connection();
app.listen(PORT, ()=>console.log('server is on port 8000'))