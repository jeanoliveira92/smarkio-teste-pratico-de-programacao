const express = require('express');

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json("API");
})

module.exports = routes;