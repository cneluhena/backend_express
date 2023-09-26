const jwt = require("jsonwebtoken");
const { findOne } = require("../models/user.model");

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.API_SECRET,
      function (err, decode) {
        if (err) req.user = undefined;
        findOne(decode.id)
          .then((result) => {
            req.user = result;
            next();
          })
          .catch((err) => {
            console.error(err);
              res.status(500).send({ message: err });
          });
      }
    );
  } else {
    req.user = undefined;
    next();
  }
  next();
};

module.exports = verifyToken;
