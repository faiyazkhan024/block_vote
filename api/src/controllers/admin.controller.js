const { login } = require("../services/admin.service");

const loginController = async (req, res) => {
  try {
    const user = req.body;
    const result = await login(user);
    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { loginController };
