const express = require("express");

const authenticate = require("../middlewares/auth");

const router = express.Router();

router.get("/:id");

module.exports = router;
