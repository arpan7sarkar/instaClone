require("dotenv").config();
const connectDB = require("./src/config/db.js");
const app = require("./src/app.js");


const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();

