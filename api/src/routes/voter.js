const express = require("express");

const authenticate = require("../middlewares/auth");
const { postVoter, getVoter, getAllVoter } = require("../controllers/voter");

const router = express.Router();

router.post("/", postVoter);

router.get("/", getAllVoter);

router.get("/:id", getVoter);

module.exports = router;
