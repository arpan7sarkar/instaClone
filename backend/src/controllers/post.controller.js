const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


const createPostController = async (req, res) => {
    try {
        const { caption, image } = req.body;
        console.log(req.body);
        const file = await imagekit.files.upload({
            file: await toFile(Buffer.from(req.file.buffer), 'file'),
            fileName: "fileName"
        })

        res.send(file.url);
    } catch (error) {
        res.send(error);
    }
}

module.exports = { createPostController }