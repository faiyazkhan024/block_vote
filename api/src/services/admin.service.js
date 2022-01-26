const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

const login = async (user) => {
  const id = uuid();
  const { username } = user;
  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
  return { id, username, accessToken, message: "User Created Successfully" };
};

module.exports = { login };
