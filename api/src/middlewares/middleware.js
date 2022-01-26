const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  if (token === undefined)
    return res.status(401).json({ message: "Access token undefined" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
    if (err) return res.status(401).json({ message: "Invalid access token" });
    req.user = result;
    next();
  });
};

module.exports = authenticate;
