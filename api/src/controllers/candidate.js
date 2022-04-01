const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const postCandidate = asyncHandler(async () => {});

const getCandidate = asyncHandler(async () => {});

const getAllCandidate = asyncHandler(async () => {});

module.exports = { postCandidate, getCandidate, getAllCandidate };
