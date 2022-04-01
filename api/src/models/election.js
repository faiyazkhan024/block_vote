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
  candidates: { type: [Schema.Types.ObjectId], ref: "candidate" },
  voters: { type: [Schema.Types.ObjectId], ref: "voter" },
});

module.exports = mongoose.model("election", electionSchema);
