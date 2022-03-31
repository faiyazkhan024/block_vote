const User = require("../models/user");

module.exports = async () => {
  const admin = await User.find({ username: "admin" });
  if (!admin) {
    await User.create({
      username: "admin",
      password: "admin@1234",
      type: "admin",
    });
  }
};
