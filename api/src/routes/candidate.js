const express = require("express");

const authenticate = require("../middlewares/auth");

const router = express.Router();

router.post("/");

router.get("/");

router.get("/:id");

module.exports = router;
