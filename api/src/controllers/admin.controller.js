const addVoterController = async (req, res, next) => {
  try {
    const voter = req.body;
    const result = await addVoter(voter);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { addVoterController };
