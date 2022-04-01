const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const postVoter = asyncHandler(async () => {});

const getVoter = asyncHandler(async () => {});

const getAllVoter = asyncHandler(async () => {});

module.exports = { postVoter, getVoter, getAllVoter };
