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
    console.log(result);
    return result;
}

const findAll = async (id) => {
  const result = await query("SELECT * from Transaction");
  console.log(result);
  return result;
};


module.exports = { findAll, findOwn, findOne };
