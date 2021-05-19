const express = require("express");
const cors = require("cors");
const app = express();

//setting
app.set("port",process.env.PORT||4000)

//middlewares

app.use(cors());
app.use(express.json());
app.use('/public/img', express.static(__dirname + '/public/img'))

//routes

app.use("/api/products",require("./routes/products"));
app.use("/api/users",require("./routes/users"));

module.exports = app;