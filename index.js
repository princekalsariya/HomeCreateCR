const express = require("express");
const app = express();
const mongoose = require("mongoose");
const homeRouter = require('./Router/home');

app.use(express.json());
app.use('/home', homeRouter);

/////////////DB conecting .............
mongoose.connect("mongodb://127.0.0.1:27017")
try {
    app.listen(3000, () => {
        console.log("DB Connected\nServer Is Runing On Port:3000");
    });
} catch (error) {
    console.log(error);
}