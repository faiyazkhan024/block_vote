const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const Voter = require("../models/voter");

const postVoter = asyncHandler(async (req, res, next) => {
  const voter = req.body;
  if (!voter) next(createError.BadRequest("Voter is Empty"));
  try {
    const newVoter = await Voter(voter);
    const createdVoter = await newVoter.save();
    res.status(201).json(createdVoter);
  } catch (error) {
    next(error);
  }
});

const getVoter = asyncHandler(async (req, res, next) => {
  const voterId = req.params;
  if (!voterId) next(createError.BadRequest("Voter ID is required."));
  try {
    const voter = await Voter.find({ _id: voterId });
    if (!voter.length)
      next(createError.BadRequest(`Voter with id:${voterId} is not found`));
    res.status(200).json(voter);
  } catch (error) {
    next(error);
  }
});

const getAllVoter = asyncHandler(async (_, res, next) => {
  try {
    const allVoter = await Voter.find({});
    res.status(200).json(allVoter);
  } catch (error) {
    next(error);
  }
});

module.exports = { postVoter, getVoter, getAllVoter };
