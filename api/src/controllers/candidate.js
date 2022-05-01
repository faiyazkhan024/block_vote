const asyncHandler = require("express-async-handler");
const createError = require("http-errors");
const mongoose = require("mongoose");

const Candidate = require("../models/candidate");

const getCandidate = asyncHandler(async (_, res, next) => {
  try {
    const allCandidate = await Candidate.find({});
    res.status(200).json(allCandidate);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const postCandidate = asyncHandler(async (req, res, next) => {
  const candidate = req.body;
  if (!candidate) next(createError.BadRequest("Candidate is missing."));
  try {
    const newCandidate = await Candidate(candidate);
    const createdCandidate = await newCandidate.save();
    res.status(201).json(createdCandidate);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const deleteCandidate = asyncHandler(async (req, res, next) => {
  const candidateId = req.params.id;
  if (!candidateId) next(createError.BadRequest("Candidate ID is required."));
  try {
    const deletedCandidate = await Candidate.findOneAndDelete({
      _id: candidateId,
    });
    res.status(200).json(deletedCandidate);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const getCandidateById = asyncHandler(async (req, res, next) => {
  const { id: candidateId } = req.params;
  if (!candidateId) next(createError.BadRequest("Candidate ID is required."));
  try {
    const candidate = await Candidate.findById(candidateId);
    if (!candidate)
      next(
        createError.BadRequest(`Candidate with id:${candidateId} is not found`)
      );
    res.status(200).json(candidate);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = {
  getCandidate,
  postCandidate,
  deleteCandidate,
  getCandidateById,
};
