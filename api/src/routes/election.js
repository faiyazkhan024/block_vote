const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  postElection,
  getElection,
  getAllElection,
  deleteElection,
} = require("../controllers/election");

const router = express.Router();

router.post("/", authenticate(["admin"]), postElection);

router.get("/", getAllElection);

router.get("/:id", getElection);

router.delete("/:id", authenticate(["admin"]), deleteElection);

module.exports = router;
