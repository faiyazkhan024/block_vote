const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

try {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
} catch (error) {
  console.error("Error occurred:", error.message);
}
