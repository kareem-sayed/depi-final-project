import { asyncHandler } from '../middleware/asyncHandler.js';
import User from '../models/User.js';
import { sendCreated, sendSuccess } from '../utils/apiResponse.js';

export const getUsers = asyncHandler(async (_req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  return sendSuccess(res, users);
});

export const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  const userObject = user.toObject();
  delete userObject.password;

  return sendCreated(res, userObject, 'User created successfully');
});
