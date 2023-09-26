const { query, escapedQuery } = require("../services/db.service.js");
const {
  generateRandomPass,
  generate_hash: generateHash,
} = require("../utils/password_helper.js");

const findOne = async (id) => {
  const result = await query(
    `SELECT c.customerID, u.name, c.nic, u.dob, c.address, c.phone, u.userID, u.username from Customer c inner join User u on c.userID=u.userID where c.customerID=${id}`
  );
  console.log(result);
  return result;
};

const findAll = async () => {
  const result = await query(
    "SELECT c.customerID, u.name, c.nic, u.dob, c.address, c.phone, u.userID, u.username from Customer c inner join User u on c.userID=u.userID order by c.customerID"
  );
  console.log(result);
  return result;
};

const addCustomer = async (data) => {
  const password = data.password ? data.password : generateRandomPass();
  const hashedPass = await generateHash(password);
  const result = await escapedQuery({
    sql: `INSERT INTO User (userID, name, dob, username, password) VALUES (NULL, ?, ?, ?, ?);
        INSERT INTO Customer (customerID, nic, address, phone, userID) VALUES (NULL, ?, ?, ?, LAST_INSERT_ID());`,
    values: [
      data.name,
      data.dob,
      data.username,
      hashedPass,
      data.nic,
      data.address,
      data.phone,
    ],
  });
  console.log(result);
  return result;
};

module.exports = { findOne, findAll };
