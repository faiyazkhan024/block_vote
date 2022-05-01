const mongoose = require("mongoose");

const electionSchema = mongoose.Schema({
  for: {
    type: String,
    require: true,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "candidate" }],
  voters: [{ type: mongoose.Schema.Types.ObjectId, ref: "voter" }],
  about: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("election", electionSchema);
