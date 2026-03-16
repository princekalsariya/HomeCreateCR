const express = require("express");
const app = express.Router();
const homeController = require("../Controller/home");

app.get('/get', homeController.homeget);
app.post('/post', homeController.homepost)

module.exports = app;