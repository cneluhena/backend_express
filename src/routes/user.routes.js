const express = require("express");
const router = express.Router();
const { permissionCheck } = require("../middlewares/permissonInjector");
const { findOne, findAll, updateOne } = require("../models/user.model");

router.get("/users", async (req, res) => {
  if (permissionCheck("ALL_USERS")) {
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

router.get("/users/:id", (req, res) => {
  if (permissionCheck("ALL_USERS")) {
    findOne(req.params.id)
      .then((result) => {
        console.log(result);
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

router.put("/users/:id", (req, res) => {
  if (permissionCheck("ALL_USERS") || isOwnData()) {
    updateOne(id, req.body)
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
