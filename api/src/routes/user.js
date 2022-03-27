const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  loginController,
  tokenController,
  logoutController,
} = require("../controllers/user");

const router = express.Router();

router.post("/login", loginController);

router.post("/token", tokenController);

router.post("/logout", authenticate, logoutController);

module.exports = router;
