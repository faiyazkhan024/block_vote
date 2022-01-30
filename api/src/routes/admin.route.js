const express = require("express");

const authenticate = require("../middlewares/authenticate.middleware");
const { addVoterController } = require("../controllers/admin.controller");

const router = express.Router();

router.get("/:id");

router.post("/voter", authenticate, addVoterController);

module.exports = router;
