const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!";

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    return res.status(400).json({
      message: `${field} already exists`,
    });
  }

  res.status(statusCode).json({
    message,
  });
};

export default errorHandler;
