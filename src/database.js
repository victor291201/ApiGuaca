const mongoose = require("mongoose");

const URI = process.env.URI
?process.env.URI
:"mongodb://localhost/guaca-test";

mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:true
})

const conection = mongoose.connection;

conection.once("open",() => {
    console.log("db is conected")
})