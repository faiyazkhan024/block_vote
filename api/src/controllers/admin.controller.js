const voterValidator = require("../validators/voter.validator");

const addVoterController = async (req, res, next) => {
  try {
    const voter = req.body;
    await voterValidator(voter);
    const result = await addVoter(voter);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { addVoterController };
