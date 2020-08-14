const variable = require("./varable");
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(variable.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect with succes");
  } catch (error) {
    console.log("problem in connect");
  }
};

module.exports = connect;
