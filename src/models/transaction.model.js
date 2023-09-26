const { query, escapedQuery } = require("../services/db.service.js");

const findOwn = async (acc) => {
  const result = await query(
    `(SELECT * from Transaction where FromAccNo=${acc}) UNION (SELECT * FROM Transaction where ToAccNo=${acc})`
  );
  console.log(result);
  return result;
};

const findOne = async (id) => {
  const result = await query(
    `SELECT * from Transaction where transactionID=${id}`
  );
  console.log(result[0]);
  return result[0];
};

const findAll = async (id) => {
  const result = await query("SELECT * from Transaction");
  console.log(result);
  return result;
};

const findUserIDfromTransactionID = async (transactionID) => {
  const result = await query(
    `SELECT c.userID from Transaction t inner join Customer c where t.transactionID=${transactionID}`
  );
  console.log(result[0]);
  return result[0];
};


module.exports = { findAll, findOwn, findOne, findUserIDfromTransactionID };
