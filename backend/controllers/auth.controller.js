const userModel = require("../models/user.model.js");


const register = async (req, res) => {
    try {
        const { username, email, password , bio , profileImage} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const isUserAlreadyExist = await userModel.findOne({
            $or: [
                {email},
                {username}
            ]
        })
        if(isUserAlreadyExist){
            return res.status(409).json({
                success: false,
                message: "User already exists"
            })
        }


    } catch (error) {
        
    }
}