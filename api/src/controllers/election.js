const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const Election = require("../models/election");

const postElection = asyncHandler(async (req, res, next) => {
  const election = req.body;
  if (!election) next(createError.BadRequest("Election is Empty"));
  try {
    const newElection = await Election(election);
    const createdElection = await newElection.save();
    res.status(201).json(createdElection);
  } catch (error) {
    next(error);
  }
});

const getElection = asyncHandler(async (req, res, next) => {
  const electionId = req.params;
  if (!electionId) next(createError.BadRequest("Candidate ID is required."));
  try {
    const election = Election.find({ _id: electionId });
    if (!election.length)
      next(
        createError.BadRequest(`Election with id:${electionId} is not found`)
      );
    res.status(200).json(election);
  } catch (error) {
    next(error);
  }
});

const getAllElection = asyncHandler(async (_, res, next) => {
  try {
    const allElection = Election.find();
    res.status(200).json(allElection);
  } catch (error) {
    next(error);
  }
});

module.exports = { postElection, getElection, getAllElection };
