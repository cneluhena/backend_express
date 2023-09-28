const { query, escapedQuery } = require("../services/db.service.js");

const findOne = async (id) => {
  const result = await query(
    `SELECT userID, name, dob, username, role from User where userID=${id}`
  );
  console.log(result[0]);
  return result[0];
};

const findAll = async () => {
  const result = await query(`SELECT userID, name, dob, username, role from User`);
  console.log(result);
  return result;
};

const updateOne = async (id, data) => {
  const result = await escapedQuery({
    sql: "UPDATE User set name=?, dob=?, username=?, where userID=?",
    values: [data.name, data.dob, data.username, data.id],
  });
  console.log(result);
  return result;
};


const changeAccess = async (id, data) => {
  const result = await escapedQuery({
    sql: "UPDATE User set role=? where userID=?",
    values: [data.role, data.id],
  });
  console.log(result);
  return result;
};

const getPassword = async (id) => {
  const result = await query(
    `SELECT password from User where userID=${id}`
  );
  console.log(result[0]);
  return result[0];
}

const changePassword = async (id, data) => {
  const hashedPass = await generateHash(data.password);
  const result = await escapedQuery({
    sql: "UPDATE User set password=? where userID=?",
    values: [hashedPass, data.id],
  });
  console.log(result);
  return result;
}

module.exports = { findAll, findOne, updateOne, changeAccess, getPassword, changePassword };
