import mongoose from "mongoose";

// create a schema for the category
const CategorySchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true, unique: true },
});

// create a model (table) for the category
export const Categories = mongoose.model("Categories", CategorySchema);