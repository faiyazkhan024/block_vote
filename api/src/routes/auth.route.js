const express = require("express");

const authenticate = require("../middlewares/authenticate.middleware");
const {
  loginController,
  tokenController,
  logoutController,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", loginController);

router.post("/token", tokenController);

router.post("/logout", authenticate, logoutController);

module.exports = router;
