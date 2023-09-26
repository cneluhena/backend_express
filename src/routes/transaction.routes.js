const express = require("express");
const { query, escapedQuery } = require("../services/db.service");
const permissionCheck = require("../utils/permissionCheck");
const { findOwn, findAll, findOne } = require("../models/transaction.model");
const { isOwnAccount } = require("../models/isOwnData");
const router = express.Router();

// TODO Compelete this module
router.get("/transactions", async (req, res) => {
  let result;
  try {
    if (req.query.acc && isOwnAccount(req.query.acc, req.user)) {
      result = await findOwn(req.query.acc);
    } else if (permissionCheck("ALL_TRANSACTIONS", permissions)) {
      result = await findAll();
    } else {
      res.status(403).send({ message: "Permissions not found" });
    }
  } catch (error) {
    console.error(err);
    res.status(500).send(err);
  }
  res.status(200).send(result);
});

router.get("/transactions/:id", (req, res) => {
  if (
    permissionCheck("ALL_TRANSACTIONS", permissions) ||
    isOwnAccount(req.query.acc, req.user)
  ) {
    findOne(req.params.id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  } else {
    res.status(301).send({ message: "You don't have necessary permissions" });
  }
});

module.exports = router;
