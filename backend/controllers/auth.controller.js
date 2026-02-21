const userModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {

    try {
        const { username, email, password, bio, profileImage } = req.body;
        const normalizedEmail = email.toLowerCase();
        const normalizedUsername = username.toLowerCase();
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const isUserAlreadyExist = await userModel.findOne({
            $or: [
                { email },
                { username }
            ]
        })
        if (isUserAlreadyExist) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            })
        }
        if (bio && bio.length > 200) {
            return res.status(400).json({ message: "Bio too long" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username: normalizedUsername,
            email: normalizedEmail,
            password: hashedPassword,
            bio,
            profileImage
        })

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        res.cookie("token", token);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user:{
                username:user.username,
                email:user.email,
                bio:user.bio,
                profileImage:user.profileImage
            }
        })
    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            success: false,

        })
    }

}

const login = async (req, res) => {
    
    try {
        
    } catch (error) {
        res.status(500),json({
            success: false,
            message: error.message
        })
    }
}
module.exports = { register }