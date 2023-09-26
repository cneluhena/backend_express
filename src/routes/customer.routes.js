const express = require("express");
const { query, escapedQuery } = require("../services/db.service");
const permissionCheck = require("../middlewares/permissonCheck");
const { findAll, findOne } = require("../models/customer.model");
const router = express.Router();

router.get("/customers", (req, res) => {
  //TODO
  if (permissionCheck("ALL_CUSTOMERS")) {
    findAll()
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

router.get("/customers/:id", (req, res) => {
  // TODO Implement isOwnData
  if (permissionCheck("ALL_CUSTOMERS") || isOwnData()) {
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

router.post("/customers/new", (req, res) => {
  // TODO Implement customer creation in models
  escapedQuery(
    `Insert into Customer (Name, NIC, DOB, Address, Phone, Email)
      Values (${req.body.name}, ${req.body.nic}, ${req.body.dob}, ${req.body.address}, ${req.body.phone}, ${req.body.email})
    `
  )
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
