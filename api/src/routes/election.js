const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  postElection,
  getElection,
  getAllElection,
} = require("../controllers/election");

const router = express.Router();

router.post("/", postElection);

router.get("/", getAllElection);

router.get("/:id", getElection);

module.exports = router;
