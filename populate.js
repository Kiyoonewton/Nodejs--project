require("dotenv").config();
const mongoose = require("mongoose");

const Product = require("./model/productSchema");

const productsJson = require("./products.json");

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productsJson);
    console.log("Suceess!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
