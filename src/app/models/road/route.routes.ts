import express from 'express';
import { RouteController } from './route.controller.js';

const router = express.Router();

router.post('/user-route', RouteController.CreateRouteController);

export const BusRoutes = router;
