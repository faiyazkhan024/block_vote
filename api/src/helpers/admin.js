const Admin = require("../models/admin");

const createAdmin = async () => {
  const admin = await Admin.find({ username: "admin" });
  if (!admin.length) {
    await Admin.create({
      username: "admin",
      password: "admin@1234",
    });
  }
};

module.exports = createAdmin;
