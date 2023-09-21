const express = require("express");
const { query, escapedQuery } = require("../services/db.service");
const router = express.Router();

router.get("/customers", (req, res) => {
  query("SELECT * from Customer")
    .then((result) => {
      console.log(result);
      res.statusCode(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.statusCode(500).send(err);
    });
});

router.get("/customers/:id", (req, res) => {
  query(`SELECT * from Customer where customerID=${req.params.id}`)
    .then((result) => {
      console.log(result);
      res.statusCode(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.statusCode(500).send(err);
    });
});

router.put("/customers/:id", (req, res) => {
  escapedQuery(
    `UPDATE Customer
    set Name=${req.body.name}, NIC=${req.body.nic}, 
    DOB=${req.body.dob}, address=${req.body.address}, 
    phone=${req.body.phone}, email=${req.body.email}
    where customerID=${req.params.id}`
  )
    .then((result) => {
      console.log(result);
      res.statusCode(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.statusCode(500).send(err);
    });
});

router.post("/customers/add", (req, res) => {
  escapedQuery(
    `Insert into Customer (Name, NIC, DOB, Address, Phone, Email)
      Values (${req.body.name}, ${req.body.nic}, ${req.body.dob}, ${req.body.address}, ${req.body.phone}, ${req.body.email})
    `
  )
    .then((result) => {
      console.log(result);
      res.statusCode(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.statusCode(500).send(err);
    });
});

module.exports = router;
