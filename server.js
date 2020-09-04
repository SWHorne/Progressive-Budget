const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";


const server = express();

server.use(logger("dev"));

server.use(compression());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static("public"));

mongoose.connect(MONGODB_URI);

// routes
server.use(require("./routes/api.js"));

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// mongodb+srv://UofUser:<password>@budget.8ucqi.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb+srv://UofUser:AtlasPW2020@budget.8ucqi.mongodb.net/budget?retryWrites=true&w=majority