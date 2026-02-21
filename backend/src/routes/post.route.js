const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller.js");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const isVerfied = require("../middlewares/isVerified")

postRouter.post("/", isVerfied ,upload.single("file") ,postController.createPostController);
postRouter.get("/", isVerfied ,postController.getUserPostController);
postRouter.get("/details/:id", isVerfied ,postController.getUserPostDetailsController);

// postRouter.put("/:id", postController.updatePostByIdController);
// postRouter.delete("/:id", postController.deletePostByIdController);

module.exports = postRouter;