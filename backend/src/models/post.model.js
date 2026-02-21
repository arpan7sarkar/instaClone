const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        default:"",
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "Owner is required"],
    },
});


const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;