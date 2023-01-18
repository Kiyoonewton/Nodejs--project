const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "get all the product" });
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "get all static products" });
};

module.exports = { getAllProducts, getAllProductsStatic };
