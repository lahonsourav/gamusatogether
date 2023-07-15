const ErrorHandler = require("../utils/errorhandler");

//this is error handler for if product not found

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongoDB id error (cast error)
  if (err.name == "CastError") {
    const message = `Resouce not found: Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //mongoose duplicate key error

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //Json Web Token Error
  if (err.name == "JsonWebTOkenError") {
    const message = `Json Web Token is invalid`;
    err = new ErrorHandler(message, 400);
  }

  //token expire error
  if (err.name == "TokenExpiredError") {
    const message = `Reset Token is Expired`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    // message: err.stack,
    error: err.message,
  });
};
