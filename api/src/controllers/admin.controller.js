const { login } = require("../services/admin.service");

const loginController = (req, res) => {
  const user = req.body;
  if (!user.username)
    return res.status(406).json({ message: "Username is required" });
  if (!user.password)
    return res.status(406).json({ message: "Password is required" });
  const result = login(user);
  res.status(200).json(result);
};

module.exports = { loginController };
