const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  postCandidate,
  getCandidate,
  getAllCandidate,
} = require("../controllers/candidate");

const router = express.Router();

router.post("/", postCandidate);

router.get("/", getAllCandidate);

router.get("/:id", getCandidate);

module.exports = router;
