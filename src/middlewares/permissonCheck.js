const permissionCheck = (access, permissions) => {
  return permissions.includes(access);
};

const permissionInjector = (req, res, next) => {
  //TODO
  req.body.permissions = []
  next();
};

module.exports = permissionCheck;
