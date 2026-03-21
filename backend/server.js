import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDb } from "./config/db.js";

// app config 
const app = express();
const port = 4080;
//middleware
app.use(express.json());
app.use(cors());
// db connection 
connectDb();

app.listen(port, () => {
    console.log(`port is listening on port ${port}`);
})