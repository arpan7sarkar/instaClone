const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const isVerified = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Something went wrong please login again"
            })
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Something went wrong please login again"
            })
        }
        req.userId = decoded.id;
        next();

    } catch (error) {
        console.log(error.message);
        if (
            error.name === "JsonWebTokenError" ||
            error.name === "TokenExpiredError"
        ) {
            return res.status(401).json({
                success: false,
                message: "Session expired, please login again"
            });
        }
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = isVerified;