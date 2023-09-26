const permissionCheck = (access, permissions) => {
  return permissions.includes(access);
};
exports.permissionCheck = permissionCheck;
