const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(
  fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  })
);
//route imports
const product = require("./routes/productRoute.js");
const user = require("./routes/userRoute.js");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

//use middleware
app.use("/api/v1", product);
app.use("/api/v1/", user);
app.use("/api/v1/", order);
app.use("/api/v1", payment);

//middleware for error
app.use(errorMiddleware);
module.exports = app;
