import express from "express";
import { addFood, listFood, removeFood } from "../controller/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        // Unique filename: timestamp + original extension
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

// Initialize upload object
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;