const { findUserIDfromCustomerID } = require("../models/customer.model.js");
const { findUserIDfromEmployeeID } = require("./employee.model.js");
const { findUserIDfromTransactionID } = require("./transaction.model.js");

const isOwnCustomer = async (customerID, userID) => {
  const userIDfromCustomerID = await findUserIDfromCustomerID(customerID);
  return userIDfromCustomerID.userID === userID;
}

const isOwnEmployee = async (employeeID, userID) => {
  const userIDfromEmployeeID = await findUserIDfromEmployeeID(employeeID);
  return userIDfromEmployeeID.userID === userID;
};

const isOwnAccount = async (accID, userID) => {
  const userIDfromTrnID = await findUserIDfromTransactionID(accID);
  return userIDfromTrnID.userID === userID;
}


module.exports = {isOwnCustomer, isOwnAccount, isOwnEmployee};