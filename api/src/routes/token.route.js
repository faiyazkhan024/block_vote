const express = require("express");

const { tokenController } = require("../controllers/token.controller");

const router = express.Router();

router.post("/token", tokenController);

module.exports = router;
