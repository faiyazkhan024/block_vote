const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  getCandidate,
  postCandidate,
  deleteCandidate,
  getCandidateById,
} = require("../controllers/candidate");

const router = express.Router();

router.get("/", getCandidate);

router.post("/", authenticate(["admin"]), postCandidate);

router.delete("/:id", authenticate(["admin"]), deleteCandidate);

router.get("/:id", getCandidateById);

module.exports = router;
