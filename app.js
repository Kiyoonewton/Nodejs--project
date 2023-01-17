const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//universal routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1> <a href='api/v1/products'></a>");
});

//product routes

//error handling
app.use(notFound);
app.use(errorHandler);

//listen
const start = () => {
  try {
    app.listen(port, console.log(`App listening on port ${port}`));
  } catch (error) {}
};

start();
