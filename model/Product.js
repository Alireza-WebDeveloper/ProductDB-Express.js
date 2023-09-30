const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: String },
    date: { type: Date },
  },
  { collection: 'Product', versionKey: false }
);

module.exports = mongoose.model('Product', ProductSchema);
