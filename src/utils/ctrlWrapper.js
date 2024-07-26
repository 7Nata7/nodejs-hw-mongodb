const ctrlWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      console.error('Error caught in ctrlWrapper:', error);
      next(error);
    }
  };
};

export default ctrlWrapper;