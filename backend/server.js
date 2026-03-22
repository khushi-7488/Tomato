import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";

// app config 
const app = express();
const port = 4080;
//middleware
app.use(express.json());
app.use(cors());
// db connection 
connectDb();
// api end point 
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));

app.listen(port, () => {
    console.log(`port is listening on port ${port}`);
})