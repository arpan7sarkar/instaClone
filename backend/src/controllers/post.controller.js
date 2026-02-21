const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const postModel = require("../models/post.model");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


const createPostController = async (req, res) => {
    try {
        const { caption } = req.body;
        if(!caption){
            return res.status(400).json({
                success: false,
                message: "Caption is required"
            })
        }
        const file = await imagekit.files.upload({
            file: await toFile(Buffer.from(req.file.buffer), 'file'),
            fileName: "file"
        })
        const post = await postModel.create({ caption, image: file.url ,userId: req.userId}); 
        res.status(200).json({success: true, message: "Post created successfully", post});
    } catch (error) {
        console.log(error);
        
        res.status(500).json({success: false, message: "Something went wrong"});
    }
}

const getUserPostController = async (req, res) => {
    try {
        const posts = await postModel.find({userId: req.userId});
        res.status(200).json({success: true, message: "Posts fetched successfully", posts});
    } catch (error) {
        return res.status(500).json({success: false, message: "Something went wrong"});
    }
}

const getUserPostDetailsController = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postModel.findById(id);
        if(!post){
            return res.status(404).json({success: false, message: "Post not found"});
        }
        if(post.userId.toString() !== req.userId){
            return res.status(401).json({success: false, message: "Unauthorized"});
        }
        res.status(200).json({success: true, message: "Post fetched successfully", post});
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({success: false, message: "Something went wrong"});
    }
}


module.exports = { createPostController , getUserPostController , getUserPostDetailsController}