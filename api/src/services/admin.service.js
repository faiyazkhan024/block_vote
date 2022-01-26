const jwt = require("jsonwebtoken");

const login = async (user) => {
  const { username } = user;
  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
  return { accessToken };
};

module.exports = { login };
