// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    data: error.message,
  });
};

export default errorHandler;