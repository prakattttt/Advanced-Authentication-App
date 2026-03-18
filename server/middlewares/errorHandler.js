const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let status = err.status;
  let message = err.message || "Something went wrong!";

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    return res.status(400).json({
      message: `${field} already exists`,
      status: "client error"
    });
  }

  res.status(statusCode).json({
    status,
    message,
  });
};

export default errorHandler;
