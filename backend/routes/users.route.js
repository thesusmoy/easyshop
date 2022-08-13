const express = require('express');

const router = express.Router();

router.get("/register", (req, res) => {
    res.send("this is register page");
});

router.get("/login", (req, res) => {
    res.send("this is a login page ");
});


module.exports = router;
