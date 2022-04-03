const express = require("express");

const authenticate = require("../middlewares/auth");
const { loginUser, getToken, logoutUser } = require("../controllers/auth");

const router = express.Router();

router.post("/login/:type", loginUser);

router.get("/token/:type", getToken);

router.delete("/logout/:type", authenticate, logoutUser);

module.exports = router;
