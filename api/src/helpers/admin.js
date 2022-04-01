const User = require("../models/user");

const createAdmin = async () => {
  const admin = await User.find({ username: "admin" });
  if (!admin.length) {
    await User.create({
      username: "admin",
      password: "admin@1234",
      type: "admin",
    });
  }
};

module.exports = createAdmin;
