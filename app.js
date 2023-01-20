const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const productsRouter = require("./route/productsRouter");

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const { default: mongoose } = require("mongoose");

const port = 3000;

//middleware
app.use(express.json());

//universal routes
app.get("/", (req, res) => {
  res.send(
    "<h1>Store API</h1> <a href='api/v1/products'>Navigate to Product</a>"
  );
});

//product routes
app.use("/api/v1/products", productsRouter);

//error handling
app.use(notFound);
app.use(errorHandler);

//listen
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, console.log(`App listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
