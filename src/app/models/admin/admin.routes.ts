import express from 'express';
import { AdminController } from './admin.controller.js';

const router = express.Router();

router.post('/user-admin', AdminController.CreateAdminController);

export const AdminRoutes = router;
