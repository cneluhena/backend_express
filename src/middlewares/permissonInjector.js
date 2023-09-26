
const permissionInjector = (req, res, next) => {
  //TODO Implement this middleware
  req.body.permissions = [];
  next();
};

module.exports = permissionInjector;
