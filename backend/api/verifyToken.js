const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, 'my_secret_key', (err, user) => {
      if (err) res.status(403).json("Invalid Token!");
      req.user = user;
      next();
    })
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;