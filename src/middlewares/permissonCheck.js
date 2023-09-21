const permissionCheck = (access, permissions) => {
    return permissions.includes(access);
}

export default {permissionCheck}