const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  getVoter,
  postVote,
  postVoter,
  deleteVoter,
  getVoterById,
} = require("../controllers/voter");

const router = express.Router();

router.get("/", authenticate(["admin"]), getVoter);

router.post("/", authenticate(["admin"]), postVoter);

router.get("/:id", authenticate(["admin", "voter"]), getVoterById);

router.delete("/:id", authenticate(["admin"]), deleteVoter);

router.post("/vote", authenticate(["voter"]), postVote);

module.exports = router;
