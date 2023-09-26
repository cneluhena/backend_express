const express = require("express");
const { query, escapedQuery } = require("../services/db.service");
const permissionCheck = require('../middlewares/permissionCheck');
const { findOwn } = require("../models/transaction.model");
const router = express.Router();


// TODO Compelete this module
router.get("/transactions", async (req, res) => {
    let result;
  try {
      // TODO Implement isOwnAccount
        if ((req.query.acc && isOwnAccount(req.query.acc)) || permissionCheck("ALL_TRANSACTIONS")) {
          result = await findOwn(req.query.acc);
        } else if (permissionCheck("ALL_TRANSACTIONS", permissions)) {
            result = await query("SELECT * from Transaction");
        } else {
            res.status(403).send({ "message": "Permissions not found" });
        }
    } catch (error) {
        console.error(err);
        res.status(500).send(err);
    }
    res.status(200).send(result);
});

router.get("/transactions/:id", (req, res) => {
  query(`SELECT * from Customer where customerID=${req.params.id}`)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});


module.exports = router;