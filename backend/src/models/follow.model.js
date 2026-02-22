const mongoose = require("mongoose");

const folowSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "Follower is required"],
    },
    followingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "Following is required"],
    },

},{
    timestamps: true
}
);

const followModel = mongoose.model("follows", folowSchema);

module.exports = followModel;