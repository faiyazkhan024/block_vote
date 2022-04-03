const express = require("express");

const authenticate = require("../middlewares/auth");
const { postVoter, getVoter, getAllVoter } = require("../controllers/voter");

const router = express.Router();

router.post("/", authenticate(["admin"]), postVoter);

router.get("/", authenticate(["admin"]), getAllVoter);

router.get("/:id", authenticate(["admin", "voter"]), getVoter);

module.exports = router;
