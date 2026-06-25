export const sendSuccess = (res, data = null, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const sendCreated = (res, data = null, message = 'Created') => {
  return sendSuccess(res, data, message, 201);
};
