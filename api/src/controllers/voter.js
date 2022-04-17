const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const mail = require("../services/mail");
const Voter = require("../models/voter");
const generatePass = require("../helpers/generatePass");

const postVoter = asyncHandler(async (req, res, next) => {
  const voter = req.body;
  if (!voter) next(createError.BadRequest("Voter is Empty"));
  const { email } = voter;
  const username = voter.email.split("@")[0];
  const password = generatePass(10);
  try {
    const newVoter = await Voter({ ...voter, username, password });
    const createdVoter = await newVoter.save();
    await mail({ email, username, password });
    res.status(201).json(createdVoter);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const getVoter = asyncHandler(async (req, res, next) => {
  const voterId = req.params;
  if (!voterId) next(createError.BadRequest("Voter ID is required."));
  try {
    const voter = await Voter.findOne({ _id: voterId });
    if (!voter)
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

const deleteVoter = asyncHandler(async (req, res, next) => {
  const voterId = req.params.id;
  if (!voterId) next(createError.BadRequest("Voter ID is required."));
  try {
    const voter = await Voter.findOneAndDelete({ _id: voterId });
    res.status(200).json(voter);
  } catch (error) {
    next(error);
  }
});

module.exports = { postVoter, getVoter, getAllVoter, deleteVoter };
