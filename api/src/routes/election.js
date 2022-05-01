const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  getElection,
  postElection,
  deleteElection,
  getElectionById,
} = require("../controllers/election");

const router = express.Router();

router.get("/", getElection);

router.post("/", authenticate(["admin"]), postElection);

router.delete("/:id", authenticate(["admin"]), deleteElection);

router.get("/:id", getElectionById);

module.exports = router;
