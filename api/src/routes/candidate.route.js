const express = require("express");

const authenticate = require("../middlewares/authenticate.middleware");

const router = express.Router();

router.get("/:id");

module.exports = router;
