const { verifyToken } = require("../utils/token.util");

const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access token require" });
  verifyToken(token, "access", (err, result) => {
    if (err)
      return res
        .status(403)
        .json({ message: "Invalid access token. Access Denied" });
    req.user = result;
    next();
  });
};

module.exports = authenticate;
