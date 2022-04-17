const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  postCandidate,
  getCandidate,
  getAllCandidate,
  deleteCandidate,
} = require("../controllers/candidate");

const router = express.Router();

router.post("/", authenticate(["admin"]), postCandidate);

router.get("/", getAllCandidate);

router.get("/:id", getCandidate);

router.delete("/:id", authenticate(["admin"]), deleteCandidate);

module.exports = router;
