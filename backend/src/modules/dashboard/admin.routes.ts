import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import { authorize } from '../../middleware/authorize.middleware.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';
import { validateRequest } from '../../middleware/validate.middleware.js';
import { updateUserRoleSchema } from '../../shared/schemas/admin.schema.js';
import * as AdminController from './admin.controller.js';

const router = Router();

// All admin routes: must be authenticated AND have admin role
router.use(protect, authorize('admin'));

/**
 * @route   GET /api/admin/stats
 * @desc    Platform-wide statistics
 * @access  Admin only
 */
router.get('/stats', asyncHandler(AdminController.getPlatformStats));

/**
 * @route   GET /api/admin/users
 * @desc    List all users (paginated, filterable by role)
 * @access  Admin only
 * @query   page, limit, role
 */
router.get('/users', asyncHandler(AdminController.getAllUsers));

/**
 * @route   GET /api/admin/users/:userId
 * @desc    Get a specific user by ID
 * @access  Admin only
 */
router.get('/users/:userId', asyncHandler(AdminController.getUserById));

/**
 * @route   PATCH /api/admin/users/:userId/role
 * @desc    Promote or demote a user's role
 * @access  Admin only
 */
router.patch(
  '/users/:userId/role',
  validateRequest(updateUserRoleSchema),
  asyncHandler(AdminController.updateUserRole)
);

/**
 * @route   DELETE /api/admin/users/:userId
 * @desc    Delete a user and all their data (cascade)
 * @access  Admin only
 */
router.delete('/users/:userId', asyncHandler(AdminController.deleteUser));

export default router;
