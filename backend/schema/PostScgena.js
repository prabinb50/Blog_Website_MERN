import mongoose from 'mongoose';

const newPostSchema= new mongoose.Schema({
    post:{type:String, required:true,unique:true},
    text:{type:String, required:true},
    date:{type: Date, default:Date.now}
});

export const Posts = mongoose.model("Post", newPostSchema);
