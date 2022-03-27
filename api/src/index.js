const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const createError = require("http-errors");
require("dotenv").config();

const user = require("./routes/user");
const admin = require("./routes/admin");
const voter = require("./routes/voter");
const candidate = require("./routes/candidate");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Handle Routes
app.use("/user", user);
app.use("/admin", admin);
app.use("/voter", voter);
app.use("/candidate", candidate);

// Error Handling
app.use(async (_, __, next) => next(createError.NotFound()));
app.use((err, _, res, __) =>
  res
    .status(err.status || 500)
    .json({ status: err.status, message: err.message })
);

// Start App
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
