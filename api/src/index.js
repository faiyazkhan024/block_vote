const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
require("dotenv").config();

const admin = require("./routes/admin.route");
const token = require("./routes/token.route");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(token);
app.use("/admin", admin);

app.use(async (_, __, next) => next(createError.NotFound()));
app.use((err, _, res, __) =>
  res
    .status(err.status || 500)
    .json({ status: err.status, message: err.message })
);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
