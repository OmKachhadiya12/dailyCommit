import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    }
},{timeStamps: true});

const PostMessage = new mongoose.model("PostMessage", postSchema);

export default PostMessage;