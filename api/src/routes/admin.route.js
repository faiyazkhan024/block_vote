const express = require("express");

const { loginController } = require("../controllers/admin.controller");

const router = express.Router();

router.post("/login", loginController);

module.exports = router;
