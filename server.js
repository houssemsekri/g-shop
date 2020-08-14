const express = require("express");
const connect = require("./config/connect");
const cors = require("cors");
const path = require("path");
const env = require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
connect();

app.use("/api/game", require("./router/api/game"));
app.use("/api/order", require("./router/api/Order"));
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("connected");
});
