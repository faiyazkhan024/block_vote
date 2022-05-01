const mongoose = require("mongoose");

const ballotSchema = mongoose.Schema({
  election: { type: mongoose.Schema.Types.ObjectId, ref: "election" },
  voters: [{ type: mongoose.Schema.Types.ObjectId, ref: "voter" }],
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "candidate" }],
});

module.exports = mongoose.model("ballot", ballotSchema);
