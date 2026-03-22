import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food
export const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// get all food 
export const listFood = async (req, res) => {
    try {
        const allFood = await foodModel.find({});
        res.json({ success: true, data: allFood });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

//remove from food
export const removeFood = async (req, res) => {
    try {
        const remove = await foodModel.findByIdAndDelete(req.body.id);
        if (remove) {
            console.log("food removed");
        } else {
            console.log("food not found");
        }
        res.json({ success: true, message: "food item removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}