const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Database Connected"))
.catch((error) => console.log(error));


var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));