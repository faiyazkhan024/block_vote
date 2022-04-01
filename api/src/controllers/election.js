const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const postElection = asyncHandler(async () => {});

const getElection = asyncHandler(async () => {});

const getAllElection = asyncHandler(async () => {});

module.exports = { postElection, getElection, getAllElection };
