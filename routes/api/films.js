const express = require("express");
const router = express.Router();

// @route  GET api/films
// @desc   Test route
// @access Public
router.get("/", (req, res) => res.send("Films route"));

module.exports = router;
