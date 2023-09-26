const { query, escapedQuery } = require("../services/db.service.js");

const findOne = async (id) => {
  const result = await query(
    `SELECT userID, name, dob, username from User where userID=${id}`
  );
  console.log(result);
  return result;
};

const findAll = async () => {
  const result = await query(`SELECT userID, name, dob, username from User`);
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

module.exports = { findAll, findOne, updateOne };
