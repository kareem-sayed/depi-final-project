import { sendSuccess } from '../utils/apiResponse.js';

export const getHealth = (_req, res) => {
  return sendSuccess(res, {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
};
