const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

const authRoute = require("./src/routes/auth.routes");
const customerRoute = require("./src/routes/customer.routes");
app.use("/oauth", authRoute);
app.use("/customer", customerRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is listnening on port ${port}`);
});
