const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"],
    }, 
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Ghae4OEdb4UmC3hkqpFvLAHaGd%3Fpid%3DApi&f=1&ipt=2623e8de3515917bc861e33b71b604edcd3fcbb1a07cdb2c061934b9824bf680&ipo=images"
    }

})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;