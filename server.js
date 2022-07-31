const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

const router = require("./routes/router.js");

const DB_URL = "mongodb://localhost:27017";

app.use(express.json());
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(3001, () => {
            console.log("DevServer 3001");
        });
    } catch (error) {
        console.log(error);
    }
}
startApp();
