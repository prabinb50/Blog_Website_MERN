import mongoose from "mongoose";

// create a schema for the user
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// create a model (table) for the user
export const User = mongoose.model("User", UserSchema);