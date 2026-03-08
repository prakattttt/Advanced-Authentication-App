const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let status = err.status;
  let message = err.message || "Something went wrong!";

  res.status(statusCode).json({
    status,
    message,
  });
};

export default errorHandler;