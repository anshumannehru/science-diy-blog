/*write the middleware*/
const jwt = require("jsonwebtoken");
const jwtsecret = "steamtroopsindia";

module.exports = function (req, res, next) {
  const token = req.headers("x-auth-token");
  if (!token) return res.status(401).json({ msg: "Authorization denied" });
  try {
    const decoded = jwt.verify(token, jwtsecret);
    req.user = decoded.user;
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
