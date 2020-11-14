// logging
const morgan = require("morgan");
// web framework for nodejs
const express = require("express");
const path = require("path");
require("./config/config")
// initialize app to express
const app = express();



app.use(express.json());
// logger
app.use(morgan("dev"));

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (request, response) => {
        response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})