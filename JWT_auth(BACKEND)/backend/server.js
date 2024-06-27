const express = require("express");
const router = require("./routes/getRoute");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", router);
app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
