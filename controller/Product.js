const ProductModel = require('../model/Product');

exports.getAllProduct = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (error) {
    res.status(401).json({
      message: `Error : ${error.message}`,
    });
  }
};
