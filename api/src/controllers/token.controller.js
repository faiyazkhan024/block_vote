const { getToken } = require("../services/token.service");

const tokenController = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(406).json({ message: "Refresh token is required" });
    const result = await getToken(refreshToken);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { tokenController };
