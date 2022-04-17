const express = require("express");

const authenticate = require("../middlewares/auth");
const {
  postVoter,
  getVoter,
  getAllVoter,
  deleteVoter,
} = require("../controllers/voter");

const router = express.Router();

router.post("/", authenticate(["admin"]), postVoter);

router.get("/", authenticate(["admin"]), getAllVoter);

router.get("/:id", authenticate(["admin", "voter"]), getVoter);

router.delete("/:id", authenticate(["admin"]), deleteVoter);

module.exports = router;
