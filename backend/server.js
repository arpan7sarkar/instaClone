require("dotenv").config();
const connectDB = require("./config/db.js");
const app = require("./src/app.js");


app.listen(3000, async () => {
    await connectDB();
    console.log("Server is running on port 3000");
});