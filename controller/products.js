const Product = require("../model/productSchema");

const getAllProductsStatic = async (req, res) => {
  // throw new Error
  const products = await Product.find({});
  res.status(200).json({ products, nbHit: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHit: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
