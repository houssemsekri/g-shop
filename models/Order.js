const mongoose = require("mongoose");
const Shema = mongoose.Schema;
const Order = new Shema({
  product: [
    {
      id: String,
      qty: String,
    },
  ],
  name: String,
  lastName: String,
  email: String,
  number: String,
  country: String,
  State: String,
  address: String,
  post: String,
});
module.exports = mongoose.model("Order", Order);
