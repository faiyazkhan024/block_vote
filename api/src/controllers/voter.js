const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const mail = require("../services/mail");
const Voter = require("../models/voter");
const Ballot = require("../models/ballot");
const Election = require("../models/election");
const generatePass = require("../helpers/generatePass");

const getVoter = asyncHandler(async (_, res, next) => {
  try {
    const allVoter = await Voter.find({});
    res.status(200).json(allVoter);
  } catch (error) {
    next(error);
  }
});

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
    console.error(error.message);
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

const getVoterById = asyncHandler(async (req, res, next) => {
  const { id: voterId } = req.params;
  if (!voterId) next(createError.BadRequest("Voter ID is required."));
  try {
    const voter = await Voter.findById(voterId);
    if (!voter)
      next(createError.BadRequest(`Voter with id:${voterId} is not found`));
    res.status(200).json(voter);
  } catch (error) {
    next(error);
  }
});

const postVote = asyncHandler(async (req, res, next) => {
  const { electionId, candidateId, voterId } = req.body;
  try {
    const election = await Election.findById(electionId);
    if (new Date(election.end).getTime() === new Date.getTime())
      next(createError.BadRequest("Election have expired"));

    const ballot = await Ballot.findOne({ election: electionId });
    if (!ballot.voters.includes(voterId))
      next(
        createError.BadRequest(
          `Voter with id:${voterId} is not allowed to vote or has already voted.`
        )
      );
    await ballot.update({
      ...ballot,
      votes: [...ballot.votes, candidateId],
    });
    res.status(201).json({ voterId, message: "Voted" });
  } catch (error) {
    next(error);
  }
});

module.exports = { getVoter, postVoter, deleteVoter, getVoterById, postVote };
